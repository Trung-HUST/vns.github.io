# Quản lý đơn hàng
Quản lý đơn hàng trong Laravel Multi Vendor Marketplace giúp người bán và quản trị viên theo dõi, quản lý và thực hiện đơn đặt hàng của khách hàng một cách dễ dàng.

Từ thời điểm người mua đặt hàng đến vận chuyển và giao hàng, mọi thứ đều được xử lý ở một nơi.

Nó đảm bảo xử lý trơn tru, cập nhật kịp thời và phối hợp tốt hơn giữa nhà cung cấp và người mua để có trải nghiệm mua sắm không rắc rối.

<ImagePopup src="/images/multi-vendor-marketplace/1homepage.png" alt="Homepage" />

### Đơn hàng
Đi tới menu **"Đơn hàng"** và nhấp vào nó.

<ImagePopup src="/images/multi-vendor-marketplace/dashboard-order.png" alt="Dashboard Order" />

Trang quản lý đơn hàng sẽ mở ra, nơi bạn có thể xem tất cả các đơn đặt hàng của khách hàng ở một nơi. Bạn cũng có thể lọc đơn hàng theo ngày hoặc trạng thái, theo dõi tiến trình và cập nhật trạng thái giao hàng.

Điều này giúp bạn quản lý đơn hàng nhanh chóng và khiến khách hàng hài lòng.
<ImagePopup src="/images/multi-vendor-marketplace/order-page.png" alt="Order Page" />

Nhấp vào biểu tượng mũi tên, bạn sẽ tìm thấy thêm thông tin về đơn hàng, cùng với chi tiết hóa đơn và lô hàng.

Sau khi nhấp vào biểu tượng mũi tên bên cạnh đơn hàng, trang xem đơn hàng sẽ mở ra.
Tại đây, bạn có thể xem chi tiết đơn hàng như tên sản phẩm, giá cả, trạng thái, thông tin thanh toán và giao hàng, phương thức thanh toán và tổng số tiền.

Ban đầu, đơn hàng sẽ ở trạng thái “Đang chờ xử lý”. Điều này có nghĩa là đơn hàng đã được nhận nhưng chưa được xử lý hoặc vận chuyển.

### Hóa đơn
Người bán có thể tạo hóa đơn.

Nhấp vào nút **"Hóa đơn"** ở góc trên cùng bên phải.

<ImagePopup src="/images/multi-vendor-marketplace/pending-status-invoice.png" alt="Pending Status Invoice" />

Một cửa sổ bật lên sẽ xuất hiện hiển thị chi tiết hóa đơn như tên sản phẩm, số lượng, giá cả và tổng số tiền.

<ImagePopup src="/images/multi-vendor-marketplace/create-invoice.png" alt="Create Invoice" />

Khi nhấp vào nút "Tạo hóa đơn", hóa đơn sẽ được tạo tự động.
Một thông báo thành công sẽ xuất hiện trên màn hình và trạng thái đơn hàng sẽ thay đổi từ trạng thái Đang chờ xử lý sang trạng thái Đang xử lý, cho biết đơn hàng hiện đang được chuẩn bị để vận chuyển.

<ImagePopup src="/images/multi-vendor-marketplace/processing-state.png" alt="Processing State" />

Sau khi hóa đơn được tạo, bạn có thể xem hóa đơn trong tab "Hóa đơn".

<ImagePopup src="/images/multi-vendor-marketplace/invoice.png" alt="Invoice" />

### Lô hàng
Người bán có thể tạo một lô hàng.

Nhấp vào nút **"Giao hàng"** ở góc trên cùng bên phải.

<ImagePopup src="/images/multi-vendor-marketplace/Ship-button.png" alt="Ship Button" />

Một cửa sổ bật lên sẽ xuất hiện hiển thị chi tiết lô hàng như tên sản phẩm, số lượng, Số lượng đặt hàng, Số lượng vận chuyển.

Để tạo lô hàng, hãy làm theo các bước sau:

1) Nhập Tiêu đề của nhà cung cấp dịch vụ (ví dụ: FedEx, DHL, v.v.)

2) Nhập ID theo dõi do dịch vụ vận chuyển cung cấp

3) Chọn Nguồn đặt hàng sản phẩm từ danh sách thả xuống

4) Nhấp vào nút **"Tạo lô hàng"** để tiếp tục

<ImagePopup src="/images/multi-vendor-marketplace/create-ship.png" alt="Create Shipment" />

Khi nhấp vào nút **"Tạo lô hàng"**, lô hàng sẽ được tạo tự động.

Thông báo thành công sẽ xuất hiện trên màn hình và trạng thái đơn hàng sẽ thay đổi từ **Đang xử lý** thành **Đã hoàn thành**, cho biết đơn hàng đã được vận chuyển và thực hiện thành công.

<ImagePopup src="/images/multi-vendor-marketplace/complete.png" alt="Order Completed" />

Sau khi Lô hàng được tạo, bạn có thể xem nó trong tab "Lô hàng".
<ImagePopup src="/images/multi-vendor-marketplace/Shipment.png" alt="Shipment" />

### Đã hủy
Người bán có thể hủy đơn hàng.

**Lưu ý:** Người bán chỉ có thể hủy đơn hàng trước khi tạo hóa đơn hoặc giao hàng.

Sau khi hóa đơn hoặc lô hàng được tạo, đơn hàng sẽ không thể bị hủy nữa.

Bấm vào nút **"Hủy"** ở góc trên bên phải

<ImagePopup src="/images/multi-vendor-marketplace/cancel-button.png" alt="Cancel Button" />

Một cửa sổ bật lên sẽ xuất hiện hỏi "Bạn có chắc chắn không?"

Bạn sẽ có hai lựa chọn:

**1)** Đồng ý xác nhận việc hủy

**2)** Không đồng ý tiếp tục duy trì lệnh.

Chọn phù hợp để tiến hành.

<ImagePopup src="/images/multi-vendor-marketplace/msg-popup.png" alt="Confirmation Popup" />

Thông báo thành công sẽ xuất hiện trên màn hình và trạng thái đơn hàng sẽ thay đổi từ **"Đang chờ xử lý"** thành **"Đã hủy"**, cho biết đơn hàng đã được hủy thành công và sẽ không tiếp tục.

<ImagePopup src="/images/multi-vendor-marketplace/cancelled.png" alt="Order Cancelled" />
