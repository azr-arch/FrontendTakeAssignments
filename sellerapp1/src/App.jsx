import React from "react";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={"/page/1"} />} />
        <Route path="/page/:page" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
