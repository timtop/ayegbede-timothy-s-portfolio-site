import React from "react";

// import { Link } from "gatsby";

import "./LineButton.scss";

const LineButton = ({ content }) => {
  return (
    <div className="line-button clearmargin">
      {/* <Link to="/Projects"> */}
      <button className="line-button-btn line-btn-text-w line-btn-text-m ">
        {content}
      </button>
      {/* </Link> */}
    </div>
  );
};

export default LineButton;
