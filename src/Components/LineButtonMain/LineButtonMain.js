import React from "react";
import "./LineButtonMain.scss";

const LineButtonMain = ({ content, propClick }) => {
  function click() {
    propClick();
  }
  return (
    <div className="line-button-main">
      <button
        onClick={click}
        className="line-button-main-btn line-btn-text-w line-btn-text-m "
      >
        {content}
      </button>
    </div>
  );
};

export default LineButtonMain;
