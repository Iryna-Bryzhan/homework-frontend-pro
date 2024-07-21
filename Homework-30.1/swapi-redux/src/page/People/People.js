import React from "react";
import PersonCard from "../../components/cards/PersonCard";
import DataPage from "../DataPage/DataPage";

const People = () => {
  return (
    <DataPage
      category="people"
      CardComponent={PersonCard}
      title="People"
    />
  );
};

export default People;