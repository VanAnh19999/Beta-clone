import React from "react";
import { Routes,Route } from "react-router-dom";
import Cinema from "./routes/Cinema";
import Home from "./routes/Home";
import Movie from "./routes/Movie";
import News from "./routes/News";
import Price from "./routes/Price";
import Register from "./routes/Register";
import Show from "./routes/Show";
import Co from "./routes/Co";
import Info from "./routes/Info";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/lich-chieu" element={<Show/>}/>
      <Route path="/Phim" element={<Movie/>}/>
      <Route path="/Rap-chieu" element={<Cinema/>}/>
      <Route path="/Gia-ve" element={<Price/>}/>
      <Route path="/Tin-tuc" element={<News/>}/>
      <Route path="/nhuong-quyen" element={<Co/>}/>
      <Route path="/thanh-vien" element={<Register/>}/>
      <Route path="/thong-tin-chung" element={<Info/>}/>
    </Routes>
    </>
  )
  }

export default App;
