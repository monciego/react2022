import React from "react";
import "./navbar.css";
import logo from "../../assets/troll-face.png";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>Meme Generator</h2>
      </div>
      <h3>React Course - Project 3</h3>
    </nav>
  );
};

export default Navbar;
