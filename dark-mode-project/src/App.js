import React, { useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const darkModeHandler = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className="container">
      <Navbar darkMode={darkMode} toggleDarkMode={darkModeHandler} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
