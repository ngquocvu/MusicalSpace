## MUSICAL SPACE APP

## LOG HISTORY

26.08.2021
Reducers - Lỗi không gọi được reducer
Nguyên nhận: Đảo ngược vị trí props truyền vào Reducers
Giải pháp: khi viết Reducer thì không được thay đổi vị trí props truyền vào (state,action)

31.08.2021
App.tsx - Bug truy cập các trang phụ của website qua link trực tiếp như (./profile; ./top) sẽ bị đẩy về auth.
Nguyên nhân: biến expiryTime chưa kịp cập nhật để có tham số cho hàm isValidSession. (useEffect trang phụ load trước rồi mới load useEffect trang chứa nó)
Giải pháp: Loại bỏ state của expiryTime và tạo biến let bên trong hàm isValidSession để luôn lấy mới data từ localStorage mỗi khi gọi hàm

Header.tsx - Header luôn load lại loader mỗi khi gọi trang mới (Thuộc về hiệu năng)
Giải pháp: Tạo Layout.tsx để chuyển hướng trang đến đây mỗi khi người dùng truy cập website. tại Layout, truyền Header vào đầu rồi sau đó tiếp tục điều hướng đến trang cần chuyển theo URL.
