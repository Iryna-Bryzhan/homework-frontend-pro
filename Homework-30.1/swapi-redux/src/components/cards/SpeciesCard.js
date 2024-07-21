import React from "react";
import "./cards.css";

const SpeciesCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{item.name}</div>
        <p><strong>Classification:</strong> {item.classification}</p>
        <p><strong>Designation:</strong> {item.designation}</p>
        <p><strong>Average height:</strong> {item.average_height}</p>
        <p><strong>Skin color:</strong> {item.skin_color}</p>
        <p><strong>Eye color:</strong> {item.eye_color}</p>
        <p><strong>Average lifespan:</strong> {item.average_lifespan}</p>
        <p><strong>Homeworld:</strong> <a href={item.homeworld}>Переглянути</a></p>
        <p><strong>Language:</strong> {item.language}</p>
      </div>
    </div>
  );
};

export default SpeciesCard;