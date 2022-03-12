import React from "react";
import "../Style/contact.scss";
import confettii from "../images/confetii-2.png";
// import Navbar from "../Components/Navbar/Navbar";
import ContactForm from "../Components/Form/ContactForm";
// import Footer from "../Components/Footer/Footer";
import Layout from "../Layout/Layout";

const Contact = () => {
  return (
    <Layout>
      {/* <Navbar /> */}
      <div className="contact-header ">
        <div className="container">
          <div className="contact-header_wrap">
            <div className="contact-header_head hd-text-w-smaller">
              Would be super excited to hear from you{" "}
              <img
                className="contact-header_head-img"
                src={confettii}
                alt="Confetti"
              />
            </div>
            <p className="contact-header_description bd-text-w">
              I’m delited in bringing well designed interfaces to life to
              position your business, <br /> brand or application at the
              forefront, I co-exist in the world of design and web development
            </p>
          </div>
        </div>
      </div>

      <div className="contact-form ">
        <div className="container">
          <div className="contact-form_wrap">
            <div className="contact-form_head hd-text-w-smaller-small">
              Got a question, a proposal, job offer or just want to say hi?{" "}
              <br /> Go ahead and fill the form!
            </div>
            <div className="contact-form_description bd-text-w">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </Layout>
  );
};

export default Contact;
