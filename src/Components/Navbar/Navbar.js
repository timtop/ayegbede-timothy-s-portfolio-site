import React from "react";

import "../../Style/style.css";
import "./Navbar.css";

import Timlogo from "../../images/Timlogo.png";

const navItems = ["Projects", "About", "Contacts", "Blog"];

const Navbar = () => {
  return (
    <div className="nav">
      <div className="container nav-container">
        {/* Logo Import */}
        <img src={Timlogo} alt="Timothy's Logo" className="nav-logo" />
        {/* Rendering of unordered list */}
        <ul className="nav-items">
          {navItems.map((item) => {
            return <li>{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
