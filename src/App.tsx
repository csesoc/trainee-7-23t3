import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import "./App.css";
import Rules from "./components/Rules";
import PlayPage from "@components/PlayPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/rules" element={<Rules />} />
      <Route path="/play" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
