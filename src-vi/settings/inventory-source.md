# Nguồn hàng tồn kho

Multi-Warehouse Inventory là một trong những tính năng độc đáo của VNS. Ở đây chúng tôi sẽ giải thích cách bạn có thể quản lý hàng tồn kho nhiều kho trong Thương mại điện tử Laravel và cung cấp dịch vụ đáng tin cậy cho khách hàng của bạn.  

Việc có một nguồn hàng tồn kho duy nhất có thể đặt ra một số hạn chế cho cửa hàng Thương mại Điện tử của bạn.  

Ví dụ: giả sử bạn chỉ có một kho hàng ở Delhi. Một khách hàng từ Chennai đặt hàng. Việc giao sản phẩm đó từ Delhi có thể dẫn đến chậm trễ, chi phí vận chuyển cao hơn, v.v. Tuy nhiên, nếu bạn có hàng tồn kho ở Chennai, sản phẩm sẽ đến tay khách hàng nhanh hơn, cắt giảm thời gian và chi phí vận chuyển.  

Bằng cách sử dụng Multi-Warehouse Inventory, bạn có thể dễ dàng quản lý tất cả các nguồn hàng tồn kho. Trong VNS, bạn có thể tạo bao nhiêu nguồn hàng tồn kho nếu cần và quản lý chúng một cách liền mạch.

### Các Bước Dễ Dàng Quản Lý Hàng Tồn Kho Tại VNS

**Bước 1:** Trên bảng Quản trị của VNS, vào **Cài đặt >> Nguồn tồn kho >> Tạo nguồn tồn kho** như hình bên dưới.  

<ImagePopup src="/images/settings/inventorySource.png" alt="Inventory Source" />

**Bước 2: Chung**  
Nhập **Mã, Tên, Mô tả, Vĩ độ, Kinh độ và Mức độ ưu tiên** và đặt **Trạng thái** là hoạt động.  

<ImagePopup src="/images/settings/inventoryConfiguration.png" alt="Inventory Configuration" />

**Bước 3: Thông tin liên hệ**  
Nhập **Tên, Email, Fax và Số liên lạc**.  

<ImagePopup src="/images/settings/contactInfo.png" alt="Contact Information" />

**Bước 4: Địa chỉ nguồn**  
Nhập chi tiết địa chỉ nguồn như quốc gia, địa chỉ, tiểu bang và thành phố.  

<ImagePopup src="/images/settings/sourceAddress.png" alt="Source Address" />

Sau đó, nhấp vào **Lưu nguồn hàng tồn kho**. Bây giờ bạn sẽ thấy nguồn tồn kho mới được tạo như hình bên dưới.  

<ImagePopup src="/images/settings/inventoryOutput.png" alt="Inventory Output" />

**Bước 5:** Đi tới **Cài đặt >> Kênh**. Mở kênh đã chọn trong **Chế độ chỉnh sửa >> Nguồn khoảng không quảng cáo**. Đây là trường nhiều lựa chọn nơi bạn có thể chọn nhiều nguồn khoảng không quảng cáo cho các kênh của mình. Sau đó, nhấp vào **Lưu kênh**.

### Cài đặt hàng tồn kho trên trang sản phẩm

Đi tới **Danh mục>>Sản phẩm**. Mở sản phẩm đã chọn trong **Chế độ chỉnh sửa** và nhập **số lượng** cho từng nguồn hàng tồn kho. Sau khi điền vào các trường bắt buộc, hãy nhấp vào **Lưu sản phẩm**.  

**Lưu ý:** Nếu bạn không nhập bất kỳ số lượng nào, theo mặc định, 0 sẽ được lưu và hàng tồn kho có số lượng 0 sẽ không hiển thị trong các tùy chọn kiểm kê của trang vận chuyển.  

<ImagePopup src="/images/settings/productInventory.png" alt="Product Inventory" />

### Cài đặt hàng tồn kho trên trang lô hàng

Đi tới **Bán hàng >> Đơn hàng**. Mở đơn hàng đã chọn trong **Chế độ chỉnh sửa >> Hóa đơn >> Lưu hóa đơn >> Vận chuyển**.  

Trong **Phần đặt hàng sản phẩm**, Quản trị viên có thể quyết định sản phẩm sẽ được phân phối từ kho nào.  

<ImagePopup src="/images/settings/inventorySetting.png" alt="Inventory Setting" />

**Lưu ý:** Bạn chỉ có thể bật một Khoảng không quảng cáo tại một thời điểm. Khi một khoảng không quảng cáo được chọn, những khoảng không quảng cáo khác sẽ tự động bị vô hiệu hóa.  
Ví dụ: nếu bạn chọn **Noida Warehouse**, các hàng tồn kho khác sẽ bị vô hiệu hóa. Nhập số lượng cần vận chuyển và nhấp vào **Tạo lô hàng**.

Vì vậy, bằng cách làm theo các bước sau, bạn có thể dễ dàng tạo và quản lý **Nguồn hàng tồn kho** trong VNS.
