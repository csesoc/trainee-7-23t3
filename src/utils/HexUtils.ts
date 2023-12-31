import { LayoutDimension } from "@components/Layout";
import { Hex, HexCoordinates } from "@models/Hex";
import { Point } from "@datatypes/Piece";

/** A class which contains static methods which are useful for working with Hexes */
export class HexUtils {
  static round(hex: Hex) {
    let rq = Math.round(hex.q);
    let rr = Math.round(hex.r);
    let rs = Math.round(hex.s);

    const qDiff = Math.abs(rq - hex.q);
    const rDiff = Math.abs(rr - hex.r);
    const sDiff = Math.abs(rs - hex.s);

    if (qDiff > rDiff && qDiff > sDiff) rq = -rr - rs;
    else if (rDiff > sDiff) rr = -rq - rs;
    else rs = -rq - rr;

    return new Hex(rq, rr, rs);
  }

  static hexToPixel(hex: Hex, layout: LayoutDimension): Point {
    const s = layout.spacing;
    const M = layout.orientation;
    let x = (M.f0 * hex.q + M.f1 * hex.r) * layout.size.row;
    let y = (M.f2 * hex.q + M.f3 * hex.r) * layout.size.col;
    // console.log(x, y);
    // Apply spacing
    x = x * s;
    y = y * s;
    return { row: x + layout.origin.row, col: y + layout.origin.col };
  }

  static lerp(a: number, b: number, t: number): number {
    return a + (b - a) * t;
  }

  static hexLerp(a: HexCoordinates, b: HexCoordinates, t: number): Hex {
    return new Hex(
      HexUtils.lerp(a.q, b.q, t),
      HexUtils.lerp(a.r, b.r, t),
      HexUtils.lerp(a.s, b.s, t),
    );
  }

  static getID(hex: HexCoordinates): string {
    return `${hex.q},${hex.r},${hex.s}`;
  }
}

export const offsetToCube = (
  row: number,
  col: number,
): [number, number, number] => {
  const q = col;
  const r = row - (col - (col & 1)) / 2;
  return [q, r, -q - r];
};

export default HexUtils;
