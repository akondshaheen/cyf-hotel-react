import React from "react";
import TouristInfo from "./TouristInfo.css";

const TouristInfoCards = () => {
  return (
    /*Card 1*/
    <div className="center">
      <div className="property-card">
        <a href="#">
          <div className="property-image image1">
            <div className="property-image-title">
              {/* Optional <h5>Card Title</h5> If you want it, turn on the CSS also. */}
            </div>
          </div>
        </a>
        <div className="property-description">
          <h5> Glasgow </h5>
          <p>
            Discover the city of Glasgow, with holiday ideas, accommodation...
          </p>
        </div>
        <a
          className="property-button"
          href="https://www.peoplemakeglasgow.com"
          target="_blank"
        >
          Book
        </a>{" "}
      </div>

      <div className="property-card">
        <a href="#">
          <div className="property-image image2">
            <div className="property-image-title">
              {/* Optional <h5>Card Title</h5> If you want it, turn on the CSS also. */}
            </div>
          </div>
        </a>
        <div className="property-description">
          <h5> Manchester </h5>
          <p>
            The Official Tourist Board for Manchester & Greater Manchester with
            information about what to see and do.
          </p>
        </div>
        <a
          className="property-button"
          href="https://www.visitmanchester.com"
          target="_blank"
        >
          Book
        </a>{" "}
      </div>
      <div className="property-card">
        <a href="#">
          <div className="property-image image3">
            <div className="property-image-title">
              {/* Optional <h5>Card Title</h5> If you want it, turn on the CSS also. */}
            </div>
          </div>
        </a>
        <div className="property-description">
          <h5> London </h5>
          <p>
            London. One of the world's most visited cities.Are you planning to
            visit London soon? Find free or cheap things to do on your London
            trip
          </p>
        </div>

        <a
          className="property-button"
          href="https://www.visitlondon.com"
          target="_blank"
        >
          Book
        </a>
      </div>
    </div>
  );
};

export default TouristInfoCards;
