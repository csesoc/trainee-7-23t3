import React from "react";
import Hexagon from "./Hexagon";
import { offsetToCube } from "@utils/HexUtils";
import { Point } from "@datatypes/Piece";

interface Props {
  row: number;
  col: number;
  handleClick: ({ row, col }: Point) => void;
  hasClickedPiece: boolean;
}

const GridHex = ({ row, col, handleClick, hasClickedPiece }: Props) => {
  const [q, r, s] = offsetToCube(row, col);

  return (
    <Hexagon
      q={q}
      r={r}
      s={s}
      className={`hexagon ${hasClickedPiece ? "highlight" : ""}`}
      handleClick={() => handleClick({ row, col })}
    />
  );
};

export default GridHex;
