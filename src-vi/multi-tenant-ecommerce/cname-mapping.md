Bản đồ tên # C

**Bản đồ tên CName** cho phép người thuê kết nối miền riêng của họ với miền phụ do SaaS tạo, giúp xây dựng thương hiệu chuyên nghiệp.

Khi người thuê đăng ký, một tên miền phụ mặc định như **username.rootdomain.com** sẽ được tạo. Với CNAME, tên miền thực của họ có thể được chuyển hướng đến tên miền phụ này. Điều này giúp khách hàng dễ dàng tìm thấy cửa hàng và giữ được hình ảnh trực tuyến đáng tin cậy, nhất quán.

Ánh xạ được **Quản trị viên cấp cao** thiết lập thông qua nhà cung cấp DNS của đối tượng thuê và SaaS và không cần bất kỳ plugin bổ sung nào.

---

## Flow để ánh xạ tên miền thuê bằng CNAME

### Bước 1: Đăng nhập vào DNS Console

Đăng nhập vào nhà cung cấp DNS của bạn (như GoDaddy) và đi tới cài đặt cho miền bạn muốn ánh xạ.

<ImagePopup src="/images/multi-tenant-ecommerce/1-godaddy.png" alt="GoDaddy DNS Console" />

---

### Bước 2: Thêm bản ghi DNS

Sau khi bạn đăng nhập, hãy thiết lập **Bản ghi A** cho miền của bạn để chuyển hướng đến IP của máy chủ SaaS.

Ví dụ: để ánh xạ miền **myshopdemo.com** với máy chủ SaaS **IP: 206.189.131.29**, hãy thêm **A bản ghi** trong cài đặt DNS của bạn như minh họa trong hình ảnh bên dưới.

<ImagePopup src="/images/multi-tenant-ecommerce/2-dns-record.png" alt="DNS Record Configuration" />

---

### Bước 3: Cấu hình CNAME trong SaaS

Sau khi ánh xạ miền với IP máy chủ, hãy đăng nhập với tư cách **Quản trị viên cấp cao** trong SaaS. Bạn sẽ thấy tên miền phụ của người thuê đã được tạo (ví dụ **site1.VNS.com**).

<ImagePopup src="/images/multi-tenant-ecommerce/3-super-tenants.png" alt="Super Admin Tenants List" />

Để ánh xạ miền thực của người thuê (ví dụ: **myshopdemo.com**), hãy nhấp vào biểu tượng **chỉnh sửa (bút chì)**, nhập miền vào trường **CNAME**, sau đó nhấp vào **Lưu người thuê** để lưu.

<ImagePopup src="/images/multi-tenant-ecommerce/4-edit-tenant.png" alt="Edit Tenant CNAME" />

---

### Bước 4: Test Domain

Mở trang web của người thuê trong trình duyệt và xem nó có tải đúng cách hay không.

<ImagePopup src="/images/multi-tenant-ecommerce/5-tenant-store.png" alt="Tenant Store Frontend" />

Nếu trang web tải trên miền ban đầu của người thuê (như **myshopdemo.com**), điều đó có nghĩa là kết nối với miền phụ SaaS đã hoạt động thành công.
