import React from "react"

const Signin = () => {
  return (
    <div>
    <form className="Sign-in">
        <label>Email: </label>
        <input type="email" placeholder="Email"></input>
        <label>Mật khẩu: </label>
        <input type="password" placeholder="Mật Khẩu"></input>
    </form>
    </div>
    
  )
}

export default Signin