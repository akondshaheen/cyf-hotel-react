import React from "react";
import "./TouristInfo.css";

const TouristCard = props => {
  return (
    <div className="property-card">
      <a href="#">
        <div className={props.cardClass} />
      </a>
      <div className="property-description">
        <h5> {props.city} </h5>
        <p>{props.message}</p>
      </div>
      <a className="property-button" href={props.linkUrl} target="_blank">
        Book
      </a>{" "}
    </div>
  );
};

export default TouristCard;
