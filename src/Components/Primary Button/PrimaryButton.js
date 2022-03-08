import React from "react";

import "./PrimaryButton.scss";
import Rocket from "../../images/Rocket.svg";
import { Link } from "gatsby";

const PrimaryButton = ({ margin, value, icon, width, route }) => {
  return (
    <div>
      <Link to={route}>
        <button className={`primary-btn bd-text-w-btn ${margin}`}>
          {value}
          <img
            src={Rocket}
            alt="Rocket Emoji"
            className="primary-btn-img"
            style={{
              display: icon === true ? "flex" : "none",
              width: { width },
            }}
          />
        </button>
      </Link>
    </div>
  );
};

export default PrimaryButton;
