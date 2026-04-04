Cấu hình nội dung # 

Phần **Nội dung** cho phép bạn tùy chỉnh hành vi giao diện người dùng, biểu ngữ quảng cáo và kiểm soát các tính năng nâng cao như quy tắc suy đoán và tập lệnh tùy chỉnh. Các cài đặt này giúp tối ưu hóa trải nghiệm người dùng và điều chỉnh mặt tiền cửa hàng theo nhu cầu kinh doanh cụ thể.

**Các bước để định cấu hình cài đặt nội dung**

Để cập nhật cấu hình **Nội dung** trong VNS:

1. Đăng nhập vào **Bảng quản trị**.
2. Điều hướng đến **Cấu hình → Nội dung**.
3. Bạn sẽ tìm thấy các tùy chọn sau để định cấu hình:

### Tiêu đề ưu đãi tiêu đề

Hiển thị biểu ngữ quảng cáo trên tiêu đề mặt tiền cửa hàng.

- **Tiêu đề ưu đãi**  
  Ví dụ: `Get UPTO 40% OFF on your 1st order`

- **Tiêu đề chuyển hướng**  
  Ví dụ: `SHOP NOW`

- **Liên kết chuyển hướng**  
  Nhập URL hợp lệ (ví dụ: `/products/sale`)

<ImagePopup src="/images/configure/header.png" alt="Header Offer Title" />

### Quy tắc đầu cơ

Các quy tắc này cải thiện hiệu suất được cảm nhận bằng cách tìm nạp trước hoặc hiển thị trước các trang một cách thông minh.

- **Kích hoạt quy tắc đầu cơ**  
  Chuyển đổi để kích hoạt logic suy đoán tổng thể.

- **Kích hoạt quy tắc suy đoán kết xuất trước**  
  Cho phép hiển thị trước dựa trên dự đoán hành vi của người dùng.

- **Bỏ qua URL kết xuất trước**  
  Loại trừ các tuyến đường cụ thể khỏi kết xuất trước bằng cách sử dụng ống `|` làm dấu phân cách.  
  Ví dụ: `account|checkout|onepage|cart`

- **Bỏ qua các tham số URL kết xuất trước**  
  Loại trừ các tham số URL nhất định khỏi logic kết xuất trước.  
  Ví dụ: `ref|token`

- **Mức độ háo hức khi kết xuất trước**  
  Chọn cường độ hiển thị trước:
  - `eager`: Hiển thị trước tối đa (thêm tài nguyên)
  - `moderate`: Số dư mặc định
  - `conservative`: Hiển thị trước tối thiểu

- **Kích hoạt quy tắc suy đoán tìm nạp trước**  
  Cho phép tìm nạp trước liên kết để tăng tốc điều hướng.

<ImagePopup src="/images/configure/contentspec.png" alt="Speculation Rules" />

### C Nội dung bản quyền

Thiết lập thông tin bản quyền ở chân trang trang web của bạn là một bước quan trọng trong việc bảo vệ tài sản trí tuệ của bạn và thể hiện quyền sở hữu rõ ràng đối với nội dung trực tuyến của bạn. 

Bằng cách có thông báo bản quyền được định dạng phù hợp, bạn cho khách truy cập biết rằng nội dung, thiết kế, hình ảnh và các tài liệu khác trên trang web của bạn được bảo vệ hợp pháp. 

Điều này không chỉ giúp ngăn chặn việc sử dụng hoặc sao chép trái phép mà còn thể hiện sự chuyên nghiệp và tạo dựng niềm tin với khán giả của bạn.

Bằng cách bao gồm tên thương hiệu của bạn, năm hiện tại và tuyên bố quyền ngắn gọn ở chân trang, bạn đảm bảo rằng thương hiệu của bạn hiển thị trên mọi trang trên trang web của bạn. 

### Các bước thêm nội dung Coyright

Để thêm **Nội dung Coyright**, hãy đi tới Bảng điều khiển quản trị: **Định cấu hình >> Nội dung**. 

Bạn sẽ thấy hộp văn bản để thêm Nội dung bản quyền như trong hình bên dưới.

<ImagePopup src="/images/configure/copyright-content.png" alt="Coyright Content" />

Cuối cùng nhấp chuột vào nút **Save Configuration**.

Sau đó, bạn có thể đi tới chân trang cửa hàng của trang web VNS và kiểm tra xem nội dung bản quyền của bạn đã được thêm thành công hay chưa.

 <ImagePopup src="/images/configure/copyright-footer.png" alt="Coyright Content" />

### Kịch bản tùy chỉnh

Thêm tập lệnh của riêng bạn để nâng cao hoặc tích hợp các tính năng tùy chỉnh.

- **CSS tùy chỉnh**  
  Thêm CSS toàn cầu để tạo kiểu cho mặt tiền cửa hàng của bạn.

- **JavaScript tùy chỉnh**  
  Chèn tập lệnh cho tiện ích trò chuyện, phân tích hoặc bất kỳ tương tác tùy chỉnh nào.

<ImagePopup src="/images/configure/custom.png" alt="Custom Scripts" />
