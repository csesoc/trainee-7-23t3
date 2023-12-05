import React from "react";
import Hexagon from "./Hexagon";
import { offsetToCube } from "@utils/HexUtils";
import { Point } from "@datatypes/Piece";

interface Props {
  row: number;
  col: number;
  handleClick: ({ row, col }: Point) => void;
  clickedPiece: Point | null;
}

const GridHex = ({ row, col, handleClick, clickedPiece }: Props) => {
  const [q, r, s] = offsetToCube(row, col);

  return (
    <Hexagon
      q={q}
      r={r}
      s={s}
      className={`hexagon ${
        clickedPiece?.row === row && clickedPiece?.col === col
          ? "highlight"
          : ""
      } ${clickedPiece ? "focused" : ""}`}
      handleClick={() => handleClick({ row, col })}
    />
  );
};

export default GridHex;
