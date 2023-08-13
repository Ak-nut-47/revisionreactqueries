import React from "react";
import { Route, Routes } from "react-router-dom";
import Players from "../Components/Players";
import Games from "../Components/Games";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Players />}></Route>
      <Route path="/games" element={<Games />}></Route>
    </Routes>
  );
};

export default AllRoutes;
