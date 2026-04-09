# Ứng dụng di động bản địa

[VNS Mobile App](https://github.com/VNS/opensource-ecommerce-mobile-app) đang thay đổi cuộc chơi trong lĩnh vực mua sắm với giải pháp ứng dụng di động Thương mại điện tử nguồn mở. 

Ứng dụng này dễ dàng biến cửa hàng VNS của bạn thành một nền tảng di động mạnh mẽ, cho phép cập nhật các sản phẩm, danh mục, v.v. theo thời gian thực.

Với giao diện đơn giản, việc xử lý đơn hàng cực kỳ dễ dàng, khiến nó trở thành một ứng dụng bắt buộc phải có đối với cả những người am hiểu công nghệ và những người mới bắt đầu với Thương mại điện tử.

Ứng dụng di động Laravel này được xây dựng trên khung Thương mại điện tử VNS và sử dụng ngăn xếp Laravel mạnh mẽ, cung cấp nhiều tính năng để mang lại trải nghiệm mua sắm di động mượt mà và hiệu quả. 

Ứng dụng này giúp bạn dễ dàng quản lý thông tin sản phẩm và tăng tốc độ bán sản phẩm của mình nhanh chóng, đồng thời cung cấp cho bạn toàn quyền kiểm soát cửa hàng của mình.

### Bản demo trực tiếp

**Android:** Tải ứng dụng từ Cửa hàng Google Play:

https://play.google.com/store/apps/details?id=com.webkul.VNS.mobikul

**iOS:** Tải ứng dụng từ Apple App Store:

https://apps.apple.com/us/app/mobikul-VNS-laravel-app/id6447519140

### Yêu cầu

**Lưu ý –** Để thiết lập và chạy Ứng dụng di động gốc VNS Laravel, hãy đảm bảo bạn có những thứ sau.

- VNS Phiên bản - v2.3.6
- Android Studio Meerkat | 2024.3.2
Phiên bản - flutter - 3.38.9
- Dart - 3.10.8
- Xcode - 26.3
- Swift - 6.1

### Cấu hình quản trị ứng dụng di động VNS

Quản trị viên có thể dễ dàng điều khiển ứng dụng di động VNS Laravel từ phần phụ trợ bằng cách làm theo một số bước đơn giản. 

Mỗi bước cấu hình được hiển thị lần lượt trong các tab bên dưới.

Để thiết lập ứng dụng di động Laravel, quản trị viên nên truy cập **Cấu hình -> API GraphQL**.

<ImagePopup src="/images/native-mobile-app/1.png" alt="configuration" />

**1) Nội dung tệp JSON có khóa riêng tư:** Để truy cập khóa máy chủ, chỉ cần nhấp vào liên kết nằm bên dưới hộp nhập liệu và thiết lập dự án trên Firebase.

**2) Chủ đề thông báo:** Quản trị viên có quyền chọn tên cho ứng dụng di động VNS Laravel.

### Thông báo đẩy

Thông báo đẩy của ứng dụng di động Mobikul có thể được kiểm soát dễ dàng từ phần phụ trợ.

Để thực hiện việc này, quản trị viên phải đi tới **Cài đặt -> Thông báo đẩy**.

<ImagePopup src="/images/native-mobile-app/2.png" alt="configuration" />

Ngoài ra, để thêm thông báo mới, quản trị viên có thể nhấp vào nút Thêm thông báo.

<ImagePopup src="/images/native-mobile-app/3.png" alt="configuration" />

Sau đó thêm các chi tiết dưới đây. 

**1) Tiêu đề thông báo –** Quản trị viên có thể đặt tiêu đề cho thông báo.

**2) Nội dung thông báo –** Quản trị viên có thể giải thích thông báo trong phần nội dung.

**3) Hình ảnh –** Bao gồm hình ảnh cho thông báo.

**4) Loại thông báo –** Quản trị viên có thể chọn loại thông báo từ menu thả xuống, bao gồm Loại đơn giản, Dựa trên danh mục hoặc Dựa trên sản phẩm.

**5) Kênh -** Quản trị viên có thể chọn các kênh có sẵn hoặc đã được họ thêm vào.

**6) Trạng thái thông báo –** Tại đây, quản trị viên có thể bật hoặc tắt thông báo.

