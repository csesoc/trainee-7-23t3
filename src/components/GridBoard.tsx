import React from "react";
import Piece from "./Piece";
import Layout from "./Layout";

const piecesCoordinate: [number, number][] = [];

for (let row = 0; row < 6; row++) {
  for (let col = 0; col < 16; col++) {
    piecesCoordinate.push([row, col]);
  }
}

const GridBoard = () => {
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
        {piecesCoordinate.map((coordinate) => (
          <Piece row={coordinate[0]} col={coordinate[1]} />
        ))}
      </Layout>
    </svg>
  );
};

export default GridBoard;
