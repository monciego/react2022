import React from "react";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <img src={logo} alt="logo" className="logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
