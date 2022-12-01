import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Epg from "./Epg";
import Program from "./Program";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Epg></Epg>}></Route>
        <Route path="/:id" element={<Program></Program>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
