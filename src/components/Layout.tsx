import React from "react";
import { Orientation } from "@models/Orientation";
import { Point } from "@datatypes/Piece";

export interface LayoutDimension {
  size: Point;
  orientation: Orientation;
  origin: Point;
  spacing: number;
}

interface LayoutContextProps {
  layout: LayoutDimension;
  points: string;
}

const LAYOUT_FLAT = new Orientation(
  3.0 / 2.0,
  0.0,
  Math.sqrt(3.0) / 2.0,
  Math.sqrt(3.0),
  2.0 / 3.0,
  0.0,
  -1.0 / 3.0,
  Math.sqrt(3.0) / 3.0,
  0.0,
);

const defaultSize = { row: 10, col: 10 };
const defaultOrigin = { row: 0, col: 0 };
const defaultSpacing = 1.0;

const Context = React.createContext<LayoutContextProps>({
  layout: {
    size: defaultSize,
    orientation: LAYOUT_FLAT,
    origin: defaultOrigin,
    spacing: defaultSpacing,
  },
  points: "",
});

export function useLayoutContext() {
  const ctx = React.useContext(Context);
  return ctx;
}

function calculateCoordinates(
  circumradius: number,
  angle: number = 0,
  center: Point = { row: 0, col: 0 },
) {
  const corners: Point[] = [];

  for (let i = 0; i < 6; i++) {
    const x = circumradius * Math.cos((2 * Math.PI * i) / 6 + angle);
    const y = circumradius * Math.sin((2 * Math.PI * i) / 6 + angle);
    const point = { row: center.row + x, col: center.col + y };
    corners.push(point);
  }

  return corners;
}

interface Props {
  children: React.ReactElement | React.ReactElement[];
  origin?: any;
  /* defines scale */
  size?: Point;
  spacing?: number;
}

function Layout({
  size = defaultSize,
  spacing = defaultSpacing,
  origin = defaultOrigin,
  children,
}: Props) {
  const orientation = LAYOUT_FLAT;
  const cornerCoords = calculateCoordinates(size.row);
  const points = cornerCoords
    .map((point) => `${point.row},${point.col}`)
    .join(" ");
  const childLayout = {
    orientation,
    size,
    origin,
    spacing,
  };

  return (
    <Context.Provider
      value={{
        layout: childLayout,
        points,
      }}
    >
      <g>{children}</g>
    </Context.Provider>
  );
}

export default Layout;
