import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import LineButton from "../Components/LineButton/LineButton";
import "../Style/404.scss";

// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 - Timothy Ayegbede's Website</title>
      </Helmet>
      <div className="container err">
        {/* <img src={success} alt="Message sent" className="msg-confirm-img" /> */}
        <StaticImage
          src="../images/wink.png"
          alt="Design"
          placeholder="blurred"
          className="err-img"
          quality="100"
        />
        <p className="err-text bd-text-w">
          Hey! You just visited a link that doesn't exist, click the button
          below to go home{" "}
        </p>
        <LineButton content="Home" route="/" />
      </div>{" "}
    </Layout>
  );
};

export default NotFoundPage;
