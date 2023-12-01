import React from "react";

import "./Piece.css";
import Hexagon from "./Hexagon";
import { offsetToCube } from "@utils/HexUtils";

interface Props {
  row: number;
  col: number;
  handleUpdate: (piecesCoordinate: [number, number][]) => void;
}

const Piece = ({ row, col }: Props) => {
  const [q, r, s] = offsetToCube(row, col);

  return <Hexagon q={q} r={r} s={s} className="piece" />;
};

export default Piece;
