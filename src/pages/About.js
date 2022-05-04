import * as React from "react";
import { Helmet } from "react-helmet";
import "../Style/about.scss";
// import design from "../images/Design-Image.svg";
// import dev from "../images/Developer-Image.svg";
import PrimaryButton from "../Components/Primary Button/PrimaryButton";
import Layout from "../Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";
import Seo from "../Components/Seo/Seo";
import resume from "../Timothy Ayegbede's Resume.pdf";

const HomePage = () => {
  return (
    <Layout>
      <Seo title="About" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>About - Timothy Ayegbede's Website</title>
      </Helmet>
      <div className="about-header ">
        <div className="container">
          <div className="about-header_wrap">
            <div className="about-header_head hd-text-w-smaller">
              A bit more about me
            </div>
            <p className="about-header_description bd-text-w">
              I’m delighted in bringing well-designed interfaces to life to
              position your business, brand or <br /> application at the
              forefront, I co-exist in the world of design and web development.
            </p>
          </div>
        </div>
      </div>

      <div className="design container">
        {/* <img src={design} alt="Design" className="design-img" /> */}
        <StaticImage
          src="../images/Design-Image.svg"
          alt="Design"
          placeholder="blurred"
          className="design-img"
          quality="100"
        />
        <div className="design-description">
          <div className="hd-text-w-smaller">Designer</div>
          <p className="design-description_text bd-text-w">
            I'm a Product Designer with a strong background in mobile and web
            design, <br /> I create intuitive, simple and consistent experience
            from conception to implementation.
          </p>
        </div>
      </div>

      <div className="dev container">
        <div className="dev-description">
          <div className="hd-text-w-smaller">Front-End Developer</div>
          <p className="dev-description_text bd-text-w">
            I implement designs with popular frameworks and technologies to
            almost pixel perfection.
          </p>
        </div>
        {/* <img src={dev} alt="Developer" className="dev-img" /> */}
        <StaticImage
          src="../images/Developer-Image.svg"
          alt="Design"
          placeholder="blurred"
          className="design-img"
          quality="100"
        />
      </div>

      <div className="resume ">
        <div className="container">
          <div className="resume-wrap">
            <div className="resume-section_header  hd-text-w-smaller">
              Over the years...
            </div>

            <p className="bd-text-w resume-section_headerdes">
              I've created user interfaces and experiences for businesses that
              solve problems and meet their needs.
            </p>

            {/* <PrimaryButton
              value="View Resume"
              margin="margin-top-16"
              icon={true}
            /> */}

            <a href={resume}>
              {" "}
              <PrimaryButton
                value="View Resume"
                margin="margin-top-16"
                icon={true}
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
