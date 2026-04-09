"""Translate the VNS *User Guide* VitePress site into Vietnamese.

What it does
- Reads Markdown files under --src (default: src)
- Writes translated Markdown to --out (default: src-vi)
- Preserves fenced code blocks and HTML/component-only lines (e.g. <ImagePopup ... />)
- Preserves inline code spans and link targets (URLs) via placeholders
- Replaces the product name in translatable text: VNS -> VNS (default)
- Copies static assets from src/public -> out/public

Notes
- This uses deep-translator's GoogleTranslator (requires internet).
- Large doc sets can take a long time; rerun safely with --resume.

Examples
  pip install -r scripts/requirements.txt
  python scripts/translate_to_vi.py
  python scripts/translate_to_vi.py --max-files 5
  python scripts/translate_to_vi.py --delay 0.5
"""

from __future__ import annotations

import argparse
import re
import shutil
import sys
import time
from dataclasses import dataclass
from pathlib import Path
from typing import Any

import yaml
from deep_translator import GoogleTranslator


DEFAULT_REPLACEMENTS = [(re.compile(r"\bVNS\b", flags=re.IGNORECASE), "VNS")]

# Keys whose values should never be translated in YAML frontmatter
YAML_SKIP_KEYS = {
    "layout",
    "link",
    "href",
    "src",
    "theme",
    "icon",
}

# Max characters per translator request (keep below typical limits)
MAX_CHARS_PER_REQUEST = 3500


@dataclass
class TranslatorConfig:
    source_lang: str
    target_lang: str
    delay_seconds: float
    max_chars: int


class _TranslateEngine:
    def __init__(self, cfg: TranslatorConfig, *, strict: bool) -> None:
        self._cfg = cfg
        self._strict = strict
        self._translator = GoogleTranslator(source=cfg.source_lang, target=cfg.target_lang)

    def translate(self, text: str) -> str:
        if not text:
            return text

        # Preserve leading/trailing whitespace exactly (especially newlines).
        leading_ws = re.match(r"^\s*", text).group(0)
        trailing_ws = re.search(r"\s*$", text).group(0)
        core = text[len(leading_ws) : len(text) - len(trailing_ws)] if trailing_ws else text[len(leading_ws) :]

        cleaned = core.strip()
        if not cleaned:
            return text

        # Skip strings that are very likely to be paths/urls
        if cleaned.startswith("http://") or cleaned.startswith("https://") or cleaned.startswith("/"):
            return text

        # Reduce risk of mangling pure HTML fragments (but allow placeholder markers like @@VNS_...@@).
        if re.match(r"^\s*<[A-Za-z]", cleaned):
            return text

        last_exc: Exception | None = None

        for attempt in range(1, 4):
            try:
                result = self._translator.translate(core)
                if not isinstance(result, str):
                    raise TypeError(f"Translator returned non-string value: {type(result).__name__}")
                if self._cfg.delay_seconds > 0:
                    time.sleep(self._cfg.delay_seconds)
                return leading_ws + result + trailing_ws
            except Exception as exc:
                last_exc = exc
                # Backoff and retry
                if attempt >= 3:
                    break
                time.sleep(min(5.0, 0.75 * attempt))

        if self._strict and last_exc is not None:
            raise last_exc

        print(f"[WARN] translate failed; keeping original text. error={last_exc}", file=sys.stderr)
        return text


_CODE_SPAN_RE = re.compile(r"(`+)([^`]*?)\1")

# Matches markdown links/images: [text](target) or ![alt](target)
_MD_LINK_TARGET_RE = re.compile(r"(\!?(?:\[[^\]]*\])\()([^\)]+)(\))")

# Matches bare URLs that shouldn't be translated
_BARE_URL_RE = re.compile(r"\bhttps?://[^\s)\]]+", flags=re.IGNORECASE)

# Preserve markdown prefixes so translation doesn't corrupt structure.
# NOTE: Use only spaces/tabs for indentation; `\s` includes newlines and can
# accidentally match across blank lines (corrupting Markdown headings/lists).
_HEADING_PREFIX_RE = re.compile(r"(?m)^([ \t]*#{1,6})([ \t]+)")
_LIST_PREFIX_RE = re.compile(r"(?m)^([ \t]*(?:\d+\.|[-*+]))([ \t]+)")
_BLOCKQUOTE_PREFIX_RE = re.compile(r"(?m)^([ \t]*>+)([ \t]+)")


def _apply_replacements(text: str) -> str:
    for pattern, replacement in DEFAULT_REPLACEMENTS:
        text = pattern.sub(replacement, text)
    return text


