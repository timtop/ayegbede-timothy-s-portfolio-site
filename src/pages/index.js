import React from "react";

//Css import
import "../Style/indexpage.scss";

//Component import
import Navbar from "../Components/Navbar/Navbar";

//image import
import activelogo from "../images/Active.svg";
import PrimaryButton from "../Components/Primary Button/PrimaryButton";

const Index = () => {
  return (
    <div>
      <Navbar />
      <div className="container clearmargin">
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
    </div>
  );
};

export default Index;
