import React from "react";
import { Helmet } from "react-helmet";
import Tabs from "../../Components/TabComponents/Tabs";
import Layout from "../../Layout/Layout";

const Projects = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Projects - Timothy Ayegbede's Website</title>
      </Helmet>
      <div>
        <Tabs />
      </div>
    </Layout>
  );
};

export default Projects;
