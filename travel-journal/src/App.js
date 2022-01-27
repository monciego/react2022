import React from "react";
import Navbar from "./components/Navbar/Navbar";
import TravelCard from "./components/Travel/TravelCard";
import { travelData } from "./data";

function App() {
  return (
    <>
      <Navbar />
      <main className="travel-cards">
        {travelData.map((travelCard) => {
          return <TravelCard key={travelCard.id} {...travelCard} />;
        })}
      </main>
    </>
  );
}

export default App;
