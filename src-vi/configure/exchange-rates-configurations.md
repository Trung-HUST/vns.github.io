Cấu hình tỷ giá hối đoái # 

Tỷ giá hối đoái VNS cho phép bạn tự động làm mới tỷ giá hối đoái bằng cách sử dụng các dịch vụ API bên ngoài.

Trong bảng quản trị, bạn có thể nhanh chóng nhập thông tin xác thực API, chọn nhà cung cấp dịch vụ yêu thích và sắp xếp lịch cập nhật tự động.

Điều này đảm bảo tỷ giá tiền tệ của cửa hàng của bạn là chính xác mà không cần phải thực hiện thủ công.

Để thiết lập tỷ giá hối đoái, hãy điều hướng đến: Cấu hình > Chung > Tỷ giá hối đoái, như minh họa trong hình bên dưới.

  <ImagePopup src="/images/configure/exchange_rates_configurations.png" alt="Address" />

Cấu hình tỷ giá hối đoái ### 

Dưới đây là các bước chi tiết của cấu hình tỷ giá hối đoái.

**1) Cài đặt chung**

Ở phần này bạn có thể chọn dịch vụ tỷ giá mặc định mà VNS sẽ sử dụng.

Bạn có thể chọn giữa API tỷ giá hối đoái và API Fixer, dựa trên những gì bạn thích và những gì bạn cần.

**2) API sửa lỗi**

Tại đây, bạn phải nhập khóa API bạn nhận được từ fixer.io.

Fixer cung cấp cho bạn cả thông tin về tỷ giá hối đoái theo thời gian thực và trong quá khứ. Nó cũng có gói miễn phí, nhưng bạn chỉ có thể thực hiện một số lượng yêu cầu API hạn chế.

**3) API tỷ giá hối đoái**

Trong phần này, bạn cần nhập khóa API của mình từ Exchangerate-api.com. Dịch vụ này cung cấp tỷ giá hối đoái theo thời gian thực cho hơn 160 loại tiền tệ.

Gói miễn phí cho phép bạn thực hiện tối đa 1.500 yêu cầu mỗi tháng, điều này phù hợp với hầu hết các cửa hàng vừa và nhỏ.

**4) Nhập theo lịch trình**

Bạn có thể bật cập nhật theo lịch để tự động làm mới tỷ giá hối đoái vào những thời điểm đã đặt.

Sau khi bật tính năng này, bạn có thể chọn tần suất cập nhật - hàng ngày, hàng tuần (thứ Hai hàng tuần) hoặc hàng tháng (vào ngày đầu tiên của tháng).

Bạn có thể dễ dàng thêm phần này từ cài đặt như hiển thị bên dưới.

<ImagePopup src="/images/configure/schedule.png" alt="Address" />

Bạn phải đặt thời gian bắt đầu bằng cách sử dụng **định dạng 24 giờ**, như sau: 03:00.

Để đảm bảo rằng các bản cập nhật theo lịch trình hoạt động chính xác, bạn cần chạy trình lập lịch tác vụ Laravel.

Bạn có thể khởi động nó bằng cách sử dụng lệnh này: 

**lịch làm việc của nghệ nhân php: công việc**

<ImagePopup src="/images/configure/terminial_cron.png" alt="Address" />

### Sao lưu biến môi trường

Nếu bạn quên đặt khóa API vào bảng quản trị, VNS sẽ tự động lấy khóa API từ tệp .env của bạn.

Đối với API Fixer, bạn có thể sử dụng **FIXER_API_KEY**.

Đối với API tỷ giá hối đoái, bạn có thể sử dụng **EXCHANGE_RATES_API_KEY**.

**Cấu hình .env mẫu:**

FIXER_API_KEY=your_fixer_api_key_đây

EXCHANGE_RATES_API_KEY=your_exchange_rates_api_key_đây

### Cập nhật thủ công

Bên cạnh việc cập nhật tự động, bạn cũng có thể thay đổi tỷ giá hối đoái bằng tay.

Để thực hiện việc này, hãy đi tới bảng quản trị, sau đó nhấp vào **Cài đặt > Tỷ giá hối đoái** và nhấn nút **Cập nhật tỷ giá**.

Ngoài ra, bạn có thể sử dụng lệnh trong CLI: **php Artisan Exchange-rate:update**

API tỷ giá trao đổi ###  (exchangerate-api.com):

- Endpoint Ví dụ: **v6.exchangerate-api.com/v6/{API_KEY}/latest/{BASE}**

- FTìm nạp tất cả tỷ giá tiền tệ trong một lệnh gọi API

- Cấp miễn phí: 1.500 yêu cầu/tháng

- Đăng ký: [https://www.exchangerate-api.com](https://www.exchangerate-api.com)

### Dịch vụ hỗ trợ

API tỷ giá hối đoái VNS (exchangerate-api.com)

Công cụ này nhận được tất cả tỷ giá hối đoái chỉ bằng một lệnh gọi API. Bạn có thể thực hiện 1.500 yêu cầu miễn phí mỗi tháng.

API ### Fixer (fixer.io)

- Điểm cuối: http://data.fixer.io/api/{date}

- Tìm nạp tỷ giá trên mỗi cặp tiền tệ

- Cấp miễn phí: 100 yêu cầu/tháng

- Đăng ký: [https://fixer.io](https://fixer.io)