# Google Captcha

Google reCAPTCHA là một tính năng bảo mật do Google cung cấp nhằm giúp bảo vệ các trang web khỏi spam, bot và hành vi lạm dụng tự động. 

Nó hoạt động bằng cách xác minh xem tương tác được thực hiện bởi người dùng thực hay tập lệnh tự động. Bằng cách thêm reCAPTCHA vào các biểu mẫu như đăng nhập, đăng ký, liên hệ và thanh toán, chủ cửa hàng có thể ngăn chặn việc gửi giả mạo, các cuộc tấn công bạo lực và các hoạt động độc hại.

Để thêm, hãy truy cập bảng quản trị và nhấp vào **Cấu hình >> Google Captcha** như hiển thị bên dưới.

 <ImagePopup src="/images/configure/configure-captcha.png" alt="Account Login" />

Ngay khi bạn nhấp vào nó, nút chuyển đổi Trạng thái sẽ xuất hiện. Sau khi bật tính năng này, bạn sẽ thấy các tùy chọn để thêm **ID dự án, Khóa API, Khóa trang web** và **Ngưỡng điểm**.

### Để lấy ID dự án Google Cloud:

- Truy cập [Google Cloud Console](https://) 
- Tạo một dự án mới hoặc chọn một dự án hiện có từ danh sách dự án thả xuống.
- Lưu ý ID dự án của bạn từ bảng điều khiển dự án (không phải tên dự án).

 <ImagePopup src="/images/configure/project-id.png" alt="Account Login" />

### Tạo khóa API:

- Trong Google Cloud Console, điều hướng đến API & Dịch vụ → Thông tin xác thực.

- Nhấp vào Tạo thông tin xác thực → Khóa API.

- Bây giờ hãy sao chép khóa API đã tạo.

<ImagePopup src="/images/configure/api-1.png" alt="Account Login" />

### Tạo khóa trang web reCAPTCHA:

- Điều hướng đến Bảo mật → reCAPTCHA trong Google Cloud Console.
- Click Tạo Key.
- Nhập tên hiển thị cho khóa của bạn.
- Chọn Website làm loại nền tảng.
- Chọn loại reCAPTCHA dựa trên điểm số (reCAPTCHA v3).
- Thêm (các) tên miền của bạn vào phần Tên miền (ví dụ: example.com).
- Click Create và sao chép site key đã tạo.

Bây giờ bạn cần thêm tất cả ID trong cấu hình, đặt **Ngưỡng dự trữ** thành 0,5 và cuối cùng nhấp vào nút **Lưu cấu hình**.

 <ImagePopup src="/images/configure/site-key.png" alt="Account Login" />

Ngay sau khi lưu cấu hình, Google reCAPTCHA sẽ được hiển thị ở 5 vị trí trên trang web:

- Khách hàng đăng nhập
- Khách hàng đăng ký
- Trang liên hệ với chúng tôi
- Quên mật khẩu
- Thanh toán Đăng nhập

### Khách hàng đăng nhập

  <ImagePopup src="/images/configure/customer-signin.png" alt="Account Login" />

### Khách hàng đăng ký

 <ImagePopup src="/images/configure/customer-signup.png" alt="Account Login" />

### Trang liên hệ với chúng tôi

 <ImagePopup src="/images/configure/contact-us.png" alt="Account Login" />

### Khôi phục mật khẩu 

 <ImagePopup src="/images/configure/forget-password.png" alt="Account Login" />

### Thanh toán Đăng nhập 

 <ImagePopup src="/images/configure/checkout-signin.png" alt="Account Login" />