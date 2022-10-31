import React from "react";
import '../css/Cinema.css'


export default function CinemaIntroduction(props) {
  return (
    <div className="cinema-content">
      <h1 className="cinema-content-heading">Beta Thái Nguyên</h1>
      <img className="intro-image"
        src="https://files.betacorp.vn/files/ecm/2018/07/04/35359362-242694916502971-7052850785574453248-n-103924-040718-45.png"
        alt="beta"
        style={{borderRadius : '5px'}}
      />

      <p>
        Thành lập vào tháng 12 năm 2014, Beta Cinemas Thái Nguyên có vị trí
        trung tâm, toạ lạc tại Hoàng Gia Plaza. Rạp tự hào là rạp phim tư nhân
        duy nhất và đầu tiên sở hữu hệ thống phòng chiếu phim đạt chuẩn
        Hollywood tại TP. Thái Nguyên. <br />
        <br />

        Rạp được trang bị hệ thống máy chiếu, phòng chiếu hiện đại với 100% nhập
        khẩu từ nước ngoài, với 4 phòng chiếu tương được 535 ghế ngồi. Hệ thống
        âm thanh Dolby 7.1 và hệ thống cách âm chuẩn quốc tế đảm bảo chất lượng
        âm thanh sống động nhất cho từng thước phim bom tấn. <br /><br />

        Mức giá xem phim tại Beta Cinemas Thái Nguyên rất cạnh tranh: giá vé 2D
        chỉ từ 40.000 VNĐ và giá vé 3D chỉ từ 60.000 VNĐ. Không chỉ có vậy, rạp
        còn có nhiều chương trình khuyến mại, ưu đãi hàng tuần như đồng giá vé
        40.000 vào các ngày Thứ 3 vui vẻ, Thứ 4 Beta's Day, đồng giá vé cho Học
        sinh sinh viên, người cao tuổi, trẻ em..... <br/>
        
        Thông tin liên hệ <br/><br />
        Rạp Beta Cinemas Thái Nguyên <br /><br />
        
        Địa chỉ: Hoàng Gia Plaza, 259 Quang Trung, Tân
        Thịnh, TP Thái Nguyên, Tỉnh Thái Nguyên <br /><br />
        
        Hotline: 0867 460 053 <br /><br />
        
        Mua phiếu quà tặng, mua vé số lượng lớn, đặt phòng chiếu tổ chức hội nghị, trưng
        bày quảng cáo: Liên hệ với Hotline 0867 460 053 để được hưởng ưu đãi tốt
        nhất bạn nhé!
        <br />
      </p>
    </div>
  );
}
