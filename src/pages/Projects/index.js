import React from "react";
import { Helmet } from "react-helmet";
import Tabs from "../../Components/TabComponents/Tabs";
import Layout from "../../Layout/Layout";
import Seo from "../../Components/Seo/Seo";

const Projects = () => {
  return (
    <Layout>
      <Seo title="404: Not found" />
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
