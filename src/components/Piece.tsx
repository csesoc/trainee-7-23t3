import React from "react";

import "./Piece.css";
import Hexagon from "./Hexagon";
import { offsetToCube } from "@utils/HexUtils";
import { Point } from "@datatypes/Piece";

interface Props {
  row: number;
  col: number;
  handleClick?: ({ row, col }: Point) => void;
}

const Piece = ({ row, col, handleClick }: Props) => {
  const [q, r, s] = offsetToCube(row, col);
  // console.log(q, r, s);
  return (
    <Hexagon
      q={q}
      r={r}
      s={s}
      className="piece"
      handleClick={handleClick ? () => handleClick({ row, col }) : undefined}
    />
  );
};

export default Piece;
