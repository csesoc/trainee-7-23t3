import React from "react";
import { Routes, Route } from "react-router-dom";
import GridBoard from "./components/GridBoard";
import MainPage from "./components/MainPage";
import "./App.css";
import Rules from "./components/Rules";

function App() {
  return (
    // <div
    //   style={{
    //     position: "relative",
    //     width: "100vw",
    //     height: "100vh",
    //     display: "flex",
    //     flexDirection: "column",
    //     justifyContent: "center",
    //     alignItems: "center",
    //   }}
    // >
    //   <GridBoard />
    // </div>

    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/rules" element={<Rules />} />
    </Routes>
  );
}

export default App;
