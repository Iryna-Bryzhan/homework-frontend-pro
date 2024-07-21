import React from "react";
import "./cards.css";

const PersonCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{item.name}</div>
        <p><strong>Height:</strong> {item.height}</p>
        <p><strong>Mass:</strong> {item.mass}</p>
        <p><strong>Hair color:</strong> {item.hair_color}</p>
        <p><strong>Skin color:</strong> {item.skin_color}</p>
        <p><strong>Eye color:</strong> {item.eye_color}</p>
        <p><strong>Birth year:</strong> {item.birth_year}</p>
        <p><strong>Gender:</strong> {item.gender}</p>
      </div>
    </div>
  );
};

export default PersonCard;