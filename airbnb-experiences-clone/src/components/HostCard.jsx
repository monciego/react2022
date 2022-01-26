import React from "react";

const HostCard = ({ img, title, location }) => {
  return (
    <div className="host-card">
      <figure>
        <img src={img} alt={title} />
      </figure>
      <h3 className="host-title">{title}</h3>
      <p className="host-location">{location}</p>
    </div>
  );
};

export default HostCard;
