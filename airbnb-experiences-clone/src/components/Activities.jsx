import React from "react";
import ActivityCards from "./ActivityCards";

const Activities = () => {
  return (
    <section className="activities">
      <h3 className="activities-subtitle">AIRBNB EXPERIENCES</h3>
      <h1 className="activities-title">
        One-of-a-kind activities <br /> hosted by experts
      </h1>
      <p className="covid-restrictions">
        Review COVID-19 travel restrictions before you book.{" "}
        <span className="learn-more">Learn more</span>
      </p>
      <div className="activitity-cards">
        <ActivityCards />
        <ActivityCards />
        <ActivityCards />
      </div>
    </section>
  );
};

export default Activities;