Ngoài ra, quản trị viên có tùy chọn chỉnh sửa hoặc xóa thông báo hiện tại dựa trên nhu cầu của doanh nghiệp.

### Chế độ xem của khách hàng: Màn hình giật gân

Đây là màn hình đầu tiên khách hàng nhìn thấy khi mở ứng dụng. Ngoài ra, màn hình này được bao gồm trong ứng dụng từ phía mã hóa.

Chủ doanh nghiệp sẽ cung cấp cho chúng tôi hình ảnh này dựa trên những gì cần thiết thông qua bản PDF mà chúng tôi nhận được trước.

<ImagePopup src="/images/native-mobile-app/4.png" alt="configuration" />

### Trang chủ

Trang chủ của ứng dụng được tổ chức thành nhiều phần để dễ sử dụng hơn.

#### Phần băng chuyền

Trang chủ của trình tạo ứng dụng di động Laravel cho phép bạn thêm nhiều loại băng chuyền khác nhau vào thanh trượt.

**1) Loại hình ảnh:** Bạn có thể chọn băng chuyền Loại hình ảnh, cho phép bạn tạo các loại hình ảnh khác nhau và liên kết sản phẩm với chúng.

**2) Phần Banner:** Trong phần này, người dùng ứng dụng sẽ xem banner mà admin đã thiết lập. Các biểu ngữ sẽ lần lượt xoay vòng.

<ImagePopup src="/images/native-mobile-app/5.png" alt="configuration" />

#### Sản phẩm nổi bật

Trong phần này, người dùng ứng dụng Laravel Mobile sẽ tìm thấy các mục được đánh dấu do chủ sở hữu ứng dụng chọn.

<ImagePopup src="/images/native-mobile-app/6.png" alt="configuration" />

#### Sản phẩm mới

Trong khu vực bổ sung mới nhất, người dùng có thể xem các sản phẩm vừa được chủ sở hữu ứng dụng thêm vào.

### Ngăn kéo bên

Ngoài ra, ứng dụng còn thúc đẩy người dùng đăng ký thông qua ứng dụng. Nó cung cấp một biểu mẫu đơn giản để họ nhập thông tin của mình.

Điều này giúp họ dễ dàng đăng nhập bất cứ khi nào họ muốn sử dụng.

**Đăng ký -> Tạo tài khoản**

Người dùng trình tạo ứng dụng di động gốc Laravel có thể dễ dàng đăng ký ứng dụng bằng cách hoàn thành biểu mẫu đăng ký. 

Bằng cách này, người dùng ứng dụng có thể nhập thông tin cơ bản của họ để trở thành khách hàng.

<ImagePopup src="/images/native-mobile-app/7.png" alt="configuration" />

#### Đăng nhập bằng email của bạn

Sau khi khách hàng đăng ký xong, họ có thể đăng nhập bằng ID email và mật khẩu mà họ đã cung cấp trong quá trình đăng ký.

#### Quên mật khẩu?

Người dùng có thể thay đổi mật khẩu bằng cách nhấp vào liên kết Quên mật khẩu.

<ImagePopup src="/images/native-mobile-app/8.png" alt="configuration" />

### Danh mục

Có hai loại danh mục trong ứng dụng di động Laravel.

<ImagePopup src="/images/native-mobile-app/9.png" alt="configuration" />

**1) Danh mục chính:** Người dùng có thể nhấp vào tên danh mục chính để xem.

**2) Danh mục con:** Người dùng có thể nhấp vào danh mục phụ trong danh mục chính để xem danh mục phụ.

<ImagePopup src="/images/native-mobile-app/10.png" alt="configuration" />

Bây giờ sau khi nhấp vào danh mục con, tất cả các sản phẩm sẽ hiển thị do quản trị viên thêm vào. Danh mục con sẽ được liệt kê hiển thị trong chế độ xem **Lưới** và **Danh sách**.

**1) Chế độ xem danh sách:** Trong Chế độ xem danh sách, các sản phẩm sẽ được thêm vào danh sách.

**2) Chế độ xem lưới:** Người dùng cũng có thể chọn lưới nút để xem sản phẩm.

<ImagePopup src="/images/native-mobile-app/11.png" alt="configuration" />

### Thông tin tài khoản

Sau khi đăng nhập vào ứng dụng dành cho thiết bị di động, bạn có thể kiểm tra thông tin tài khoản của mình bằng cách đi tới menu bên cạnh và nhấp vào Trang tổng quan. 

