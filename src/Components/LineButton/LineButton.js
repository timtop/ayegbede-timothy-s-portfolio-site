import React from "react";

import { Link } from "gatsby";

import "./LineButton.scss";

const LineButton = () => {
  return (
    <div className="line-button clearmargin">
      <Link to="/Projects">
        <button className="line-button-btn line-btn-text-w line-btn-text-m ">
          Check out my work
        </button>
      </Link>
    </div>
  );
};

export default LineButton;
