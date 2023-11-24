import React from "react";
import { useDrag } from "react-dnd";
import Hexagon from "./Hexagon";
import { offsetToCube } from "@utils/HexUtils";

interface Props {
  row: number;
  col: number;
}

const Piece = ({ row, col }: Props) => {
  const [, drag] = useDrag({
    type: "HEXAGON",
    item: { row, col },
  });

  const [q, r, s] = offsetToCube(row, col);

  return <Hexagon q={q} r={r} s={s} />;
};

export default Piece;
