import * as React from "react";
import { Link } from "gatsby";
import Navbar from "../Components/Navbar/Navbar";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      The About page <Link to="/">Home</Link>
    </div>
  );
};

export default HomePage;
