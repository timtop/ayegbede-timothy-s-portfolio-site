import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./Layout.scss";
import appleTouchIcon from "../favicon/apple-touch-icon.png";
import thirtytwofav from "../favicon/favicon-32x32.png";
import sixteenfav from "../favicon/favicon-16x16.png";
import Helmet from "react-helmet";
import previewImage from "../images/Website Preview.jpg";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Navbar />
      <Helmet>
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={thirtytwofav} />
        <link rel="icon" type="image/png" sizes="16x16" href={sixteenfav} />
        <meta property="og:image" content={previewImage} />
      </Helmet>
      <div className="layout-content">{children}</div>
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
