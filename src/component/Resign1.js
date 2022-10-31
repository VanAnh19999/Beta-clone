import React from "react"

const Resign1 = () => {
  return (
    <div>
    <div className="Resign">
    <form>
        <label>Họ tên</label>
        <input type="text" placeholder="Họ tên"></input>
        <label>Email</label>
        <input type="email" placeholder="Email"></input>
    </form>
    <form>
      <label>Mật khẩu</label>
      <input type="password" placeholder="Mật khẩu"></input>
      <label>Xác nhận lại mật khẩu</label>
      <input type="password" placeholder="Xác nhận lại mật khẩu"></input>
    </form>
    <form>
      <label>Ngày sinh</label>
      <input type="date" placeholder="Ngày sinh"></input>
      <select>
        <option>Giới tính</option>
        <option>Nữ</option>
        <option>Nam</option>
        <option>Khác</option>
      </select>
    </form>
    <label>Số điện thoại</label>
    <input type="number" placeholder="Số điện thoại"></input>
    </div>
    </div>
  )
}

export default Resign1