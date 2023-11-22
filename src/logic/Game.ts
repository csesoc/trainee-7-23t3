import { Coordinate, PIECE_COLOR, PIECE_TYPE, Piece } from "@datatypes/Piece";
import { isEqual } from "lodash";

const pieces: Piece[] = []

const generatePieceID = (pieceType: PIECE_TYPE, pieceColor: PIECE_COLOR): string => {
  let ID = "";
  ID += pieceColor;
  ID += pieceType;
  ID += String((pieces.filter(piece => piece.pieceType === pieceType).length + 1));

  return ID;
}

export const getPieces = (): Piece[] => {
  return pieces;
}

export const addPiece = (coordinate: Coordinate, pieceType: PIECE_TYPE, pieceColor: PIECE_COLOR): boolean => {
  if (pieces.some((piece) => (isEqual(piece.coordinate, coordinate)))) {
    return false;
  }

  pieces.push({
    pieceID: generatePieceID(pieceType, pieceColor),
    coordinate,
    pieceType,
    pieceColor
  });

  return true;
}

export const movePiece = (pieceID: string, coordinate: Coordinate): boolean => {
  if (pieces.some((piece) => (isEqual(piece.coordinate, coordinate)))) {
    return false;
  }

  const piece = pieces.find(piece => piece.pieceID === pieceID);

  if (!piece || isEqual(piece.coordinate, coordinate)) {
    return false;
  }

  piece.coordinate = coordinate;
  return true;
}