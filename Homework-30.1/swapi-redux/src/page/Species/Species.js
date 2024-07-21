import React from "react";
import SpeciesCard from "../../components/cards/SpeciesCard";
import DataPage from "../DataPage/DataPage";

const Species = () => {
  return (
    <DataPage
      category="species"
      CardComponent={SpeciesCard}
      title="Species"
    />
  );
};

export default Species;