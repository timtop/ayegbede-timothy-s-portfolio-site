import React from "react";
import "./Cards.scss";
import Img from "../Img/Img";

const Cards = ({ image, title, role }) => {
  return (
    <div className="card">
      <Img src={image} alt={title} width={600} height={400} />
      {/* <img src={image} alt="Moov Thumbnail" className="card-img" /> */}
      <p className="card-title hd-text-w-smaller-small">{title}</p>
      <p className="card-role bd-text-w">{role}</p>
    </div>
  );
};

export default Cards;
