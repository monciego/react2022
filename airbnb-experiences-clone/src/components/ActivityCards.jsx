import React from "react";

const ActivityCards = () => {
  return (
    <div className="activity-card">
      <figure className="activity-card-image">
        <img
          src="https://a0.muscache.com/4ea/air/v2/pictures/4dddaa64-0c83-499c-8b30-2b58efe60f4d.jpg?t=r:w750-h500-sfit,e:fjpg-c80"
          alt="cooking"
        />
        <span className="activity-card-title">Cooking</span>
      </figure>
      <span className="number-experience">3000+ experiences</span>
      <h3 className="activity-title">Cooking</h3>
      <p className="activity-description">
        Make and eat meals with locals who treat you like family
      </p>
    </div>
  );
};

export default ActivityCards;
