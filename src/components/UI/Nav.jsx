import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>My Website</h2>
      </div>
      <ul className={`nav-links ${menuActive ? "active" : ""}`}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
    </nav>
  );
};

export default Nav;
