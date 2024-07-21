import React from "react";
import FilmCard from "../../components/cards/FilmCard";
import DataPage from "../DataPage/DataPage";

const Films = () => {
  return (
    <DataPage
      category="films"
      CardComponent={FilmCard}
      title="Films"
    />
  );
};

export default Films;