def _placeholderize(text: str) -> tuple[str, dict[str, str]]:
    placeholders: dict[str, str] = {}
    index = 0

    def add_placeholder(value: str, kind: str) -> str:
        nonlocal index
        # Use a delimiter-wrapped token so translation backends don't trim/mutate it.
        # (Plain alphanumeric tokens may be altered, which leaks placeholders into output.)
        token = f"@@VNS_{kind}_{index}@@"
        index += 1
        placeholders[token] = value
        return token

    # Protect markdown structural prefixes first (headings/lists/quotes)
    def repl_heading_prefix(match: re.Match[str]) -> str:
        return add_placeholder(match.group(1) + match.group(2), "MD")

    def repl_list_prefix(match: re.Match[str]) -> str:
        return add_placeholder(match.group(1) + match.group(2), "MD")

    def repl_quote_prefix(match: re.Match[str]) -> str:
        return add_placeholder(match.group(1) + match.group(2), "MD")

    text = _HEADING_PREFIX_RE.sub(repl_heading_prefix, text)
    text = _LIST_PREFIX_RE.sub(repl_list_prefix, text)
    text = _BLOCKQUOTE_PREFIX_RE.sub(repl_quote_prefix, text)

    # Protect inline code spans (including the backticks)
    def repl_code(match: re.Match[str]) -> str:
        return add_placeholder(match.group(0), "CODE")

    text = _CODE_SPAN_RE.sub(repl_code, text)

    # Protect markdown link targets (URLs/paths inside parentheses)
    def repl_link_target(match: re.Match[str]) -> str:
        before, target, after = match.group(1), match.group(2), match.group(3)
        token = add_placeholder(target, "URL")
        return f"{before}{token}{after}"

    text = _MD_LINK_TARGET_RE.sub(repl_link_target, text)

    # Protect bare URLs
    def repl_bare_url(match: re.Match[str]) -> str:
        return add_placeholder(match.group(0), "URL")

    text = _BARE_URL_RE.sub(repl_bare_url, text)

    return text, placeholders


def _restore_placeholders(text: str, placeholders: dict[str, str]) -> str:
    for token, value in placeholders.items():
        text = text.replace(token, value)
    return text


def _chunk_by_lines(text: str, max_chars: int) -> list[str]:
    chunks: list[str] = []
    current: list[str] = []
    current_len = 0

    for line in text.splitlines(keepends=True):
        if current and current_len + len(line) > max_chars:
            chunks.append("".join(current))
            current = []
            current_len = 0
        current.append(line)
        current_len += len(line)

    if current:
        chunks.append("".join(current))

    return chunks


def _translate_markdown_text(engine: _TranslateEngine, text: str) -> str:
    if not text.strip():
        return text

    text, placeholders = _placeholderize(text)
    text = _apply_replacements(text)

    chunks = _chunk_by_lines(text, engine._cfg.max_chars)
    translated_chunks: list[str] = []

    for chunk in chunks:
        piece = engine.translate(chunk)
        translated_chunks.append(piece if isinstance(piece, str) else chunk)

    translated = "".join(translated_chunks)
    # Apply replacements again while URLs/code are still placeholderized.
    translated = _apply_replacements(translated)
    translated = _restore_placeholders(translated, placeholders)

    return translated


def _fix_heading_spacing(text: str) -> str:
    # Ensure Markdown headings are valid: `#Title` -> `# Title`
    return re.sub(r"(?m)^([ \t]*#{1,6})([^\s#])", r"\1 \2", text)


def _is_fence_start(line: str) -> str | None:
    stripped = line.lstrip()
    if stripped.startswith("```"):
        return "```"
    if stripped.startswith("~~~"):
        return "~~~"
    return None


def _is_component_line(line: str) -> bool:
    stripped = line.strip()
    if not stripped:
        return False

    # Keep HTML/component-only lines unchanged to avoid breaking props/attributes.
    if stripped.startswith("<") and stripped.endswith(">"):
        return True

    return False


def _extract_frontmatter(markdown: str) -> tuple[str | None, str]:
    # Frontmatter must start at the beginning of the file
    if not markdown.startswith("---"):
        return None, markdown

    lines = markdown.splitlines(keepends=True)
    if not lines or lines[0].strip() != "---":
        return None, markdown

    for i in range(1, len(lines)):
        if lines[i].strip() == "---":
            fm = "".join(lines[1:i])
            body = "".join(lines[i + 1 :])
            return fm, body

    return None, markdown


def _translate_frontmatter(engine: _TranslateEngine, fm_text: str) -> str:
    try:
        data = yaml.safe_load(fm_text) or {}
    except Exception:
        # If YAML parsing fails, leave it untouched.
        return fm_text

    def walk(node: Any, *, key: str | None = None) -> Any:
        if isinstance(node, str):
            if key in YAML_SKIP_KEYS:
                return node
            return _translate_markdown_text(engine, node)

        if isinstance(node, list):
            return [walk(item) for item in node]

        if isinstance(node, dict):
            out: dict[Any, Any] = {}
            for k, v in node.items():
                out[k] = walk(v, key=str(k))
            return out

        return node

    translated = walk(data)

    # Keep YAML readable and stable
    dumped = yaml.safe_dump(
        translated,
        allow_unicode=True,
        sort_keys=False,
        width=1000,
        default_flow_style=False,
    )

    return dumped


