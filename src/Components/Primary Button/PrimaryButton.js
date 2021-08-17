import React from "react";

import "./PrimaryButton.scss";
import Rocket from "../../images/Rocket.svg";

const PrimaryButton = ({ margin }) => {
  return (
    <div>
      <button className={`primary-btn bd-text-w-btn ${margin}`}>
        Contact me{"  "}
        <img src={Rocket} alt="Rocket Emoji" className="primary-btn-img" />
      </button>
    </div>
  );
};

export default PrimaryButton;
