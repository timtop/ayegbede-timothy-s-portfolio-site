import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../Layout/Layout";
import "./universalblog.scss";
import { Link } from "gatsby";

const ItsDelivered = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Its-Delivered - Timothy Ayegbede's Website</title>
      </Helmet>
      <div style={{ marginTop: "90px" }} className="container">
        <Link to="../../../Projects">
          {" "}
          <div className="back bd-text-w">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="back-icon"
                viewBox="0 0 512 512"
              >
                <title>Arrow Back Circle</title>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="32"
                  d="M249.38 336L170 256l79.38-80M181.03 256H342"
                />
                <path
                  d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                  fill="none"
                  stroke="currentColor"
                  stroke-miterlimit="10"
                  stroke-width="32"
                />
              </svg>
            </span>
            <p className="back-text">Back to projects</p>
          </div>
        </Link>

        <div className="designblog-header-container">
          <p className="hd-text-w margin-top-20">It's Delivered</p>

          <div className="bd-text-w margin-top-20">
            Role: <span className="design-badge">UI Designer</span>
          </div>
        </div>

        <StaticImage
          src="../../../images/thumbnails/Its Delivered Thumbnail2.jpg"
          alt="ItsDelivered Banner"
          placeholder="blurred"
          className="designblog-img margin-top-20"
          quality="100"
          width="1800"
          height="1200"
        />

        <article className=" designblog-article-container">
          <p className="article-bd-header-text">About It's Delivered</p>
          <div className="article-bd-web-text">
            It's Delivered is a logistics comapany that needed to manage it's
            riders on a digital platform
          </div>

          <p className="article-bd-header-text margin-top-20">What I did </p>
          <div className="article-bd-web-text">
            As the designer on the project, I worked to simplify the "enter text
            of what yout did",into an intuitive processes and clean interfaces
            with easy to understand data visualizations.
          </div>
        </article>

        <p className="article-bd-header-text margin-top-20">
          Screens from the design{" "}
        </p>

        <StaticImage
          src="../../../images/blog images/itsdelivered/Browser - Login 1.png"
          alt="Design"
          placeholder="blurred"
          className="designblog-img margin-top-20"
          quality="100"
          width="1382"
          height="944"
        />

        <StaticImage
          src="../../../images/blog images/itsdelivered/Browser - Login 2.png"
          alt="Design"
          placeholder="blurred"
          className="designblog-img margin-top-20"
          quality="100"
          width="1382"
          height="1398"
        />

        <StaticImage
          src="../../../images/blog images/itsdelivered/Browser - Login 3.png"
          alt="Design"
          placeholder="blurred"
          className="designblog-img margin-top-20"
          quality="100"
          width="1382"
          height="1892"
        />

        <StaticImage
          src="../../../images/blog images/itsdelivered/Browser - Login 4.png"
          alt="Design"
          placeholder="blurred"
          className="designblog-img margin-top-20"
          quality="100"
          width="1382"
          height="1026"
        />

        <StaticImage
          src="../../../images/blog images/itsdelivered/Browser - Login 5.png"
          alt="Design"
          placeholder="blurred"
          className="designblog-img margin-top-20"
          quality="100"
          width="1382"
          height="1087"
        />

        <StaticImage
          src="../../../images/blog images/itsdelivered/Browser - Login 6.png"
          alt="Design"
          placeholder="blurred"
          className="designblog-img margin-top-20"
          quality="100"
          width="1382"
          height="1026"
        />
      </div>
    </Layout>
  );
};

export default ItsDelivered;
