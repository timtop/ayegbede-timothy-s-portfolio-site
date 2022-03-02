import React from "react";
import "../Style/contact.scss";
import confettii from "../images/confetii-2.png";
import Navbar from "../Components/Navbar/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact-header ">
        <div className="container">
          <div className="contact-header_wrap">
            <div className="contact-header_head hd-text-w-smaller">
              Would be super excited to hear from you{" "}
              <img className="contact-header_head-img" src={confettii} />
            </div>
            <p className="contact-header_description bd-text-w">
              I’m delited in bringing well designed interfaces to life to
              position your business, <br /> brand or application at the
              forefront, I co-exist in the world of design and web development
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
