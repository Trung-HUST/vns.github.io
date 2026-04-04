import { defineConfig } from 'vitepress'
import { redirects, makeRedirectHtml } from './_redirects'
import fs from 'fs'
import path from 'path'
import { execSync } from 'node:child_process'

function hasGit(): boolean {
  try {
    execSync('git --version', { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

const gitAvailable = hasGit()

function prefixInternalPath(link: string, prefix: string): string {
  if (!link.startsWith('/')) return link
  if (link === '/') return `${prefix}/`
  if (link.startsWith(`${prefix}/`)) return link
  return `${prefix}${link}`
}

function prefixSidebarLinks(sidebar: any[], prefix: string): any[] {
  return sidebar.map((item) => {
    const next: any = { ...item }

    if (typeof next.link === 'string') {
      next.link = prefixInternalPath(next.link, prefix)
    }

    if (Array.isArray(next.items)) {
      next.items = prefixSidebarLinks(next.items, prefix)
    }

    return next
  })
}

const sidebarEn = prefixSidebarLinks(
  [
    {
      text: 'Introduction',
      link: '/getting-started/introduction'
    },

    {
      text: 'Product Types',
      collapsed: false,
      items: [
        { text: 'Simple Product', link: '/product-types/simple-product' },
        { text: 'Configurable Product', link: '/product-types/configurable-product' },
        { text: 'Virtual Product', link: '/product-types/virtual-product' },
        { text: 'Bundle Product', link: '/product-types/bundle-product' },
        { text: 'Grouped Product', link: '/product-types/grouped-product' },
        { text: 'Downlodable Product', link: '/product-types/downloadable-product' },
        { text: 'Booking Product', link: '/product-types/booking-product' },
      ]
    },

    {
      text: 'Category',
      collapsed: false,
      items: [
        { text: 'Create Category', link: '/category/create-category' },
      ]
    },

    {
      text: 'Attributes',
      collapsed: false,
      items: [
        { text: 'Attribute Input Types', link: '/attribute/attribute-input' },
        { text: 'Create Product Attributes', link: '/attribute/product-attribute' },
        { text: 'Attribute Family', link: '/attribute/attribute-family' },
      ]
    },

    {
      text: 'Orders',
      collapsed: false,
      items: [
        { text: 'Create Order', link: '/orders/create-order' },
        { text: 'Create Invoice', link: '/orders/create-invoice' },
        { text: 'Create Shipment', link: '/orders/create-shipment' },
        { text: 'Create Refunds', link: '/orders/create-refunds' },
        { text: 'Transactions', link: '/orders/transactions' },
      ]
    },
    {
      text: 'Customers',
      collapsed: false,
      items: [
        { text: 'Create Customer', link: '/customer/create-customer' },
        { text: 'Customer Group', link: '/customer/customer-group' },
        { text: 'Customer Group Pricing', link: '/customer/customer-group-price' },
        { text: 'Customer Review', link: '/customer/customer-review' },
      ]
    },

    {
      text: 'CMS',
      collapsed: false,
      items: [
        { text: 'Create CMS', link: '/cms/create-cms' },
      ]
    },

    {
      text: 'Marketing',
      collapsed: false,
      items: [
        { text: 'Cart Rules', link: '/marketing/cart-rules' },
        { text: 'Catalog Rules', link: '/marketing/catalog-rules' },
        { text: 'Email Templates', link: '/marketing/email-templates' },
        { text: 'Events', link: '/marketing/events' },
        { text: 'Campaigns', link: '/marketing/campaigns' },
        { text: 'Newsletter Subscriptions', link: '/marketing/newsletter-subscription' },
        { text: 'Sitemaps', link: '/marketing/sitemaps' },
        { text: 'URL Rewrite', link: '/marketing/url-rewrite' },
        { text: 'Search Terms', link: '/marketing/search-terms' },
        { text: 'Search Synonyms', link: '/marketing/search-synonyms' },
      ]
    },

    {
      text: 'Reporting',
      collapsed: false,
      items: [
        { text: 'Sales', link: '/reporting/sales-report' },
        { text: 'Customers', link: '/reporting/customers-report' },
        { text: 'Products', link: '/reporting/product-report' },
      ]
    },

    {
      text: 'Settings',
      collapsed: false,
      items: [
        { text: 'Locales', link: '/settings/locales' },
        { text: 'Currencies', link: '/settings/currencies' },
        { text: 'Exchange Rates', link: '/settings/exchange-rates' },
        { text: 'Inventory Source', link: '/settings/inventory-source' },
        { text: 'Channels', link: '/settings/channels' },
        { text: 'Users', link: '/settings/users' },
        { text: 'Roles', link: '/settings/roles' },
        { text: 'Themes', link: '/settings/themes' },
        { text: 'Taxes', link: '/settings/taxes' },
        { text: 'Data Transfer', link: '/settings/data-transfer' },
      ]
    },

    {
      text: 'Configure',
      collapsed: false,
      items: [
        { text: 'Address', link: '/configure/address' },
        { text: 'Attribute', link: '/configure/attribute' },
        { text: 'Back Orders', link: '/configure/back-orders' },
        { text: 'Google Captcha', link: '/configure/google-captcha' },
        { text: 'Captcha', link: '/configure/captcha' },
        { text: 'Cart View Page', link: '/configure/cart-view-page' },
        { text: 'Checkout', link: '/configure/checkout' },
        { text: 'Configurable Choices', link: '/configure/configurable-choices' },
        { text: 'Content', link: '/configure/content' },
        { text: 'Exchange Rates Configurations', link: '/configure/exchange-rates-configurations' },
        { text: 'Coyright Content', link: '/configure/coyright-content' },
        { text: 'Custom Scripts', link: '/configure/custom-scripts' },
        { text: 'Design', link: '/configure/design' },
        { text: 'Email Settings', link: '/configure/email-settings' },
        { text: 'Frontend', link: '/configure/frontend' },
        { text: 'GDPR', link: '/configure/gdpr' },
        { text: 'Guest Checkout', link: '/configure/guest-checkout' },
        { text: 'Image Size', link: '/configure/image-size' },
        { text: 'Invoice Settings', link: '/configure/invoice-settings' },
        { text: 'Magic AI', link: '/configure/magic-ai' },
        { text: 'Notifications', link: '/configure/notifications' },
        { text: 'Order Settings', link: '/configure/orders-settings' },
        { text: 'Payment Methods', link: '/configure/payment-methods' },
        { text: 'Pricing', link: '/configure/pricing' },
        { text: 'Product View Page', link: '/configure/product-view-page' },
        { text: 'Review', link: '/configure/review' },
        { text: 'Rich Snippets', link: '/configure/rich-snippets' },
        { text: 'Settings', link: '/configure/settings' },
        { text: 'Shipping Methods', link: '/configure/shipping-methods' },
        { text: 'Shipping', link: '/configure/shipping' },
        { text: 'Social Share', link: '/configure/social-share' },
        { text: 'Taxes', link: '/configure/taxes' },
        { text: 'Weight Unit', link: '/configure/weight-unit' },
      ]
    },

    {
      text: '2 Factor Authentication',
      link: '/authentication/2fa-authentication'
    },

    {
      text: 'Shipping Methods',
      link: '/shipping-method/shipping-methods'
    },

    {
      text: 'Payment Methods',
      link: '/payment-method/payment-methods'
    },

    {
      text: 'Multi Vendor Marketplace',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/multi-vendor-marketplace/introduction' },
        { text: 'Vendor Management', link: '/multi-vendor-marketplace/vendor-management' },
        { text: 'Dealership Management', link: '/multi-vendor-marketplace/dealership-management' },
        { text: 'Order Management', link: '/multi-vendor-marketplace/order-management' },
        { text: 'Commission Management', link: '/multi-vendor-marketplace/commission-management' },
        { text: 'Product Management', link: '/multi-vendor-marketplace/product-management' },
        { text: 'Rating Management', link: '/multi-vendor-marketplace/rating-management' },
        { text: 'Payment Management', link: '/multi-vendor-marketplace/payment-management' },
        { text: 'Return Merchandise Authorization (RMA)', link: '/multi-vendor-marketplace/return-merchandise-authorization' },
        { text: 'Seller Catalog Bulk Upload', link: '/multi-vendor-marketplace/seller-catalog-bulk-upload' },
        { text: 'Seller Attributes', link: '/multi-vendor-marketplace/seller-attributes' },
        { text: 'Seller Subscription Management', link: '/multi-vendor-marketplace/seller-subscription-management' },
        { text: 'Mass Payout Management', link: '/multi-vendor-marketplace/mass-payout-management' },
        { text: 'Communications', link: '/multi-vendor-marketplace/communications' },
      ]
    },

    {
      text: 'B2B Marketplace',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/b2b-marketplace/introduction' },
        { text: 'Request for Quotes', link: '/b2b-marketplace/request-for-quotes' },
        { text: 'Buyer Seller Communication', link: '/b2b-marketplace/buyer-seller-communication' },
        { text: 'Supplier Microsite', link: '/b2b-marketplace/supplier-microsite' },
        { text: 'Buying leads', link: '/b2b-marketplace/buying-leads' },
        { text: 'Review Management', link: '/b2b-marketplace/b2b-marketplace-review' },
      ]
    },

    {
      text: 'Multi Tenant Ecommerce',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/multi-tenant-ecommerce/introduction' },
        { text: 'Super Admin Management', link: '/multi-tenant-ecommerce/super-admin-management' },
        { text: 'Tenant Management', link: '/multi-tenant-ecommerce/tenant-management' },
        { text: 'CName Mapping', link: '/multi-tenant-ecommerce/cname-mapping' },
      ]
    },

    {
      text: 'B2B eCommerce Platform',
      collapsed: false,
      items: [
        { text: 'Introduction', link: '/b2b-ecommerce-platform/introduction' },
        { text: 'Company Registration', link: '/b2b-ecommerce-platform/company-registration' },
        { text: 'Role Based Permissions', link: '/b2b-ecommerce-platform/role-based-permissions' },
        { text: 'Purchase Orders', link: '/b2b-ecommerce-platform/purchase-orders' },
        { text: 'Requisition Lists', link: '/b2b-ecommerce-platform/requisition-lists' },
        { text: 'Quick Order', link: '/b2b-ecommerce-platform/quick-order' },
        { text: 'Request for Quote', link: '/b2b-ecommerce-platform/request-for-quote' },
        { text: 'Quotation Handling', link: '/b2b-ecommerce-platform/quotation-handling' },
      ]
    },

    {
      text: 'Native Mobile App',
      link: '/open-source-mobile-app/open-source-mobile-app'
    },

  ],
  '/en'
)

export default defineConfig({
  base: process.env.BASE ?? '/',
  lang: 'vi-VN',
  title: "Tài liệu người dùng VNS",
  description: "Tài liệu người dùng VNS",

  vite: {
    server: {
      host: '0.0.0.0'
    }
  },

  srcDir: './src-vi',

  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico?v=1' }
    ],
    [
      'link',
      { rel: 'icon', type: 'image/webp', href: '/logo.webp' }
    ],
    [
      'script',
      {},
      `
       (function () {
       let script = document.createElement('script');

       script.innerHTML = 'window.chatbotConfig = { url: "https://ask.bagisto.com:5000/chat" };';

       document.body.appendChild(script);
       })();;
       `
    ],
    [
      'script',
      {
        src: 'https://bagisto.github.io/ai-chatbot/chatbot.js',
        async: true
      }
    ],
  ],

  themeConfig: {
    siteTitle: false,

    logo: {
      light: '/logo.webp',
      dark: '/logo.webp',
    },

    nav: [
      {
        text: 'Ngôn ngữ',
        items: [
          { text: 'Tiếng Việt', link: '/' },
          { text: 'English', link: '/en/' },
        ]
      },
      { text: 'Tài liệu Dev', link: 'https://devdocs.bagisto.com/' },
      { text: 'Tiện ích mở rộng', link: 'https://bagisto.com/en/extensions/' },
      { text: 'Diễn đàn cộng đồng', link: 'https://forums.bagisto.com/' },
      { text: 'Liên hệ', link: 'https://bagisto.com/en/contacts/' }
    ],

    editLink: {
      pattern: 'https://github.com/bagisto/user-guide/edit/master/src-vi/:path',
      text: 'Góp ý/cải thiện trang này trên GitHub.'
    },

    lastUpdated: gitAvailable
      ? {
          text: 'Cập nhật lần cuối',
          formatOptions: {
            dateStyle: 'full'
          }
        }
      : false,

    sidebar: {
      '/': [
      {
        text: 'Giới thiệu',
        link: '/getting-started/introduction'
      },

      {
        text: 'Loại sản phẩm',
        collapsed: false,
        items: [
          { text: 'Sản phẩm đơn', link: '/product-types/simple-product' },
          { text: 'Sản phẩm biến thể', link: '/product-types/configurable-product' },
          { text: 'Sản phẩm ảo', link: '/product-types/virtual-product' },
          { text: 'Sản phẩm gói', link: '/product-types/bundle-product' },
          { text: 'Sản phẩm nhóm', link: '/product-types/grouped-product' },
          { text: 'Sản phẩm tải xuống', link: '/product-types/downloadable-product' },
          { text: 'Sản phẩm đặt lịch', link: '/product-types/booking-product' },
        ]
      },

      {
        text: 'Danh mục',
        collapsed: false,
        items: [
          { text: 'Tạo danh mục', link: '/category/create-category' },
        ]
      },

      {
        text: 'Thuộc tính',
        collapsed: false,
        items: [
          { text: 'Kiểu đầu vào thuộc tính', link: '/attribute/attribute-input' },
          { text: 'Tạo thuộc tính sản phẩm', link: '/attribute/product-attribute' },
          { text: 'Nhóm thuộc tính', link: '/attribute/attribute-family' },
        ]
      },

      {
        text: 'Đơn hàng',
        collapsed: false,
        items: [
          { text: 'Tạo đơn hàng', link: '/orders/create-order' },
          { text: 'Tạo hóa đơn', link: '/orders/create-invoice' },
          { text: 'Tạo giao hàng', link: '/orders/create-shipment' },
          { text: 'Tạo hoàn tiền', link: '/orders/create-refunds' },
          { text: 'Giao dịch', link: '/orders/transactions' },
        ]
      },
      {
        text: 'Khách hàng',
        collapsed: false,
        items: [
          { text: 'Tạo khách hàng', link: '/customer/create-customer' },
          { text: 'Nhóm khách hàng', link: '/customer/customer-group' },
          { text: 'Giá theo nhóm khách hàng', link: '/customer/customer-group-price' },
          { text: 'Đánh giá của khách', link: '/customer/customer-review' },
        ]
      },

      {
        text: 'CMS',
        collapsed: false,
        items: [
          { text: 'Tạo CMS', link: '/cms/create-cms' },
        ]
      },

      {
        text: 'Tiếp thị',
        collapsed: false,
        items: [
          { text: 'Quy tắc giỏ hàng', link: '/marketing/cart-rules' },
          { text: 'Quy tắc danh mục', link: '/marketing/catalog-rules' },
          { text: 'Mẫu email', link: '/marketing/email-templates' },
          { text: 'Sự kiện', link: '/marketing/events' },
          { text: 'Chiến dịch', link: '/marketing/campaigns' },
          { text: 'Đăng ký bản tin', link: '/marketing/newsletter-subscription' },
          { text: 'Sơ đồ trang (Sitemap)', link: '/marketing/sitemaps' },
          { text: 'Viết lại URL', link: '/marketing/url-rewrite' },
          { text: 'Từ khóa tìm kiếm', link: '/marketing/search-terms' },
          { text: 'Từ đồng nghĩa tìm kiếm', link: '/marketing/search-synonyms' },
        ]
      },

      {
        text: 'Báo cáo',
        collapsed: false,
        items: [
          { text: 'Bán hàng', link: '/reporting/sales-report' },
          { text: 'Khách hàng', link: '/reporting/customers-report' },
          { text: 'Sản phẩm', link: '/reporting/product-report' },
        ]
      },

      {
        text: 'Cài đặt',
        collapsed: false,
        items: [
          { text: 'Ngôn ngữ & khu vực', link: '/settings/locales' },
          { text: 'Tiền tệ', link: '/settings/currencies' },
          { text: 'Tỷ giá', link: '/settings/exchange-rates' },
          { text: 'Nguồn tồn kho', link: '/settings/inventory-source' },
          { text: 'Kênh bán', link: '/settings/channels' },
          { text: 'Người dùng', link: '/settings/users' },
          { text: 'Vai trò', link: '/settings/roles' },
          { text: 'Giao diện', link: '/settings/themes' },
          { text: 'Thuế', link: '/settings/taxes' },
          { text: 'Chuyển dữ liệu', link: '/settings/data-transfer' },
        ]
      },

      {
        text: 'Cấu hình',
        collapsed: false,
        items: [
          { text: 'Địa chỉ', link: '/configure/address' },
          { text: 'Thuộc tính', link: '/configure/attribute' },
          { text: 'Đặt hàng trước', link: '/configure/back-orders' },
          { text: 'Google Captcha', link: '/configure/google-captcha' },
          { text: 'Captcha', link: '/configure/captcha' },
          { text: 'Trang giỏ hàng', link: '/configure/cart-view-page' },
          { text: 'Thanh toán', link: '/configure/checkout' },
          { text: 'Lựa chọn biến thể', link: '/configure/configurable-choices' },
          { text: 'Nội dung', link: '/configure/content' },
          { text: 'Cấu hình tỷ giá', link: '/configure/exchange-rates-configurations' },
          { text: 'Nội dung bản quyền', link: '/configure/coyright-content' },
          { text: 'Script tùy chỉnh', link: '/configure/custom-scripts' },
          { text: 'Thiết kế', link: '/configure/design' },
          { text: 'Cài đặt email', link: '/configure/email-settings' },
          { text: 'Frontend', link: '/configure/frontend' },
          { text: 'GDPR', link: '/configure/gdpr' },
          { text: 'Mua không cần đăng nhập', link: '/configure/guest-checkout' },
          { text: 'Kích thước hình ảnh', link: '/configure/image-size' },
          { text: 'Cài đặt hóa đơn', link: '/configure/invoice-settings' },
          { text: 'Magic AI', link: '/configure/magic-ai' },
          { text: 'Thông báo', link: '/configure/notifications' },
          { text: 'Cài đặt đơn hàng', link: '/configure/orders-settings' },
          { text: 'Phương thức thanh toán', link: '/configure/payment-methods' },
          { text: 'Giá', link: '/configure/pricing' },
          { text: 'Trang sản phẩm', link: '/configure/product-view-page' },
          { text: 'Đánh giá', link: '/configure/review' },
          { text: 'Rich Snippets', link: '/configure/rich-snippets' },
          { text: 'Cài đặt', link: '/configure/settings' },
          { text: 'Phương thức vận chuyển', link: '/configure/shipping-methods' },
          { text: 'Vận chuyển', link: '/configure/shipping' },
          { text: 'Chia sẻ mạng xã hội', link: '/configure/social-share' },
          { text: 'Thuế', link: '/configure/taxes' },
          { text: 'Đơn vị trọng lượng', link: '/configure/weight-unit' },
        ]
      },

      {
        text: 'Xác thực 2 lớp',
        link: '/authentication/2fa-authentication'
      },

      {
        text: 'Phương thức vận chuyển',
        link: '/shipping-method/shipping-methods'
      },

      {
        text: 'Phương thức thanh toán',
        link: '/payment-method/payment-methods'
      },

      {
        text: 'Chợ đa nhà bán (Multi Vendor Marketplace)',
        collapsed: false,
        items: [
          { text: 'Giới thiệu', link: '/multi-vendor-marketplace/introduction' },
          { text: 'Quản lý người bán', link: '/multi-vendor-marketplace/vendor-management' },
          { text: 'Quản lý đại lý', link: '/multi-vendor-marketplace/dealership-management' },
          { text: 'Quản lý đơn hàng', link: '/multi-vendor-marketplace/order-management' },
          { text: 'Quản lý hoa hồng', link: '/multi-vendor-marketplace/commission-management' },
          { text: 'Quản lý sản phẩm', link: '/multi-vendor-marketplace/product-management' },
          { text: 'Quản lý đánh giá', link: '/multi-vendor-marketplace/rating-management' },
          { text: 'Quản lý thanh toán', link: '/multi-vendor-marketplace/payment-management' },
          { text: 'RMA (ủy quyền trả hàng)', link: '/multi-vendor-marketplace/return-merchandise-authorization' },
          { text: 'Tải lên danh mục (hàng loạt)', link: '/multi-vendor-marketplace/seller-catalog-bulk-upload' },
          { text: 'Thuộc tính người bán', link: '/multi-vendor-marketplace/seller-attributes' },
          { text: 'Quản lý gói đăng ký người bán', link: '/multi-vendor-marketplace/seller-subscription-management' },
          { text: 'Quản lý chi trả hàng loạt', link: '/multi-vendor-marketplace/mass-payout-management' },
          { text: 'Giao tiếp', link: '/multi-vendor-marketplace/communications' },
        ]
      },

      {
        text: 'Chợ B2B',
        collapsed: false,
        items: [
          { text: 'Giới thiệu', link: '/b2b-marketplace/introduction' },
          { text: 'Yêu cầu báo giá', link: '/b2b-marketplace/request-for-quotes' },
          { text: 'Liên lạc người mua - người bán', link: '/b2b-marketplace/buyer-seller-communication' },
          { text: 'Microsite nhà cung cấp', link: '/b2b-marketplace/supplier-microsite' },
          { text: 'Lead mua hàng', link: '/b2b-marketplace/buying-leads' },
          { text: 'Quản lý đánh giá', link: '/b2b-marketplace/b2b-marketplace-review' },
        ]
      },

      {
        text: 'Thương mại điện tử đa tenant',
        collapsed: false,
        items: [
          { text: 'Giới thiệu', link: '/multi-tenant-ecommerce/introduction' },
          { text: 'Quản lý Super Admin', link: '/multi-tenant-ecommerce/super-admin-management' },
          { text: 'Quản lý tenant', link: '/multi-tenant-ecommerce/tenant-management' },
          { text: 'Ánh xạ CNAME', link: '/multi-tenant-ecommerce/cname-mapping' },
        ]
      },

      {
        text: 'Nền tảng thương mại điện tử B2B',
        collapsed: false,
        items: [
          { text: 'Giới thiệu', link: '/b2b-ecommerce-platform/introduction' },
          { text: 'Đăng ký công ty', link: '/b2b-ecommerce-platform/company-registration' },
          { text: 'Phân quyền theo vai trò', link: '/b2b-ecommerce-platform/role-based-permissions' },
          { text: 'Đơn mua hàng', link: '/b2b-ecommerce-platform/purchase-orders' },
          { text: 'Danh sách yêu cầu mua', link: '/b2b-ecommerce-platform/requisition-lists' },
          { text: 'Đặt hàng nhanh', link: '/b2b-ecommerce-platform/quick-order' },
          { text: 'Yêu cầu báo giá', link: '/b2b-ecommerce-platform/request-for-quote' },
          { text: 'Xử lý báo giá', link: '/b2b-ecommerce-platform/quotation-handling' },
        ]
      },

      {
        text: 'Ứng dụng di động native',
        link: '/open-source-mobile-app/open-source-mobile-app'
      },

      ],
      '/en/': sidebarEn,
    },

    outlineTitle: 'Trong trang này',

    docFooter: {
      prev: 'Trang trước',
      next: 'Trang sau'
    },

    darkModeSwitchLabel: 'Giao diện',
    lightModeSwitchTitle: 'Chuyển sang giao diện sáng',
    darkModeSwitchTitle: 'Chuyển sang giao diện tối',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Lên đầu trang',
    skipToContentLabel: 'Bỏ qua để đến nội dung',

    outline: {
      level: 'deep'
    },
    
    footer: {
      message: 'Phát hành theo <a href="https://opensource.org/licenses/mit" target="_blank" class="mit-license">giấy phép MIT</a>.',
      copyright: `Copyright © ${new Date().getFullYear()} Webkul`
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bagisto/bagisto' }
    ],

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: 'Tìm kiếm',
            buttonAriaLabel: 'Tìm kiếm'
          },
          modal: {
            displayDetails: 'Hiển thị chi tiết',
            resetButtonTitle: 'Xóa',
            backButtonTitle: 'Quay lại',
            noResultsText: 'Không tìm thấy kết quả',
            footer: {
              selectText: 'Chọn',
              selectKeyAriaLabel: 'phím Enter',
              navigateText: 'Di chuyển',
              navigateUpKeyAriaLabel: 'phím mũi tên lên',
              navigateDownKeyAriaLabel: 'phím mũi tên xuống',
              closeText: 'Đóng',
              closeKeyAriaLabel: 'phím Escape'
            }
          }
        }
      }
    }
  },

  buildEnd(siteConfig) {
    const outDir = siteConfig.outDir

    Object.entries(redirects).forEach(([from, to]) => {
      if (from.includes('*')) {
        console.warn(`⚠️ Skipping wildcard redirect: ${from} -> ${to}`)
        return
      }

      let filePath

      if (from.endsWith('.html')) {
        filePath = path.join(outDir, from)
      } else {
        filePath = path.join(outDir, from, 'index.html')
      }

      fs.mkdirSync(path.dirname(filePath), { recursive: true })
      fs.writeFileSync(filePath, makeRedirectHtml(to), 'utf-8')
      console.log(`✅ Redirect created: ${from} -> ${to}`)
    })
  }
})
