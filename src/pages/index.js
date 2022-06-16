import React from "react";
import { Helmet } from "react-helmet";
//Css import
import "../Style/indexpage.scss";
import HomeTab from "../Components/HomeTab/TabHome";

//Component youtu
// import Navbar from "../Components/Navbar/Navbar";
import Img from "../Components/Img/Img";
import Layout from "../Layout/Layout";

//image import
import activelogo from "../images/Active.svg";
import PrimaryButton from "../Components/Primary Button/PrimaryButton";
import profilePicture2 from "../images/profile-picture-1.png";
import profilePicture1 from "../images/profile-picture-2.png";
import LineButton from "../Components/LineButton/LineButton";
// import Layout from "../Layout/Layout";
import Seo from "../Components/Seo/Seo.js";
// import webmani from "../favicon/site.webmanifest";

import appleTouchIcon from "../favicon/apple-touch-icon.png";
import thirtytwofav from "../favicon/favicon-32x32.png";
import sixteenfav from "../favicon/favicon-16x16.png";
import previewImage from "../images/Website Preview.jpg";

const Index = () => {
  const number = Math.floor(Math.random() * 2) + 1;
  const heroPicture = number === 1 ? profilePicture1 : profilePicture2;

  return (
    <Layout>
      <Seo title="Homepage" />
      <Helmet>
        <link charSet="utf-8" />
        <title>Timothy Ayegbede's Website</title>
        <link rel="apple-touch-icon" sizes="180x180" href={appleTouchIcon} />
        <link rel="icon" type="image/png" sizes="32x32" href={thirtytwofav} />
        <link rel="icon" type="image/png" sizes="16x16" href={sixteenfav} />
        <meta property="og:image" content={previewImage} />
        {/* <link rel="manifest" href={webmani} /> */}
      </Helmet>
      {/* <Navbar /> */}
      <div className="index-page">
        <div className=" container hero ">
          <div className="hero-text flexchild">
            <p className="hd-text-w hd-text-m">
              Hi, <br /> I'm Timothy Ayegbede
            </p>
            <p className="bd-text-w bd-text-m margin-top-16 ">
              I'm a Product Designer and Frontend
              <br className="mobile-break" /> Developer based in Lagos Nigeria.
            </p>
            {/* <div className="margin-top-16 bd-text-success-w bd-text-success-m green-active">
              <img src={activelogo} alt="Green Active" className="activelogo" />

              <span className="padding-left-16 green-active-text">
                I'm currently available to work
              </span>
            </div> */}
            <PrimaryButton
              value="Contact me"
              margin="margin-top-16"
              icon={true}
              route="/Contact"
            />
          </div>

          <div className="flexchild hero-image">
            {/* <img src={heroPicture} alt="My face" className="hero-picture" /> */}
            <div>
              <Img
                src={heroPicture}
                alt="My Potrait"
                width={1080}
                height={1080}
              />
            </div>

            <div className="hero-socials">
              <a
                href="https://linkedin.com/in/timothy-ayegbede-1b32b216a/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M27.6006 0H2.56339C1.19531 0 0 0.984373 0 2.33638V27.4292C0 28.7886 1.19531 30 2.56339 30H27.5933C28.9687 30 30 28.7805 30 27.4292V2.33638C30.008 0.984373 28.9687 0 27.6006 0ZM9.29932 25.0064H5.00155V11.6437H9.29932V25.0064ZM7.2991 9.61204H7.26829C5.89285 9.61204 5.00222 8.58816 5.00222 7.30646C5.00222 6.00133 5.91629 5.00156 7.32253 5.00156C8.72878 5.00156 9.58927 5.99396 9.62007 7.30646C9.6194 8.58816 8.72878 9.61204 7.2991 9.61204ZM25.0064 25.0064H20.7087V17.7C20.7087 15.9495 20.0832 14.7536 18.5283 14.7536C17.3404 14.7536 16.6373 15.5571 16.3245 16.3399C16.2073 16.6212 16.1759 17.0042 16.1759 17.3953V25.0064H11.8781V11.6437H16.1759V13.5033C16.8013 12.6127 17.7783 11.331 20.0518 11.331C22.873 11.331 25.0071 13.1906 25.0071 17.1998L25.0064 25.0064Z" />
                </svg>
              </a>

              <a
                href="https://twitter.com/just_timothy_"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="30"
                  height="24"
                  viewBox="0 0 30 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M30 2.84376C28.8747 3.33273 27.684 3.65487 26.4656 3.80001C27.746 3.05025 28.709 1.85911 29.1737 0.45001C27.9632 1.15788 26.641 1.65455 25.2638 1.91876C24.6838 1.31097 23.9863 0.827451 23.2137 0.497601C22.4411 0.167752 21.6095 -0.00154208 20.7694 1.0584e-05C17.3681 1.0584e-05 14.6156 2.71251 14.6156 6.05626C14.6132 6.52136 14.6665 6.98508 14.7744 7.43751C12.3354 7.32317 9.9472 6.701 7.76249 5.6108C5.57777 4.52059 3.64468 2.98636 2.08687 1.10626C1.54036 2.02759 1.25133 3.07879 1.25 4.15001C1.25 6.25001 2.34562 8.10626 4 9.19376C3.01983 9.1705 2.05974 8.91107 1.20125 8.43751V8.51251C1.20125 11.45 3.32625 13.8938 6.13875 14.45C5.60986 14.591 5.06486 14.6624 4.5175 14.6625C4.12911 14.6632 3.74161 14.6255 3.36062 14.55C4.1425 16.9563 6.41813 18.7063 9.11375 18.7563C6.92336 20.4443 4.23414 21.3567 1.46875 21.35C0.977886 21.3493 0.487478 21.3201 0 21.2625C2.81324 23.0589 6.0834 24.0091 9.42125 24C20.7563 24 26.9487 14.7688 26.9487 6.76251C26.9487 6.50001 26.9419 6.23751 26.9294 5.98126C28.1313 5.1263 29.1711 4.06383 30 2.84376Z" />
                </svg>
              </a>

              <a
                href="https://www.github.com/timtop"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M15 0C6.71652 0 0 6.89063 0 15.3817C0 22.1786 4.29911 27.9375 10.2589 29.9732C10.3425 29.9914 10.4278 30.0004 10.5134 30C11.0692 30 11.2835 29.5915 11.2835 29.2366C11.2835 28.8683 11.2701 27.904 11.2634 26.6183C10.7672 26.7346 10.2596 26.7953 9.75 26.7991C6.86384 26.7991 6.20759 24.5558 6.20759 24.5558C5.52455 22.7812 4.54018 22.3058 4.54018 22.3058C3.23438 21.3884 4.53348 21.3616 4.63393 21.3616H4.64062C6.14732 21.4955 6.9375 22.9554 6.9375 22.9554C7.6875 24.2679 8.69196 24.6362 9.58928 24.6362C10.1826 24.6243 10.7668 24.4874 11.3036 24.2344C11.4375 23.2433 11.8259 22.567 12.2545 22.1786C8.92634 21.7902 5.42411 20.471 5.42411 14.5781C5.42411 12.8973 6.0067 11.5246 6.96429 10.4531C6.81027 10.0647 6.29464 8.49777 7.11161 6.3817C7.22119 6.35547 7.33382 6.34421 7.44643 6.34821C7.98884 6.34821 9.21429 6.5558 11.2366 7.96205C13.6939 7.27454 16.2927 7.27454 18.75 7.96205C20.7723 6.5558 21.9978 6.34821 22.5402 6.34821C22.6528 6.34421 22.7654 6.35547 22.875 6.3817C23.692 8.49777 23.1763 10.0647 23.0223 10.4531C23.9799 11.5312 24.5625 12.904 24.5625 14.5781C24.5625 20.4844 21.0536 21.7835 17.7121 22.1652C18.2478 22.6406 18.7299 23.5781 18.7299 25.0112C18.7299 27.067 18.7098 28.7277 18.7098 29.2299C18.7098 29.5915 18.9174 30 19.4732 30C19.5632 30.0004 19.653 29.9914 19.7411 29.9732C25.7076 27.9375 30 22.1719 30 15.3817C30 6.89063 23.2835 0 15 0Z" />
                </svg>
              </a>

              <a
                href="https://www.instagram.com/just_timothy_/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M21.2498 2.49978C22.906 2.50472 24.4929 3.16484 25.664 4.33595C26.8352 5.50707 27.4953 7.09402 27.5002 8.75022V21.2498C27.4953 22.906 26.8352 24.4929 25.664 25.664C24.4929 26.8352 22.906 27.4953 21.2498 27.5002H8.75022C7.09402 27.4953 5.50707 26.8352 4.33595 25.664C3.16484 24.4929 2.50472 22.906 2.49978 21.2498V8.75022C2.50472 7.09402 3.16484 5.50707 4.33595 4.33595C5.50707 3.16484 7.09402 2.50472 8.75022 2.49978H21.2498ZM21.2498 0H8.75022C3.9375 0 0 3.9375 0 8.75022V21.2498C0 26.0625 3.9375 30 8.75022 30H21.2498C26.0625 30 30 26.0625 30 21.2498V8.75022C30 3.9375 26.0625 0 21.2498 0Z" />
                  <path d="M23.1248 8.75024C22.7539 8.75024 22.3914 8.64028 22.0831 8.43425C21.7747 8.22822 21.5344 7.93539 21.3925 7.59278C21.2506 7.25016 21.2135 6.87317 21.2858 6.50945C21.3582 6.14574 21.5367 5.81164 21.799 5.54942C22.0612 5.2872 22.3953 5.10862 22.759 5.03627C23.1227 4.96393 23.4997 5.00106 23.8423 5.14297C24.1849 5.28489 24.4778 5.52521 24.6838 5.83355C24.8898 6.14189 24.9998 6.5044 24.9998 6.87524C25.0003 7.12162 24.9522 7.36568 24.8581 7.5934C24.7641 7.82113 24.626 8.02804 24.4518 8.20225C24.2776 8.37647 24.0707 8.51456 23.8429 8.6086C23.6152 8.70264 23.3712 8.75077 23.1248 8.75024ZM15 9.9998C15.989 9.9998 16.9557 10.2931 17.778 10.8425C18.6003 11.3919 19.2412 12.1728 19.6196 13.0865C19.9981 14.0002 20.0971 15.0056 19.9041 15.9755C19.7112 16.9455 19.235 17.8364 18.5357 18.5357C17.8364 19.235 16.9454 19.7112 15.9755 19.9042C15.0055 20.0971 14.0002 19.9981 13.0865 19.6196C12.1728 19.2412 11.3919 18.6003 10.8425 17.778C10.293 16.9557 9.99978 15.989 9.99978 15C10.0012 13.6743 10.5285 12.4033 11.4659 11.4659C12.4033 10.5285 13.6743 10.0012 15 9.9998ZM15 7.50002C13.5166 7.50002 12.0666 7.93989 10.8332 8.764C9.59986 9.58811 8.63856 10.7594 8.07091 12.1299C7.50325 13.5003 7.35472 15.0083 7.64411 16.4632C7.9335 17.9181 8.64781 19.2544 9.6967 20.3033C10.7456 21.3522 12.082 22.0665 13.5368 22.3559C14.9917 22.6453 16.4997 22.4968 17.8701 21.9291C19.2406 21.3615 20.4119 20.4002 21.236 19.1668C22.0601 17.9334 22.5 16.4834 22.5 15C22.5 13.0109 21.7098 11.1032 20.3033 9.69672C18.8968 8.2902 16.9891 7.50002 15 7.50002Z" />
                </svg>
              </a>

              <a
                href="https://medium.com/@timtop99"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0V30H30V0H0ZM24.923 7.10789L23.3138 8.65066C23.2458 8.70256 23.1933 8.77199 23.1617 8.85149C23.1302 8.931 23.1209 9.01759 23.1349 9.10197V20.4362C23.1059 20.6079 23.175 20.7822 23.3138 20.8875L24.8849 22.4303V22.7691H16.9822V22.4303L18.6099 20.85C18.7697 20.6901 18.7697 20.6428 18.7697 20.3987V11.2375L14.2441 22.7316H13.6322L8.36316 11.2375V18.9414C8.31908 19.2651 8.42697 19.5914 8.65461 19.8257L10.7717 22.3934V22.7322H4.76908V22.3934L6.88618 19.8257C7.1125 19.5908 7.21382 19.2625 7.15921 18.9414V10.0329C7.18421 9.78553 7.09013 9.54079 6.90526 9.37434L5.02368 7.10724V6.76842H10.8664L15.3829 16.673L19.3533 6.76842H24.923V7.10789Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container checkout">
        <LineButton content="Check out my work" route="/Projects" />
      </div>
      <HomeTab />
    </Layout>
  );
};

export default Index;
