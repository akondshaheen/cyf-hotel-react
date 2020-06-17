import React from "react";
import "./TouristInfo.css";
import TouristCard from "./TouristInfoCard";

const TouristInfoCards = () => {
  return (
    <div className="center">
      <TouristCard
        cardClass="property-image image1"
        city="Glasgow"
        linkUrl="peoplemakeglasgow.com"
        message="The Official Tourist Board for Greater London with
        information about what to see and do."
      />

      <TouristCard
        cardClass="property-image image2"
        city="Manchester"
        linkUrl="https://www.visitmanchester.com"
        message="The Official Tourist Board for Manchester & Greater Manchester with
        information about what to see and do."
      />

      <TouristCard
        cardClass="property-image image3"
        city="London"
        linkUrl="https://www.visitlondon.com"
        message="London. One of the world's most visited cities.Are you planning to
        visit London soon? Find free or cheap things to do on your London
        trip"
      />
    </div>
  );
};

export default TouristInfoCards;
