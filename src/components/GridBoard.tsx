import React, { useState } from "react";
import GridHex from "./GridHex";
import Layout from "./Layout";
import Piece from "@components/Piece";
import { Point } from "@datatypes/Piece";

const gridHexCoordinates: Point[] = [];

for (let row = 0; row < 16; row++) {
  for (let col = 0; col < 6; col++) {
    gridHexCoordinates.push({ row, col });
  }
}
const samplePieceCoordinates: Point[] = [
  { row: 0, col: 1 },
  { row: 8, col: 5 },
  { row: 4, col: 3 },
  { row: 14, col: 3 },
  { row: 5, col: 3 },
  { row: 8, col: 4 },
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
    newPieceCoordinates.splice(
      newPieceCoordinates.indexOf({
        row: clickedPiece.row,
        col: clickedPiece.col,
      }),
      1,
    );
    console.log(newPieceCoordinates);
    newPieceCoordinates.push({ row, col });
    console.log(newPieceCoordinates);

    // console.log([x, y]);
    // console.log(newPieceCoordinates);
    // console.log(clickedPiece);
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
