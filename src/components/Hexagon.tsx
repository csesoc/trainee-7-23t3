import * as React from "react";
import { Hex } from "@models/Hex";
import { HexUtils } from "@utils/HexUtils";
import { useLayoutContext } from "./Layout";
import { Point } from "@models/Point";

import "./Hexagon.css";

interface Props {
  q: number;
  r: number;
  s: number;
}

/**
 * Renders a Hexagon cell at the given rqs-based coordinates.
 */
function Hexagon({ q, r, s }: Props) {
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

  // for backwards comapatbility
  const state = { hex };
  const draggable = { draggable: true } as any;
  return (
    <g
      className={"hexagon-group"}
      transform={`translate(${pixel.x}, ${pixel.y})`}
    >
      <g className="hexagon">
        <polygon points={points} />
      </g>
    </g>
  );
}

export default Hexagon;
