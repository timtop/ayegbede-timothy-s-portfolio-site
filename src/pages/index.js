import React from "react";

//Css import
import "../Style/indexpage.scss";

//Component youtu
import Navbar from "../Components/Navbar/Navbar";

//image import
import activelogo from "../images/Active.svg";
import PrimaryButton from "../Components/Primary Button/PrimaryButton";
import profilePicture from "../images/profile-picture-1.png";

const Index = () => {
  return (
    <div className="index-page">
      <Navbar />
      <div className="container clearmargin hero">
        <div className="hero-text">
          <p className="hd-text-w">
            Hi, <br /> I'm Ayegbede Timothy
          </p>
          <p className="bd-text-w margin-top-16 ">
            I’m a Product Designer and Frontend
            <br /> Developer based in Lagos Nigeria.
          </p>
          <div className="margin-top-16 bd-text-success-w green-active">
            <img src={activelogo} alt="Green Active" className="activelogo" />

            <span className="padding-left-16 green-active-text">
              Currently available for freelance projects
            </span>
          </div>
          <PrimaryButton margin="margin-top-16" />
        </div>
        <img src={profilePicture} alt="My face" className="hero-picture" />
      </div>
    </div>
  );
};

export default Index;
