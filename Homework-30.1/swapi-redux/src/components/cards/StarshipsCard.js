import React from "react";
import "./cards.css";

const StarshipsCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{item.name}</div>
        <p><strong>Model:</strong> {item.model}</p>
        <p><strong>Manufacturer:</strong> {item.manufacturer}</p>
        <p><strong>Cost in credits:</strong> {item.cost_in_credits}</p>
        <p><strong>Max atmosphering speed:</strong> {item.max_atmosphering_speed}</p>
        <p><strong>Consumables:</strong> {item.consumables}</p>
        <p><strong>Hyperdrive rating:</strong> {item.hyperdrive_rating}</p>
        <p><strong>Starship class:</strong> {item.starship_class}</p>
      </div>
    </div>
  );
};

export default StarshipsCard;