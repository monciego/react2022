import React from "react";
import HostCard from "./HostCard";

const Hosts = () => {
  return (
    <section>
      <h3 className="section-title">Meet hosts around the world</h3>
      <div className="host-cards">
        <HostCard />
        <HostCard />
      </div>
    </section>
  );
};

export default Hosts;
