import React from "react"
import Footer from "../component/Footer"
import Navbar from "../component/Navbar"
import { Empty } from 'antd';

const News = () => {
  return (
    <div>
      <Navbar/>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      <Footer/>
    </div>
  )
}

export default News