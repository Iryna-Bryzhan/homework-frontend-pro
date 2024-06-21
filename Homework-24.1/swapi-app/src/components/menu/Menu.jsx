import React from "react";
import "./Menu.css";

function Menu() {
  return (
    <div className="menu">
      <ul className="menu-list">
        <li className="menu-item"><a href="#people">people</a></li>
        <li className="menu-item"><a href="/">planets</a></li>
        <li className="menu-item"><a href="/">films</a></li>
        <li className="menu-item"><a href="/">species</a></li>
        <li className="menu-item"><a href="/">vehicles</a></li>
        <li className="menu-item"><a href="/">starships</a></li>
      </ul>
    </div>
  );
}
export default Menu;
