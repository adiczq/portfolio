import React from "react";
import "./WorkCard.css";

const WorksCard = ({ imageUrl, websiteUrl, title, description }) => {
  return (
    <div className="WorkCardCont">
      <div className="WorkCardDesc">
        <h3 className="WorkCardTitle">{title}</h3>{" "}
        <span className="WorkCardText">{description}</span>{" "}
      </div>
      <div className="WorkCard">
        <a href={websiteUrl} target="_blank" rel="noreferrer">
          <img src={imageUrl} alt="portfolio" className="WorkCardImg" />
        </a>
      </div>
    </div>
  );
};
export default WorksCard;
