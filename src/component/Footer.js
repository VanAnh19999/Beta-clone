import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyle.css";
import logo from "../pics/logo.png";

const Footer = () => {
  return (
    <div className="list-box">
      <div className="col-1">
        <img src={logo} alt="logo" className="logo-image-footer"></img>
        <ul className="footer-style">
          <li>
            <Link to="/thong-tin-chung">Tuyển dụng</Link>
          </li>
          <li>
            <Link to="/thong-tin-chung">Giới thiệu</Link>
          </li>
          <li>
            <Link to="/thong-tin-chung">Liên hệ</Link>
          </li>
          <li>
            <Link to="/thong-tin-chung">F.A.Q</Link>
          </li>
          <li>
            <Link to="/thong-tin-chung">Hoạt động xã hội</Link>
          </li>
          <li>
            <Link to="/thong-tin-chung">Điều khoản sử dụng</Link>
          </li>
          <li>
            <Link to="/thong-tin-chung">
              Chính sách thanh toán, đổi trả - hoàn vé
            </Link>
          </li>
          <li>
            <Link to="/thong-tin-chung">Liên hệ quảng cáo</Link>
          </li>
          <li>
            <Link to="/thong-tin-chung">Điều khoản bảo mật</Link>
          </li>
          <li>
            <Link to="/thong-tin-chung">Hướng dẫn đặt vé online</Link>
          </li>
        </ul>
      </div>

      <div className="col-2">
        <div className="footer-heading">
          <h2>Cụm Rạp Beta</h2>
        </div>

        <ul className="footer-style">
          <li>
            <Link to="/rap-chieu">
              Beta Cinemas Quang Trung, tp Hồ Chí Minh - Hotline 036 9939 722
            </Link>
          </li>
          <li>
            <Link to="/rap-chieu">
              Beta Cinemas Giải Phóng, Hà Nội - Hotline 0585 680 360
            </Link>
          </li>
          <li>
            <Link to="/rap-chieu">
              Beta Cinemas Thanh Xuân, Hà Nội - Hotline 082 4812878
            </Link>
          </li>
          <li>
            <Link to="/rap-chieu">
              Beta Cinemas Biên Hòa, Đồng Nai - Hotline 0397 806 598
            </Link>
          </li>
          <li>
            <Link to="/rap-chieu">
              Beta Cinemas Long Khánh, Đồng Nai - Hotline 0251 6270040
            </Link>
          </li>
          <li>
            <Link to="/rap-chieu">
              Beta Cinemas Long Thành, Đồng Nai - Hotline 0927 168 911
            </Link>
          </li>
          <li>
            <Link to="/rap-chieu">
              Beta Cinemas Phú Mỹ, Bà Riạ Vũng Tàu - Hotline 0886 006 310
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-3">
        <div className="footer-heading">
          <h2>Kết nối với chúng tôi</h2>
        </div>
        <img
          src="https://www.betacinemas.vn/Assets/Common/logo/dathongbao.png"
          style={{ width: "180px", cursor: "pointer" }}
          alt="hung"
        ></img>
      </div>

      <div className="col-4">
        <div className="footer-heading">
          <h2>Liên hệ</h2>
        </div>

        <h3>CÔNG TY CỔ PHẦN BETA MEDIA</h3>
        <p>
          Giấy chứng nhận ĐKKD số: 0106633482 - Đăng ký lần đầu ngày 08/09/2014
          tại Sở Kế hoạch và Đầu tư Thành phố Hà Nội
        </p>
        <p>
          Địa chỉ trụ sở: Tầng 3, số 595, đường Giải Phóng, phường Giáp Bát,
          quận Hoàng Mai, thành phố Hà Nội
        </p>
        <p>Hotline: 0934 632 682</p>
        <p>Email: cskh@betacorp.vn</p>
        <h3>Liên hệ hợp tác kinh doanh:</h3>
        <h3>minh@betacorp.vn</h3>
      </div>
    </div>
  );
};

export default Footer;
