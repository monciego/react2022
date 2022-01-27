import React from "react";
import "./travel.css";

const TravelCard = ({
  img,
  title,
  location,
  googleMapUrl,
  startDate,
  endDate,
  description,
}) => {
  return (
    <div className="travel-card">
      <div className="travel-card-image">
        <img src={img} alt={title} />
      </div>
      <div className="travel-card-details">
        <div className="flex-align">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height={16}
            width={16}
            viewBox="0 0 20 20"
            fill="#F55A5A"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <span className="location">{location}</span>
          <a className="google-map-url" href={googleMapUrl}>
            View on Google Maps
          </a>
        </div>
        <h1 className="title">{title}</h1>
        <h3 className="date">
          {startDate} - {endDate}
        </h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default TravelCard;
