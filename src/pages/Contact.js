import React from "react";
import { Helmet } from "react-helmet";

import "../Style/contact.scss";
import confettii from "../images/confetii-2.png";
import ContactForm from "../Components/Form/ContactForm";
import Layout from "../Layout/Layout";
import Seo from "../Components/Seo/Seo";

const Contact = () => {
  return (
    <Layout>
      <Seo title="Contact" />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact - Timothy Ayegbede's Website</title>
      </Helmet>
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
    </Layout>
  );
};

export default Contact;
