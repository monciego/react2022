import React from "react";

const CityCard = ({ img, cityName }) => {
  return (
    <div className="city-card">
      <figure>
        <img src={img} alt={cityName} />
      </figure>
      <span>{cityName}</span>
    </div>
  );
};

export default CityCard;