Trong phần này, bạn có thể nhanh chóng xem và xem chi tiết tài khoản của mình.

<ImagePopup src="/images/native-mobile-app/12.png" alt="configuration" />

Phần tài khoản sẽ lưu trữ dữ liệu của khách hàng, thành nhiều phần phụ.

#### Hồ sơ
Phần này dành cho người dùng ứng dụng để lưu giữ thông tin cá nhân về tài khoản của họ. Trong phần này, người dùng ứng dụng có thể cập nhật –

1) Họ, tên, giới tính, ngày sinh và số điện thoại của họ.

2) Người dùng có thể thay đổi địa chỉ email mà họ đã đăng ký.

3) Họ cũng có thể thay đổi mật khẩu được kết nối với tài khoản của mình.

4) Khách hàng có quyền lựa chọn xóa tài khoản đã đăng ký.

5) Người dùng cũng có thể thay đổi Email và Mật khẩu cho ứng dụng. Họ cũng có thể xóa tài khoản của họ.

<ImagePopup src="/images/native-mobile-app/13.png" alt="configuration" />

#### Địa chỉ

Phần này chứa thông tin về Địa chỉ thanh toán mặc định, Địa chỉ giao hàng mặc định và Quản lý các địa chỉ khác.

Người dùng ứng dụng có thể nhấp vào bất kỳ địa chỉ nào để chỉnh sửa chi tiết về địa chỉ từ nút chỉnh sửa hoặc người khác có thể thêm địa chỉ mới.

<ImagePopup src="/images/native-mobile-app/14.png" alt="configuration" />

**Sản phẩm gần đây:** Khách hàng có thể xem các mặt hàng họ đã thấy gần đây trong khu vực sản phẩm gần đây, như minh họa trong hình bên dưới:

**Bài đánh giá:** Người dùng ứng dụng có thể xem tất cả các bài đánh giá mà họ đưa ra cho sản phẩm.

**Danh sách yêu thích:** Người dùng ứng dụng có thể xem tất cả các sản phẩm trong danh sách yêu thích từ tùy chọn Danh sách yêu thích.

<ImagePopup src="/images/native-mobile-app/15.png" alt="configuration" />

#### So sánh sản phẩm

Người dùng có thể so sánh các sản phẩm cạnh nhau trong ứng dụng, cho phép họ dễ dàng xem và đánh giá sự khác biệt về tính năng.

<ImagePopup src="/images/native-mobile-app/16.png" alt="configuration" />

#### Xem sản phẩm

Trang hiển thị thông tin về các sản phẩm mà người dùng ứng dụng có thể xem. Vì vậy, trang này bao gồm các chi tiết sau-

**Thêm vào giỏ hàng –** Người dùng có thể nhấp vào nút Thêm vào giỏ hàng để đưa sản phẩm vào giỏ hàng để thanh toán sau.

<ImagePopup src="/images/native-mobile-app/17.png" alt="configuration" />

Giờ đây, những người sử dụng ứng dụng có thể tiếp tục với sản phẩm họ đã thêm vào giỏ hàng.

Tại đây, người dùng ứng dụng có thể sử dụng mã để mua hàng. Họ cũng có quyền lựa chọn tiếp tục mua sắm, cập nhật giỏ hàng hoặc làm trống giỏ hàng trước khi nhấp để tiếp tục.

<ImagePopup src="/images/native-mobile-app/18.png" alt="configuration" />

Trong bước tiếp theo, người dùng phải chọn cách họ muốn thanh toán cho đơn hàng của mình, có thể là Trả tiền mặt khi giao hàng hoặc Chuyển tiền.

Tại đây người dùng có thể kiểm tra chi tiết giá của đơn hàng và có thể đặt hàng. Sau đó, đơn hàng đã được đặt và sẽ nhận được xác nhận bằng ID đơn hàng và email.

<ImagePopup src="/images/native-mobile-app/19.png" alt="configuration" />

### Chủ đề tối

Ứng dụng có chủ đề tối mà người dùng có thể chọn. Nếu bạn nhấn vào nút Thay đổi chủ đề, ứng dụng sẽ chuyển sang chủ đề màu tối, như bạn có thể thấy trong hình bên dưới.

<ImagePopup src="/images/native-mobile-app/20.png" alt="configuration" />


