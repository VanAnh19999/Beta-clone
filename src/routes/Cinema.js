import React from "react"
import Cinemas from "../component/cinema/Cinemas"
import Navbar from "../component/Navbar"
import Footer from '../component/Footer'

const Cinema = () => {
  return (
    <div>
      <Navbar/>
      <Cinemas />
      <Footer />
    </div>
  )
}

export default Cinema