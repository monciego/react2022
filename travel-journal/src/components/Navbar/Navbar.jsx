import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="#fff"
        >
          <path d="M3 18h18v2H3zm18.509-9.473a1.61 1.61 0 0 0-2.036-1.019L15 9 7 6 5 7l6 4-4 2-4-2-1 1 4 4 14.547-5.455a1.611 1.611 0 0 0 .962-2.018z"></path>
        </svg>
        Travel Journal
      </div>
    </nav>
  );
};

export default Navbar;
