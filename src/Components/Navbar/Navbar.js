import React, { useState, useRef, useEffect } from "react";
import { Link } from "gatsby";
import { window, document } from "browser-monads";

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
  const [currentScroll, setCurrentScroll] = useState(window.pageYOffset);
  const navRef = useRef();
  let prevScrollpos;

  useEffect(() => {
    prevScrollpos = window.pageYOffset;
    console.log(prevScrollpos);
  }, []);

  window.onscroll = function () {
    setCurrentScroll(window.pageYOffset);
    if (prevScrollpos > currentScroll) {
      navRef.current.style.top = "0px";
    } else {
      navRef.current.style.top = "-70px";
    }
    prevScrollpos = currentScroll;
  };

  console.log(currentScroll);

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
