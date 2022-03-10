import React from "react";

import { Link } from "gatsby";

import "./LineButton.scss";

const LineButton = ({ content, route }) => {
  return (
    <div className="line-button">
      <Link to={route}>
        <button className="line-button-btn line-btn-text-w line-btn-text-m ">
          {content}
        </button>
      </Link>
    </div>
  );
};

export default LineButton;
