import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../Layout/Layout";
import "./universalblog.scss";
import { Link } from "gatsby";

const DreamPulze = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>DreamPulze - Timothy Ayegbede's Website</title>
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
          <p className="hd-text-w margin-top-20">DreamPulze</p>

          <div className="bd-text-w margin-top-20">
            Role: <span className="design-badge">Product Designer</span>
          </div>
        </div>

        <StaticImage
          src="../../../images/thumbnails/DreamPulze Thumbnail2.jpg"
          alt="DreamPulze Banner"
          placeholder="blurred"
          className="designblog-img margin-top-20"
          quality="100"
          width="1800"
          height="1200"
        />

        <article className=" designblog-article-container">
          <p className="article-bd-header-text">About DreamPulze</p>
          <div className="article-bd-web-text">
            DreamPulze is the world's first Technology Talent Curation and
            Incubation Cloud platform, focused on curating technology talent for
            today's opportunities.
          </div>

          <p className="article-bd-header-text margin-top-20">What I did </p>
          <div className="article-bd-web-text">
            I was a co-designer on this project, I worked with another amazing
            designer who had laid the foundation of the project, I worked on the
            Talent Hub section where companies and hiring managers come to hire
            talent
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default DreamPulze;
