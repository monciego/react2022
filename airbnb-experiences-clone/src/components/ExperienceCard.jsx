import React from "react";

const ExperienceCard = ({
  img,
  transitionImg,
  rating,
  ratingNo,
  location,
  title,
  price,
}) => {
  return (
    <div className="experience-card">
      <figure>
        <img src={img} alt={title} />
        <img src={transitionImg} alt={title} className="transition-img" />
      </figure>
      <div className="experience-stats">
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          height={12}
          width={12}
          aria-hidden="true"
          role="presentation"
          focusable="false"
          fill="#ff385c"
        >
          <path
            d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z"
            fillRule="evenodd"
          ></path>
        </svg>
        <span>
          {rating} ({ratingNo}) · <span className="location">{location}</span>
        </span>
      </div>
      <h4 className="experience-title">{title}</h4>
      <p className="price">
        <span>From Price:₱{price}</span> / person
      </p>
    </div>
  );
};

export default ExperienceCard;
