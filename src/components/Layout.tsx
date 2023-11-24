import * as React from "react";
import { Orientation } from "@models/Orientation";
import { Point } from "@models/Point";

export type Size = { x: number; y: number };

export type LayoutDimension = {
  size: Size;
  orientation: Orientation;
  origin: Size;
  spacing: number;
};
export type LayoutContextProps = {
  layout: LayoutDimension;
  points: string;
};

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

const defaultSize = new Point(10, 10);
const defaultOrigin = new Point(0, 0);
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

/**
 * Calculates the points for a hexagon given the size, angle, and center
 * @param circumradius Radius of the Hexagon
 * @param angle Angle offset for the hexagon in radians
 * @param center Central point for the heaxagon
 * @returns Array of 6 points
 */

function calculateCoordinates(
  circumradius: number,
  angle: number = 0,
  center: Point = new Point(0, 0),
) {
  const corners: Point[] = [];

  for (let i = 0; i < 6; i++) {
    const x = circumradius * Math.cos((2 * Math.PI * i) / 6 + angle);
    const y = circumradius * Math.sin((2 * Math.PI * i) / 6 + angle);
    const point = new Point(center.x + x, center.y + y);
    corners.push(point);
  }

  return corners;
}

interface Props {
  children:
    | React.ReactElement
    | React.ReactElement[]
    | JSX.Element
    | JSX.Element[];
  className?: string;
  origin?: any;
  /* defines scale */
  size?: Size;
  space?: number;
  spacing?: number;
}

/**
 * Provides LayoutContext for all descendands and renders child elements inside a <g> (Group) element
 */
export function Layout({
  size = defaultSize,
  spacing = defaultSpacing,
  origin = defaultOrigin,
  children,
  className,
}: Props) {
  const orientation = LAYOUT_FLAT;
  const angle = 0;
  const cornerCoords = calculateCoordinates(size.x, angle);
  const points = cornerCoords.map((point) => `${point.x},${point.y}`).join(" ");
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
      <g className={className}>{children}</g>
    </Context.Provider>
  );
}

export default Layout;
