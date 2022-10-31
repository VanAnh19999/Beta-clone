import React from "react"
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import MovieSlide from "../component/Movieslide"

const Movie = () => {
  return (
    <div>
      <Navbar/>
      <MovieSlide/>
      <Footer/>
    </div>
  )
}

export default Movie