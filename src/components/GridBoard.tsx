import React, { useState } from "react";
import GridHex from "./GridHex";
import Layout from "./Layout";
import Piece from "@components/Piece";
import { Point } from "@datatypes/Piece";

const gridHexCoordinates: Point[] = [];

for (let row = 0; row < 6; row++) {
  for (let col = 0; col < 16; col++) {
    gridHexCoordinates.push({ row, col });
  }
}
const samplePieceCoordinates: Point[] = [
  { row: 1, col: 0 },
  { row: 5, col: 8 },
  { row: 3, col: 4 },
  { row: 3, col: 14 },
  { row: 3, col: 5 },
  { row: 4, col: 8 },
];

const GridBoard = () => {
  const [pieceCoordinates, setPieceCoordinates] = useState(
    samplePieceCoordinates,
  );

  const [clickedPiece, setClickedPiece] = useState<Point | null>(null);

  const handlePieceClick = ({ row, col }: Point) => {
    setClickedPiece({ row, col });
  };

  const handldGridHexClick = ({ row, col }: Point) => {
    if (clickedPiece === null) return;
    const newPieceCoordinates = [...pieceCoordinates];
    const clickedPieceIndex = newPieceCoordinates.findIndex(
      (piece) =>
        piece.row === clickedPiece.row && piece.col === clickedPiece.col,
    );
    if (clickedPieceIndex !== -1) {
      newPieceCoordinates.splice(clickedPieceIndex, 1);
    }
    console.log(newPieceCoordinates);
    newPieceCoordinates.push({ row, col });
    console.log(newPieceCoordinates);

    setPieceCoordinates(newPieceCoordinates);
    setClickedPiece(null);
  };

  return (
    <svg
      className="grid"
      width={2300}
      height={"80%"}
      viewBox={"-30 -30 300 300"}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Layout
        size={{ row: 10, col: 10 }}
        spacing={1.1}
        origin={{ row: 0, col: 0 }}
      >
        {gridHexCoordinates.map((coordinate) => (
          <GridHex
            row={coordinate.row}
            col={coordinate.col}
            handleClick={handldGridHexClick}
            hasClickedPiece={
              clickedPiece !== null &&
              coordinate.row === clickedPiece.row &&
              coordinate.col === clickedPiece.col
            }
          />
        ))}
      </Layout>
      <Layout
        size={{ row: 8, col: 8 }}
        spacing={1.375}
        origin={{ row: 0, col: 0 }}
      >
        {pieceCoordinates.map((coordinate) => (
          <Piece
            row={coordinate.row}
            col={coordinate.col}
            handleClick={handlePieceClick}
          />
        ))}
      </Layout>
    </svg>
  );
};

export default GridBoard;
