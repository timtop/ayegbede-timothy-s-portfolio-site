import * as React from "react";
import { Helmet } from "react-helmet";
import "../Style/about.scss";
// import design from "../images/Design-Image.svg";
// import dev from "../images/Developer-Image.svg";
import PrimaryButton from "../Components/Primary Button/PrimaryButton";
import Layout from "../Layout/Layout";
import { StaticImage } from "gatsby-plugin-image";

const HomePage = () => {
  return (
    <Layout>
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
              I’m delited in bringing well designed interfaces to life to
              position your business, <br /> brand or application at the
              forefront, I co-exist in the world of design and web development
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
            make deliberate design decisions and to translate any given
            user-experience journey into a smooth and intuitive interaction.
          </p>
        </div>
      </div>

      <div className="dev container">
        <div className="dev-description">
          <div className="hd-text-w-smaller">Front-End Developer</div>
          <p className="dev-description_text bd-text-w">
            make deliberate design decisions and to translate any given <br />
            user-experience journey into a smooth and intuitive interaction.
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
              I am delited in bringing well designed interfaces to life to
              position your business or brand at the forefront
            </p>

            <PrimaryButton
              value="View Resume"
              margin="margin-top-16"
              icon={true}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
