import React from "react";

const ExperienceCard = () => {
  return (
    <div className="experience-card">
      <figure>
        <img
          src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="northern lights"
        />
        <img
          src="https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="northern-lights"
          className="transition-img"
        />
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
            fill-rule="evenodd"
          ></path>
        </svg>
        <span>
          5.0 (1) · <span className="location">Myrland, Norway</span>
        </span>
      </div>
      <h4 className="experience-title">Northern Lights Adventure</h4>
      <p className="price">
        <span>From Price:₱153,466</span> / person
      </p>
    </div>
  );
};

export default ExperienceCard;
