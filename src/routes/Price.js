import React from "react"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import "./PriceStyle.css"
const Price = () => {
  return (
    <div>
      <Navbar/>
      <div className="price">
      <h2>GIÁ VÉ RẠP BETA THANH XUÂN</h2>
      <img src="https://files.betacorp.vn/files/ecm/2021/01/28/1920x2400-bang-gia-thanh-xuan-160133-280121-27.jpg" alt="Center" class="center"></img>
      </div>
      <Footer/>
    </div>
  )
}

export default Price