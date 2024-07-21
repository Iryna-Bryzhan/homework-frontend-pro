import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li className="menu-item"><Link to="/people">People</Link></li>
        <li className="menu-item"><Link to="/planets">Planets</Link></li>
        <li className="menu-item"><Link to="/films">Films</Link></li>
        <li className="menu-item"><Link to="/species">Species</Link></li>
        <li className="menu-item"><Link to="/vehicles">Vehicles</Link></li>
        <li className="menu-item"><Link to="/starships">Starships</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;