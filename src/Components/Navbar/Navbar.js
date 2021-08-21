import React, { useRef, useEffect } from "react";
import { Link } from "gatsby";

import "./Navbar.scss";

import Timlogo from "../../images/Tim logo.png";

const navItems = [
  {
    navItem: "Projects",
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
  //This Ref is to get the DOM node for the NavBar on moblie devices
  const myNav = useRef();
  //This Ref is to create a mutable value
  let prevScrollRef = useRef(0);

  useEffect(() => {
    prevScrollRef.current = window.pageYOffset;
    window.onscroll = function () {
      let currentScrollPos = window.pageYOffset;

      if (currentScrollPos > 10) {
        navRef.current.style.boxShadow = "0px 3px 4px rgba(0, 0, 0, 0.1)";
      } else {
        navRef.current.style.boxShadow = "none";
      }
      if (prevScrollRef.current >= currentScrollPos) {
        navRef.current.style.top = "0px";
      } else {
        navRef.current.style.top = "-75px";
      }
      prevScrollRef.current = currentScrollPos;
    };
  }, []);

  function openNav() {
    myNav.current.style.width = "100%";
  }

  function closeNav() {
    myNav.current.style.width = "0%";
  }

  //Component return
  return (
    <div ref={navRef} className="nav">
      <div className="container nav-container">
        {/* Logo Import */}
        <Link to="/">
          <img src={Timlogo} alt="Timothy's Logo" className="nav-logo" />
        </Link>
        {/* Rendering of unordered list */}
        <ul className="nav-items bd-text-w bd-text-m">
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
        {/* //Hamburger SVG the hambuger svg triggers the overlay JSX */}
        <svg
          width="28"
          height="16"
          viewBox="0 0 28 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={openNav}
        >
          <path
            d="M1 1H26.6667M1 8H26.6667M1 15H26.6667"
            stroke="#333D47"
            strokeWidth="2"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Overlay JSX */}
      <div ref={myNav} className="overlay">
        {/* Close SVG */}
        <svg
          className="closebtn"
          onClick={closeNav}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3333 18.3334L1.66666 1.66669"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1.66666 18.3334L18.3333 1.66669"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <ul className="overlay-content">
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
