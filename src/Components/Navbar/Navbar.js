import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";
// import { window } from "browser-monads";

import "./Navbar.scss";

import Timlogo from "../../images/Tim logo.png";

const navItems = [
  {
    navItem: "Project",
    navigation: "/Projects",
  },
  {
    navItem: "About",
    navigation: "/About",
  },
  {
    navItem: "Contact",
    navigation: "/Contact",
  },
  {
    navItem: "Blog",
    navigation: "/Blog",
  },
];

//Component begins
const Navbar = () => {
  //This Ref is to get the DOM node for NavBar
  const navRef = useRef();
  //This Ref is to create a mutable value
  let prevScrollRef = useRef(0);

  useEffect(() => {
    prevScrollRef.current = window.pageYOffset;

    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollRef.current > currentScrollPos) {
        navRef.current.style.top = "0px";
      } else {
        navRef.current.style.top = "-75px";
      }
      prevScrollRef.current = currentScrollPos;
    };
  });

  return (
    <div ref={navRef} className="nav">
      <div className="container nav-container">
        {/* Logo Import */}
        <Link to="/">
          <img src={Timlogo} alt="Timothy's Logo" className="nav-logo" />
        </Link>
        {/* Rendering of unordered list */}
        <ul className="nav-items bd-text-w">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  partiallyActive={true}
                  activeClassName="nav-items-active"
                  to={item.navigation}
                >
                  {item.navItem}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
