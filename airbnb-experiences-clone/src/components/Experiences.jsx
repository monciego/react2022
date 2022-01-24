import React from "react";
import ExperienceCard from "./ExperienceCard";

const Experiences = () => {
  return (
    <section>
      <h3 className="section-title">Airbnb Adventures around the world</h3>
      <p className="section-description">
        Multi-day trips led by local experts—activities, meals, and stays
        included.
      </p>
      <div className="experience-cards">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </section>
  );
};

export default Experiences;
