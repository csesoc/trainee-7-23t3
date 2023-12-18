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
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GridBoard />
    </div>
  );
}

export default PlayPage;
