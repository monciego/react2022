import React from "react";
import CityCard from "./CityCard";
import { citiesData } from "../cities";

const Cities = () => {
  return (
    <section>
      <h3 className="section-title">Experiences in other cities</h3>
      <div className="city-cards">
        {citiesData.map((city) => {
          return <CityCard key={city.id} {...city} />;
        })}
      </div>
    </section>
  );
};

export default Cities;
