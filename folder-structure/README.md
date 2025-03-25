# Cấu trúc thư mục trong dự án React

## 1. `assets/`
Thư mục chứa các tài nguyên tĩnh như hình ảnh, biểu tượng (icons), fonts, video, âm thanh.

**Ví dụ:**
```
assets/
├── images/
│   ├── logo.png
│   ├── background.jpg
├── icons/
│   ├── menu.svg
│   ├── user.png
├── fonts/
│   ├── Roboto.ttf
```

**Lợi ích:** Giúp tổ chức và quản lý tài nguyên dễ dàng hơn.

---
## 2. `components/`
Chứa các UI components có thể tái sử dụng trong dự án. Thường được chia nhỏ thành **atoms, molecules, organisms** theo nguyên tắc **Atomic Design**.

**Ví dụ:**
```
components/
├── Button.jsx
├── Header.jsx
├── Footer.jsx
├── Sidebar.jsx
├── Card/
│   ├── Card.jsx
│   ├── Card.module.css
```

### Phân cấp Atomic Design:
- **Atoms (Nguyên tử):** Các thành phần UI cơ bản nhất (button, input, label,...).
- **Molecules (Phần tử):** Kết hợp nhiều atoms tạo thành khối chức năng phức tạp hơn (navbar chứa nút, logo, menu,...).
- **Organisms (Sinh vật):** Kết hợp nhiều molecules tạo thành UI phức tạp hơn.
- **Templates (Mẫu trang):** Định hình bố cục tổng thể của trang web.
- **Pages (Trang hoàn chỉnh):** Phiên bản hoàn chỉnh của template với dữ liệu thực tế.

**Lợi ích:** Giúp code có cấu trúc tốt hơn và dễ bảo trì.

---
## 3. `config/`
Chứa các cài đặt cấu hình như API endpoints, biến môi trường, cấu hình ứng dụng.

**Ví dụ:**
```
config/
├── apiConfig.js  // Lưu URL API
├── themeConfig.js  // Cấu hình màu sắc, UI
├── appConfig.js  // Các config chung
```

**Lợi ích:** Dễ dàng thay đổi cài đặt mà không cần chỉnh sửa nhiều file.

---
## 4. `context/`
Chứa các React Context API để quản lý state toàn cục, thay thế Redux hoặc Recoil cho dự án nhỏ.

**Ví dụ:**
```
context/
├── AuthContext.js  // Quản lý user đăng nhập
├── ThemeContext.js  // Quản lý theme (dark/light mode)
├── AppProvider.js  // Wrapper cho Context
```

**Lợi ích:** Giúp quản lý state toàn cục mà không cần truyền props qua nhiều component (prop drilling).

---
## 5. `hooks/`
Chứa các **custom hooks** để tái sử dụng logic trong nhiều component.

**Ví dụ:**
```
hooks/
├── useAuth.js  // Kiểm tra user có đăng nhập không
├── useFetch.js  // Hook giúp fetch API dễ dàng hơn
├── useLocalStorage.js  // Hook để lưu vào localStorage
```

**Lợi ích:** Giúp code gọn gàng hơn, tái sử dụng logic dễ dàng hơn.

---
## 6. `services/`
Chứa các hàm xử lý API như gọi API, xác thực người dùng, xử lý dữ liệu.

**Ví dụ:**
```
services/
├── authService.js  // Xác thực user
├── userService.js  // Lấy thông tin user từ API
├── productService.js  // Lấy danh sách sản phẩm
```

**Lợi ích:** Tách biệt logic gọi API ra khỏi component, giúp dễ dàng quản lý và bảo trì.

---
## 7. `styles/`
Chứa các file CSS, SCSS hoặc Styled Components để quản lý styles.

**Ví dụ:**
```
styles/
├── global.css  // CSS toàn cục
├── variables.css  // Biến màu sắc, font size
├── theme.css  // Định nghĩa theme sáng/tối
```

**Lợi ích:** Giúp quản lý file CSS riêng thay vì trộn vào component.

---
## 8. `utils/`
Chứa các **hàm tiện ích** dùng chung cho toàn bộ dự án.

**Ví dụ:**
```
utils/
├── formatDate.js  // Chuyển đổi ngày giờ
├── formatCurrency.js  // Định dạng số tiền
├── validateEmail.js  // Kiểm tra email hợp lệ
```

**Lợi ích:** Giúp tái sử dụng code và giữ component sạch sẽ.

---
## **Tóm tắt**
| Thư mục      | Chức năng chính |
|-------------|----------------|
| `assets/`   | Chứa ảnh, icon, font, video. |
| `components/` | Chứa UI components (button, header, card,...) |
| `config/`   | Chứa file cấu hình (API, theme, app settings). |
| `context/`  | Quản lý state toàn cục bằng React Context API. |
| `hooks/`    | Chứa custom hooks để tái sử dụng logic. |
| `services/` | Chứa các API services như authService, userService. |
| `styles/`   | Chứa file CSS hoặc SCSS. |
| `utils/`    | Chứa các hàm tiện ích như định dạng số, ngày, validate email. |

**Lợi ích của cách tổ chức này:**
- Dễ bảo trì, mở rộng.
- Quản lý code rõ ràng, có tổ chức.
- Giúp phát triển dự án nhanh hơn, tái sử dụng code tốt hơn.
