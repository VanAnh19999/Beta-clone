import React from "react";
import "antd/dist/antd.min.css";
import { Carousel } from "antd";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

import { useRef } from "react";

const rightArrow = {
  color: "#CCCCCC",
  fontSize: "5rem",
  top: "45%",
  position: "absolute",
  right: "2%",
  transform: "translate(0,-50%)",
  zIndex: 1,
};
const leftArrow = {
  color: "#CCCCCC",
  fontSize: "5rem",
  top: "45%",
  position: "absolute",
  left: "2%",
  transform: "translate(0,-50%)",
  zIndex: 1,
};

function NewSlider() {
  const slider = useRef(null);
  return (
    <div>
      <Carousel ref={slider} autoplay autoplaySpeed={2000}>
        <div>
          <img
            className="slider"
            src={
              "https://files.betacorp.vn/files/ecm/2022/07/15/tri-an-ban-than1-copy-03-093927-150722-87.png"
            }
            alt="pic1"
          ></img>
        </div>
        <div>
          <img
            className="slider"
            src={
              "https://files.betacorp.vn/files/ecm/2022/07/22/1702x621-101058-220722-30.jpg"
            }
            alt="pic1"
          ></img>
        </div>
        <div>
          <img
            className="slider"
            src={
              "https://files.betacorp.vn/files/ecm/2022/06/08/mb-bank-ctkm-1702x621-092111-080622-96.jpg"
            }
            alt="pic1"
          ></img>
        </div>
        <div>
          <img
            className="slider"
            src={
              "https://files.betacorp.vn/files/ecm/2021/07/17/300621-nhuong-quyen-1702x621-01-1-182121-020721-85-161350-170721-45.jpg"
            }
            alt="pic1"
          ></img>
        </div>
      </Carousel>
      <NavigateNextIcon style={rightArrow} onClick={() => slider.current.next()}/>
      <NavigateBeforeIcon style={leftArrow} onClick={() => slider.current.prev()}/>
    </div>
  );
}

export default NewSlider;
