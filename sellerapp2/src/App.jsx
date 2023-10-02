import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PropertyDetails from "./components/PropertyDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
