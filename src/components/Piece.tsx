import React from "react";
import { useDrag } from "react-dnd";

interface Props {
  row: number;
  col: number;
}

const Piece = ({ row, col }: Props) => {
  const [, drag] = useDrag({
    type: "HEXAGON",
    item: { row, col },
  });

  return <div className="piece" ref={drag}></div>;
};

export default Piece;
