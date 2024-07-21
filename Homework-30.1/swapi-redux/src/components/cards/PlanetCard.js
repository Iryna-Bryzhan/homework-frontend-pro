import React from "react";
import "./cards.css";

const PlanetCard = ({ item  }) => {
  return (
    <div className="card card-planet">
      <div className="card-body">
        <div className="card-title">{item.name}</div>
        <p><strong>Rotation period:</strong> {item.rotation_period}</p>
        <p><strong>Orbital period:</strong> {item.orbital_period}</p>
        <p><strong>Diameterr:</strong> {item.diameter}</p>
        <p><strong>Climate:</strong> {item.climate}</p>
        <p><strong>Gravity:</strong> {item.gravity}</p>
        <p><strong>Terrain:</strong> {item.terrain}</p>
        <p><strong>Surface water:</strong> {item.surface_water}</p>
        <p><strong>Population:</strong> {item.population}</p>
      </div>
    </div>
  );
};

export default PlanetCard;