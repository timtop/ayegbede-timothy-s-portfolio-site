import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import LineButton from "../Components/LineButton/LineButton";
import "../Style/blog.scss";

const Blog = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog - Timothy Ayegbede's Website</title>
      </Helmet>
      <div>
        <div className="blogg-bg">
          <div className="container blog">
            {/* <img src={success} alt="Message sent" className="msg-confirm-img" /> */}
            <StaticImage
              src="../images/wink.png"
              alt="Design"
              placeholder="blurred"
              className="blog-img"
              quality="100"
            />
            <p className="blog-text bd-text-w">
              Hey! Thank you for visiting here, check back later for content on
            </p>

            <ul className="blog-tags bd-text-w">
              <li className="design-badge">Design</li>
              <li className="dev-badge">Dev</li>
              <li className="faith-badge">Faith</li>
              <li className="lifestyle-badge">Lifestyle</li>
            </ul>

            <LineButton content="Homepage" route="/" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
