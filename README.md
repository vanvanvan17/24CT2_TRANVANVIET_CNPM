# VNLibrary 

Hệ thống quản lý thư viện bằng Next.js + TypeScript + MySQL + mysql2.  Giao diện tiếng Việt.

## 1. Yêu cầu
- Windows 10/11
- Node.js 18.18+ (khuyến nghị Node 20 LTS)
- MySQL Community Server 8.x
- VS Code

## 2. Cấu hình MySQL
Mặc định `.env` đã đặt:
- Host: localhost
- Port: 3306
- User: root
- Password: 12345678
- Database: vnlibrary

Nếu MySQL của bạn dùng mật khẩu khác, sửa `DB_PASSWORD` trong `.env`.

## 3. Cài và tạo CSDL
Mở terminal tại thư mục dự án:
```powershell
npm install
npm run db:setup
npm run db:seed
npm run db:verify
```

## 4. Chạy website
```powershell
npm run dev
```
Mở Chrome: http://localhost:3000/login

## 5. Tài khoản quản trị
Email: `admin@vnlibrary.vn`
Mật khẩu: `Admin@123`

## 6. Chức năng
- Đăng nhập / đăng ký / quên mật khẩu
- Tổng quan và thống kê
- Quản lý sách, kho, tìm kiếm, lọc thể loại, thêm/sửa/xóa
- 287 độc giả mẫu, kiểm tra tên không chứa số
- 119 phiếu đang mượn, 21 phiếu quá hạn
- Mượn/trả và tự tính phạt quá hạn
- Đặt trước
- Mua sách và thanh toán, trừ tồn kho
- Tiền phạt và ghi nhận thanh toán
- Tài khoản người dùng, khóa/mở khóa
- Thông báo sắp/quá hạn
- Báo cáo biểu đồ
- Cài đặt hệ thống

## 7. Nếu gặp Access denied 1045
Kiểm tra MySQL đang chạy và `.env` có đúng:
`DB_USER=root`
`DB_PASSWORD=12345678`

Không chạy Prisma. Không cần `npx prisma ...`.
