import React from "react";

const ActivityCards = ({ img, cardTitle, title, experience, description }) => {
  return (
    <div className="activity-card">
      <figure className="activity-card-image">
        <img src={img} alt="cooking" />
        <span className="activity-card-title">{cardTitle}</span>
      </figure>
      <span className="number-experience">{experience}</span>
      <h3 className="activity-title">{title}</h3>
      <p className="activity-description">{description}</p>
    </div>
  );
};

export default ActivityCards;
