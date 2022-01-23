import React from "react";
import CityCard from "./CityCard";

const Cities = () => {
  return (
    <section>
      <h3 className="section-title">Experiences in other cities</h3>
      <div className="city-cards">
        <CityCard />
        <CityCard />
        <CityCard />
      </div>
    </section>
  );
};

export default Cities;
