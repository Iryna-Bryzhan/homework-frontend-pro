import React from "react";
import PlanetCard from "../../components/cards/PlanetCard";
import DataPage from "../DataPage/DataPage";

const Planets = () => {
  return (
    <DataPage
      category="planets"
      CardComponent={PlanetCard}
      title="Planets"
    />
  );
};

export default Planets;
