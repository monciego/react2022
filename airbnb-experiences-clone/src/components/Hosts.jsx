import React from "react";
import HostCard from "./HostCard";
import { hostsData } from "../hosts";

const Hosts = () => {
  return (
    <section>
      <h3 className="section-title">Meet hosts around the world</h3>
      <div className="host-cards">
        {hostsData.map((host) => {
          return <HostCard key={host.id} {...host} />;
        })}
      </div>
    </section>
  );
};

export default Hosts;
