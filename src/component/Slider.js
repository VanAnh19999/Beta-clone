import React, { useEffect, useState } from "react";
import "./SliderStyle.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

const Slider = () => {
  const [pics, setPics] = useState(0);
  const listPics = [
    {
      url: "https://files.betacorp.vn/files/ecm/2022/07/15/tri-an-ban-than1-copy-03-093927-150722-87.png",
    },
    {
      url: "https://files.betacorp.vn/files/ecm/2022/07/22/1702x621-101058-220722-30.jpg",
    },
    {
      url: "https://files.betacorp.vn/files/ecm/2022/06/08/mb-bank-ctkm-1702x621-092111-080622-96.jpg",
    },
    {
      url: "https://files.betacorp.vn/files/ecm/2021/07/17/300621-nhuong-quyen-1702x621-01-1-182121-020721-85-161350-170721-45.jpg",
    },
  ];
  const rightArrow = {
    color: "white",
    fontSize: "5rem",
    top: "45%",
    position: "absolute",
    right: "2%",
    transform: "translate(0,-50%)",
    zIndex: 1,
  };
  const leftArrow = {
    color: "white",
    fontSize: "5rem",
    top: "45%",
    position: "absolute",
    left: "2%",
    transform: "translate(0,-50%)",
    zIndex: 1,
  };
  function goToNext() {
    const isLastSlide = pics === listPics.length - 1;
    const nextIndex = isLastSlide ? 0 : pics + 1;
    setPics(nextIndex);
  }
  function goToPre() {
    const isFirstSlide = pics === 0;
    const preIndex = isFirstSlide ? listPics.length - 1 : pics - 1;
    setPics(preIndex);
  }
  useEffect(() => {
    const timer = window.setInterval(() => {
      if (pics === listPics.length - 1) {
        setPics(0);
      } else {
        setPics(pics + 1);
      }
    }, 2000);
    return () => {
      window.clearInterval(timer);
    };
  });
  console.log(pics);
  return (
    <div>
      <img className="slider" src={listPics[pics].url} alt="pic1"></img>
      <NavigateNextIcon style={rightArrow} onClick={goToNext} />
      <NavigateBeforeIcon style={leftArrow} onClick={goToPre} />
    </div>
  );
};

export default Slider;
