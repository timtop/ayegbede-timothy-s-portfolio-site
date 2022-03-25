import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./Layout.scss";
import { Helmet } from "react-helmet";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Helmet>
        <link charSet="utf-8" />
        <title>Timothy Ayegbede's Website</title>
        <meta
          rel="apple-touch-icon"
          sizes="180x180"
          href="../favicon/apple-touch-icon.png"
        />
        <meta
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../favicon/favicon-32x32.png"
        />
        <meta
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../favicon/favicon-16x16.png"
        />
        <meta rel="manifest" href="../favicon/site.webmanifest" />
      </Helmet>
      <Navbar />
      <div className="layout-content">{children}</div>
      <div className="layout-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
