import React from "react";
import GridBoard from "./GridBoard";

function PlayPage() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        // alignItems: "center",
      }}
    >
      <div
        style={{ height: "100vh", backgroundColor: "black", width: "20vw" }}
      />
      <GridBoard />
      <div
        style={{ height: "100vh", backgroundColor: "black", width: "20vw" }}
      />
    </div>
  );
}

export default PlayPage;
