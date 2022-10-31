import React from "react";
import { Link } from "react-router-dom";
import "../css/Header.css";

export default function Header() {
  const email = localStorage.getItem("email");
  console.log(email);
  function handleLogOut(){
    localStorage.clear()
  }
  if (email) {
    return (
      <div id="sign">
        <div className="header-link">
          <div style={{ marginRight: "10px" }}>
            <Link to="/thanh-vien">{email}</Link>
          </div>

          <div className="seprate"></div>

          <div style={{ marginLeft: "10px" }}>
            <Link to="/" onClick={handleLogOut} >Đăng xuất</Link>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div id="sign">
        <div className="header-link">
          <div style={{ marginRight: "10px" }}>
            <Link to="/thanh-vien">Đăng nhập</Link>
          </div>

          <div className="seprate"></div>

          <div style={{ marginLeft: "10px" }}>
            <Link to="/thanh-vien">Đăng ký</Link>
          </div>
        </div>
      </div>
    );
  }
}
