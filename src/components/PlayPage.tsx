import React, { useState } from "react";
import GridBoard from "./GridBoard";
import Supply from "./Supply";

function PlayPage() {
  const [isPlacingPiece, setIsPlacingPiece] = useState(false);

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
      <Supply handleClick={() => setIsPlacingPiece(!isPlacingPiece)} />
      <GridBoard isPlacingPiece={isPlacingPiece} />
      <Supply handleClick={() => setIsPlacingPiece(!isPlacingPiece)} />
    </div>
  );
}

export default PlayPage;
