import React from "react";
import { Routes, Route } from "react-router-dom";
import GridBoard from "./components/GridBoard";
import MainPage from "./components/MainPage";
import "./App.css";
import Rules from "./components/Rules";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/play" element={<GridBoard />} />
    </Routes>
  );
}

export default App;
