import React from "react";
import VehiclesCard from "../../components/cards/VehiclesCard";
import DataPage from "../DataPage/DataPage";

const Vehicles = () => {
  return (
    <DataPage
      category="vehicles"
      CardComponent={VehiclesCard}
      title="Vehicles"
    />
  );
};

export default Vehicles;