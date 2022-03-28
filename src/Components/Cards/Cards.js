import React from "react";
import "./Cards.scss";
import Img from "../Img/Img";
import { Link } from "gatsby";

const Cards = ({ image, title, role, route, pillDisplay, descDisplay }) => {
  return (
    <div className="card">
      <Link to={route}>
        <Img src={image} alt={title} width={600} height={400} />
      </Link>
      {/* <img src={image} alt="Moov Thumbnail" className="card-img" /> */}
      <p className="card-title hd-text-w-smaller-small">{title}</p>
      <div className="card-role">
        {" "}
        <span
          style={{ display: pillDisplay ? "inline" : "none" }}
          className="card-role bd-text-w design-badge"
        >
          {role}
        </span>
        <p
          style={{ display: descDisplay ? "inline" : "none" }}
          className="bd-text-w"
        >
          Description of the card where applicable
        </p>
      </div>
    </div>
  );
};

export default Cards;
