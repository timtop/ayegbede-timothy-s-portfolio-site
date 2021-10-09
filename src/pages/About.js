import * as React from "react";
import "../Style/about.scss";
import Navbar from "../Components/Navbar/Navbar";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <>
        <div className="about">
          <div className="about-head hd-text-w-smaller">
            A bit more about me
          </div>
          <div className="container clearmargin">
            I’m delited in bringing well designed interfaces to life to position
            your business, brand or application at the forefront, I co-exist in
            the world of design and web development
          </div>
        </div>
      </>
    </>
  );
};

export default HomePage;
