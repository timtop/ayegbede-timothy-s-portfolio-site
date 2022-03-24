import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../../Layout/Layout";

const Moov = () => {
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Splufix - Timothy Ayegbede's Website</title>
      </Helmet>
      <p style={{ marginTop: "90px" }}>This is the Splufix Page</p>
    </Layout>
  );
};

export default Moov;
