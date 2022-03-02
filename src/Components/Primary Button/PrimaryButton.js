import React from "react";

import "./PrimaryButton.scss";
import Rocket from "../../images/Rocket.svg";

const PrimaryButton = ({ margin, value, icon }) => {
  return (
    <div>
      <button className={`primary-btn bd-text-w-btn ${margin}`}>
        {value}
        <img
          src={Rocket}
          alt="Rocket Emoji"
          className="primary-btn-img"
          style={{ display: icon === true ? "flex" : "none" }}
        />
      </button>
    </div>
  );
};

export default PrimaryButton;
