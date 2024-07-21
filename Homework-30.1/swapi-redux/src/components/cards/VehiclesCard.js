import React from "react";
import "./cards.css";

const VehiclesCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">{item.name}</div>
        <p><strong>Model:</strong> {item.model}</p>
        <p><strong>Manufacturer:</strong> {item.manufacturer}</p>
        <p><strong>Cost in credits:</strong> {item.cost_in_credits}</p>
        <p><strong>Length:</strong> {item.length}</p>
        <p><strong>Max atmosphering speed:</strong> {item.max_atmosphering_speed}</p>
        <p><strong>Crew:</strong> {item.crew}</p>
        <p><strong>Passengers:</strong> {item.passengers}</p>
        <p><strong>Consumables:</strong> {item.consumables}</p>
        <p><strong>Vehicle class:</strong> {item.vehicle_class}</p>
      </div>
    </div>
  );
};

export default VehiclesCard;