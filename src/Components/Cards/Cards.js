import React from "react";
import "./Cards.scss";

const Cards = ({ image, title, role }) => {
  return (
    <div className="card">
      <img src={image} alt="Moov Thumbnail" className="card-img" />
      <p className="card-title hd-text-w-smaller-small">{title}</p>
      <p className="card-role bd-text-w">{role}</p>
    </div>
  );
};

export default Cards;
