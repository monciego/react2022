import React from "react";
import Form from "./components/Form/Form";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Form />
      </div>
    </>
  );
}

export default App;
