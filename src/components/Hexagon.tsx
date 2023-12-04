import React from "react";
import { Hex } from "@models/Hex";
import { HexUtils } from "@utils/HexUtils";
import { useLayoutContext } from "./Layout";

import "./Hexagon.css";

interface Props {
  q: number;
  r: number;
  s: number;
  className?: string;
  style?: any;
  handleClick?: () => void;
}

function Hexagon({ q, r, s, className, style, handleClick }: Props) {
  // destructure props into their values
  const { layout, points } = useLayoutContext();

  const { hex, pixel } = React.useMemo(() => {
    const hex = new Hex(q, r, s);
    const pixel = HexUtils.hexToPixel(hex, layout);
    return {
      hex,
      pixel,
    };
  }, [q, r, s, layout]);

  return (
    <g
      className={className}
      transform={`translate(${pixel.x}, ${pixel.y})`}
      style={style}
      onClick={handleClick}
    >
      <polygon points={points} />
    </g>
  );
}

export default Hexagon;
