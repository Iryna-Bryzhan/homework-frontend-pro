import React from "react";
import StarshipsCard from "../../components/cards/StarshipsCard";
import DataPage from "../DataPage/DataPage";

const Starships = () => {
  return (
    <DataPage
      category="starships"
      CardComponent={StarshipsCard}
      title="Starships"
    />
  );
};

export default Starships;