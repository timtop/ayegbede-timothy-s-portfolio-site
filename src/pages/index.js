import * as React from "react";
import { Link } from "gatsby";

import Navbar from "../Components/Navbar/Navbar";

const Index = () => {
  return (
    <div>
      <Navbar />
      The index page <Link to="/About">About</Link>
    </div>
  );
};

export default Index;
