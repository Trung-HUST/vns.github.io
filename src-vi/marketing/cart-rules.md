# Quy tắc giỏ hàng

Bản chất của con người là luôn bị thu hút bởi các ưu đãi, giảm giá và khuyến mãi khi mua sắm. Quy tắc giỏ hàng được áp dụng cho sản phẩm trong giỏ hàng. Ở đây chúng ta sẽ tìm hiểu cách tạo quy tắc giỏ hàng trong VNS.

Bằng cách sử dụng tính năng này, bạn có thể áp dụng một hoặc nhiều mức giảm giá cho cùng một sản phẩm. Hãy làm theo các bước bên dưới để tạo **quy tắc giỏ hàng trong VNS**.

### Bước 1: Thêm quy tắc giỏ hàng mới

1. Trong Bảng quản trị, đi tới **Tiếp thị >> Khuyến mãi >> Quy tắc giỏ hàng**.  
   Nhấp vào **Tạo quy tắc giỏ hàng** như trong hình bên dưới.

<ImagePopup src="/images/marketing/createCartrule.png" alt="Create Cart Rule" />

### Thông tin quy tắc

1. **Tên:** Nhập tên của quy tắc giỏ hàng mới (chỉ để tham khảo nội bộ).

2. **Mô tả:** Nhập mô tả quy tắc (chỉ để tham khảo nội bộ). 

3. **Trạng thái:** Bật quy tắc giỏ hàng.  

4. **Kênh:** Chọn kênh sẽ áp dụng quy tắc giỏ hàng này. 

5. **Nhóm khách hàng:** Chọn nhóm khách hàng sẽ áp dụng quy tắc giỏ hàng này.  

6. **Loại phiếu giảm giá:** Chọn loại phiếu giảm giá có hoặc không có phiếu giảm giá. Nếu bạn muốn quy tắc giỏ hàng áp dụng cho tất cả các giỏ hàng, hãy đặt quy tắc này thành **Không có phiếu giảm giá**.

**Nếu bạn muốn sử dụng phiếu giảm giá, hãy chọn Phiếu giảm giá cụ thể và điền vào các trường sau:**

1. **Tự động tạo phiếu giảm giá:** Chọn Bật/Tắt. Nếu bật, hệ thống sẽ tự động tạo phiếu giảm giá. Nếu tắt, hãy nhập phiếu giảm giá theo cách thủ công.  

2. **Mã giảm giá:** Nhập mã giảm giá mà khách hàng sẽ sử dụng khi thanh toán.  

3. **Số lần sử dụng trên mỗi phiếu giảm giá:** Xác định số lần phiếu giảm giá có thể được sử dụng. Để trống không giới hạn.  

4. **Số lần sử dụng cho mỗi khách hàng:** Xác định số lần một khách hàng có thể sử dụng quy tắc giỏ hàng. Để trống không giới hạn.  

5. **Ngày từ và đến:** Đặt phạm vi ngày mà quy tắc giỏ hàng sẽ hoạt động. Nếu để trống, quy tắc sẽ được áp dụng ngay khi được lưu.  

6. **Ưu tiên:** Nhập mức độ ưu tiên của quy tắc này.  

**Lưu ý:** Mức độ ưu tiên rất quan trọng khi sản phẩm thỏa điều kiện của nhiều quy tắc giỏ hàng. Mức ưu tiên cao nhất là 0. Vì vậy, khi có nhiều quy tắc phù hợp, quy tắc có mức ưu tiên cao nhất sẽ được áp dụng trước.

<ImagePopup src="/images/marketing/configurations.png" alt="Cart Rule Configurations" />

### Bước 2: Đặt điều kiện

Các điều kiện trong quy tắc giỏ hàng dựa trên thuộc tính giỏ hàng, thuộc tính sản phẩm trong giỏ hàng và thuộc tính sản phẩm.  

Nếu bạn muốn áp dụng quy tắc cho tất cả các sản phẩm, đừng đặt bất kỳ điều kiện nào.  

Bạn có thể đặt kiểu điều kiện là **tất cả điều kiện đều đúng** hoặc **bất kỳ điều kiện nào đều đúng**.

<ImagePopup src="/images/marketing/condition.png" alt="Set Cart Rule Conditions" />

Nhấp vào **Thêm điều kiện** để đặt điều kiện. Trong danh sách thuộc tính sản phẩm, chọn thuộc tính bạn muốn sử dụng cho điều kiện.

<ImagePopup src="/images/marketing/attributeCondition.png" alt="Attribute Condition" />

Ví dụ: nếu bạn chọn **Danh mục**, bạn phải chọn giữa *chứa/không chứa* rồi chọn danh mục.  

Để xóa bất kỳ điều kiện nào, hãy nhấp vào **biểu tượng Xóa**.

### Bước 3: Thiết lập hành động

Trong phần Hành động, hãy xác định cách áp dụng quy tắc cho sản phẩm.

1. **Loại hành động:** Áp dụng chiết khấu theo tỷ lệ phần trăm hoặc số tiền cố định. 

2. **Số tiền chiết khấu:** Nhập số tiền chiết khấu.  

3. **Dừng các quy tắc khác:** Đặt Bật để ngừng áp dụng các quy tắc khác sau khi quy tắc này được áp dụng. Hữu ích khi có nhiều chương trình giảm giá.  

4. **Áp dụng cho phí vận chuyển:** Chọn Bật/Tắt tùy theo việc bạn có muốn áp dụng giảm giá cho phí vận chuyển hay không.  

5. **Mua X số lượng:** Nhập số lượng yêu cầu.  

6. **Giao hàng miễn phí:** Chọn Bật/Tắt tùy theo việc bạn có muốn cho phép giao hàng miễn phí hay không.  

7. **Số lượng tối đa được phép giảm giá:** Nhập số lượng tối đa được phép giảm giá.  

Sau khi cấu hình, nhấp vào nút **Lưu quy tắc giỏ hàng**.  

Bây giờ hãy sao chép **Mã phiếu giảm giá** như hiển thị bên dưới.

<ImagePopup src="/images/marketing/couponCode.png" alt="Coupon Code Example" />

### Giao diện

Trên **Trang thanh toán**, trong khi đặt hàng, hãy nhấp vào **Áp dụng phiếu giảm giá** như hiển thị bên dưới.

<ImagePopup src="/images/marketing/checkoutPage.png" alt="Checkout Page Coupon" />

Sau khi nhập mã giảm giá, hãy nhấp vào nút **Áp dụng**.

<ImagePopup src="/images/marketing/applyCoupon.png" alt="Apply Coupon" />

Bây giờ **phiếu giảm giá** đã được áp dụng thành công.

<ImagePopup src="/images/marketing/couponApplied.png" alt="Coupon Applied Successfully" />

Bằng cách làm theo các bước trên, bạn có thể dễ dàng tạo **Quy tắc giỏ hàng** trong VNS.
