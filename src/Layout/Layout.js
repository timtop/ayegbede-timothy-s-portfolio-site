import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <div className="layout-content">{children}</div>
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
