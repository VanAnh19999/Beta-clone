import React from "react";
import "./NavStyle.css";
import Header from "./navbar/Header";
import NavbarContainer from "./navbar/Navbar";

const Navbar = () => {
  return (
    <div className="nav" style={{position :"sticky" , top: 0 , zIndex : 1}}>
      <Header />
      <NavbarContainer />
    </div>
  );
};

export default Navbar;
