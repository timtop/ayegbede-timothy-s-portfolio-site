import React from "react";
import "./Cards.scss";
import Img from "../Img/Img";
import { Link } from "gatsby";

const Cards = ({
  image,
  title,
  role,
  route,
  pillDisplay,
  descDisplay,
  description,
  link,
}) => {
  return (
    <div className="card">
      <a href={link} target="_blank" rel="noreferrer">
        <Link to={route}>
          <Img src={image} alt={title} width={600} height={400} />
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
              {description}
            </p>
          </div>
        </Link>
      </a>
    </div>
  );
};

export default Cards;
