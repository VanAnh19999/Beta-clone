import React from "react";
import { Link } from "react-router-dom";
import logo from "../../pics/logo.png";
import "../css/Navbar.css";
import "antd/dist/antd.min.css";

import { TreeSelect } from "antd";

export default function NavbarContainer(props) {
  const { TreeNode } = TreeSelect;
  const onSelect = (keys, info) => {
    localStorage.setItem('center' , info.value)
  };

  const center = localStorage.getItem('center')
  return (
    <div className="beta-navbar">
      <div className="beta-logo-link">
        <Link to="/">
          <img src={logo} alt="logo" className="normal-img"></img>
        </Link>
      </div>


      <TreeSelect
      showSearch
      style={{
        width: "100%",
      }}
      defaultValue={center ? center : "Beta Thái Nguyên"}
      dropdownStyle={{
        maxHeight: 400,
        overflow: "auto",
      }}
      placeholder="Please select"
      allowClear
      treeDefaultExpandAll
      onSelect={onSelect}
    >
      <TreeNode value="Hà Nội" title="Hà Nội">
        <TreeNode value="Beta Thanh Xuân" title="Beta Thanh Xuân" />
        <TreeNode value="Beta Mỹ Đình" title="Beta Mỹ Đình" />
        <TreeNode value="Beta Đan Phượng" title="Beta Đan Phượng" />
        <TreeNode value="Beta Giải Phóng" title="Beta Giải Phóng" />
      </TreeNode>
    </TreeSelect>



      <div className="navbar-logo-list" style={{ height: "100%" }}>
        <ul className="list">
          <li>
            <Link to="/lich-chieu">LỊCH CHIẾU THEO RẠP</Link>
          </li>
          <li>
            <Link to="/phim">PHIM</Link>
          </li>
          <li>
            <Link to="/rap-chieu">RẠP</Link>
          </li>
          <li>
            <Link to="/gia-ve">GIÁ VÉ</Link>
          </li>
          <li>
            <Link to="/tin-tuc">TIN MỚI VÀ ƯU ĐÃI</Link>
          </li>
          <li>
            <Link to="/nhuong-quyen">NHƯỢNG QUYỀN</Link>
          </li>
          <li>
            <Link to="/thanh-vien">THÀNH VIÊN</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