def translate_markdown_file(engine: _TranslateEngine, src_path: Path) -> str:
    original = src_path.read_text(encoding="utf-8")

    fm, body = _extract_frontmatter(original)

    out_parts: list[str] = []

    if fm is not None:
        translated_fm = _translate_frontmatter(engine, fm)
        out_parts.append("---\n")
        out_parts.append(translated_fm.rstrip("\n") + "\n")
        out_parts.append("---\n")

        # Preserve a blank line after frontmatter if present
        if body and not body.startswith("\n"):
            out_parts.append("\n")

    # Translate body while preserving code fences & component-only lines
    in_fence = False
    fence = ""
    buffer: list[str] = []

    def flush_buffer() -> None:
        if not buffer:
            return
        text = "".join(buffer)
        translated = _translate_markdown_text(engine, text)
        translated = _fix_heading_spacing(translated)
        out_parts.append(translated)
        buffer.clear()

    for line in body.splitlines(keepends=True):
        fence_start = _is_fence_start(line)
        if not in_fence and fence_start:
            flush_buffer()
            in_fence = True
            fence = fence_start
            out_parts.append(line)
            continue

        if in_fence:
            out_parts.append(line)
            if line.lstrip().startswith(fence):
                in_fence = False
                fence = ""
            continue

        if not line.strip():
            flush_buffer()
            out_parts.append(line)
            continue

        if line.strip().startswith(":::"):
            flush_buffer()
            stripped = line.strip()
            if stripped == ":::":
                out_parts.append(line)
                continue

            match = re.match(r"^(\s*:::\s*)(\w+)(\s*)(.*?)(\s*)$", line)
            if not match:
                out_parts.append(line)
                continue

            prefix = match.group(1) + match.group(2) + match.group(3)
            title = match.group(4)
            suffix_ws = match.group(5)

            translated_title = _translate_markdown_text(engine, title) if title.strip() else title
            out_parts.append(prefix + translated_title + suffix_ws)
            continue

        if _is_component_line(line):
            flush_buffer()
            out_parts.append(line)
            continue

        buffer.append(line)

    flush_buffer()

    return "".join(out_parts)


def _copy_public(src_dir: Path, out_dir: Path) -> None:
    src_public = src_dir / "public"
    out_public = out_dir / "public"
    if not src_public.exists():
        return

    if out_public.exists():
        return

    shutil.copytree(src_public, out_public)


def main(argv: list[str]) -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--src", default="src", help="Source docs directory")
    parser.add_argument("--out", default="src-vi", help="Output directory")
    parser.add_argument("--from", dest="source_lang", default="auto", help="Source language (default: auto)")
    parser.add_argument("--to", dest="target_lang", default="vi", help="Target language (default: vi)")
    parser.add_argument("--delay", type=float, default=0.2, help="Delay between translation calls (seconds)")
    parser.add_argument("--max-files", type=int, default=0, help="Translate only the first N files (0 = all)")
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing translated files")
    parser.add_argument("--resume", action="store_true", help="Skip files that already exist (default)")
    parser.add_argument(
        "--strict",
        action="store_true",
        help="Fail fast on translation errors (default: continue and keep original text)",
    )

    args = parser.parse_args(argv)

    src_dir = Path(args.src).resolve()
    out_dir = Path(args.out).resolve()

    if not src_dir.exists():
        print(f"Source dir not found: {src_dir}", file=sys.stderr)
        return 2

    out_dir.mkdir(parents=True, exist_ok=True)

    cfg = TranslatorConfig(
        source_lang=args.source_lang,
        target_lang=args.target_lang,
        delay_seconds=max(0.0, args.delay),
        max_chars=MAX_CHARS_PER_REQUEST,
    )
    engine = _TranslateEngine(cfg, strict=args.strict)

    # Copy static assets (public)
    _copy_public(src_dir, out_dir)

    md_files = sorted(
        p
        for p in src_dir.rglob("*.md")
        if p.is_file() and ("\\public\\" not in str(p) and "/public/" not in p.as_posix())
    )

    if args.max_files and args.max_files > 0:
        md_files = md_files[: args.max_files]

    total = len(md_files)
    print(f"Found {total} markdown files to translate.")

    for idx, src_path in enumerate(md_files, start=1):
        rel = src_path.relative_to(src_dir)
        out_path = out_dir / rel
        out_path.parent.mkdir(parents=True, exist_ok=True)

        if out_path.exists() and not args.overwrite:
            # default: resume behavior
            continue

        print(f"[{idx}/{total}] {rel.as_posix()}")
        try:
            translated = translate_markdown_file(engine, src_path)
            out_path.write_text(translated, encoding="utf-8")
        except Exception as exc:
            print(f"[ERROR] failed file={rel.as_posix()} error={exc}", file=sys.stderr)
            if args.strict:
                raise

    print("Done.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
