import React, { useState } from "react";
import GridHex from "./GridHex";
import Layout from "./Layout";
import Piece from "@components/Piece";

const gridHexCoordinates: [number, number][] = [];

for (let row = 0; row < 6; row++) {
  for (let col = 0; col < 16; col++) {
    gridHexCoordinates.push([row, col]);
  }
}
const samplePieceCoordinates = [
  [1, 0],
  [5, 8],
  [3, 4],
  [3, 14],
  [3, 5],
  [4, 8],
];

const GridBoard = () => {
  const [pieceCoordinates, setPieceCoordinates] = useState(
    samplePieceCoordinates,
  );

  return (
    <svg
      className="grid"
      width={2300}
      height={"80%"}
      viewBox={"-30 -30 300 300"}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Layout size={{ x: 10, y: 10 }} spacing={1.1} origin={{ x: 0, y: 0 }}>
        {gridHexCoordinates.map((coordinate) => (
          <GridHex row={coordinate[0]} col={coordinate[1]} />
        ))}
      </Layout>
      <Layout size={{ x: 8, y: 8 }} spacing={1.375} origin={{ x: 0, y: 0 }}>
        {pieceCoordinates.map((coordinate) => (
          <Piece
            row={coordinate[0]}
            col={coordinate[1]}
            handleUpdate={setPieceCoordinates}
          />
        ))}
      </Layout>
    </svg>
  );
};

export default GridBoard;
