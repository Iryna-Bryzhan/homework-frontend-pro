import React from "react";
import { Route, Routes } from "react-router-dom";
import People from "../page/People/People";
import Planets from "../page/Planets/Planets";
import Species from "../page/Species/Species";
import Films from "../page/Films/Films";
import Vehicles from "../page/Vehicles/Vehicles";
import Starships from "../page/Starships/Starships";
import MainPage from "../page/mainPage/MainPage";
import NotFound from "../page/NotFound/NotFound";

const RoutesConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/people" element={<People />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/films" element={<Films />} />
      <Route path="/species" element={<Species />} />
      <Route path="/vehicles" element={<Vehicles />} />
      <Route path="/starships" element={<Starships />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default RoutesConfig;
