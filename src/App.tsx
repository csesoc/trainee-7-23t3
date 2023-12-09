import React from "react";
import GridBoard from "./components/GridBoard";

function App() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GridBoard />
    </div>
  );
}

export default App;
