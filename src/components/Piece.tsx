import React from "react";

import "./Piece.css";
import Hexagon from "./Hexagon";
import { offsetToCube } from "@utils/HexUtils";
import { Point } from "@datatypes/Piece";

interface Props {
  row: number;
  col: number;
  handleClick: ({ x, y }: Point) => void;
}

const Piece = ({ row, col, handleClick }: Props) => {
  const [q, r, s] = offsetToCube(row, col);
  return (
    <Hexagon
      q={q}
      r={r}
      s={s}
      className="piece"
      handleClick={() => handleClick({ x: row, y: col })}
    />
  );
};

export default Piece;
