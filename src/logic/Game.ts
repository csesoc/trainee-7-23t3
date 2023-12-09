import { Point, PIECE_COLOR, PIECE_TYPE, Piece } from "@datatypes/Piece";
import { isEqual } from "lodash";

const generatePieceID = (
  pieces: Piece[],
  pieceType: PIECE_TYPE,
  pieceColor: PIECE_COLOR,
): string => {
  let ID = "";
  ID += pieceColor;
  ID += pieceType;
  ID += String(
    pieces.filter((piece) => piece.pieceType === pieceType).length + 1,
  );

  return ID;
};

export const addPiece = (
  pieces: Piece[],
  point: Point,
  pieceType: PIECE_TYPE,
  pieceColor: PIECE_COLOR,
): boolean => {
  if (pieces.some((piece) => isEqual(piece.point, point))) {
    return false;
  }

  pieces.push({
    pieceID: generatePieceID(pieces, pieceType, pieceColor),
    point,
    pieceType,
    pieceColor,
  });

  return true;
};

export const movePiece = (
  pieces: Piece[],
  pieceID: string,
  point: Point,
): boolean => {
  if (pieces.some((piece) => isEqual(piece.point, point))) {
    return false;
  }

  const piece = pieces.find((piece) => piece.pieceID === pieceID);

  if (!piece || isEqual(piece.point, point)) {
    return false;
  }

  piece.point = point;
  return true;
};
