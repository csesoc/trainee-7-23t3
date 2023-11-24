export enum PIECE_TYPE {
  QUEEN_BEE = "Q",
  BEETLE = "B",
  ANT = "A",
  GRASSHOPPER = "G",
  SPIDER = "S",
}

export enum PIECE_COLOR {
  WHITE = "w",
  BLACK = "b",
}

export interface Coordinate {
  x: number;
  y: number;
}

// Piece here only refer to pieces currently on the board
export interface Piece {
  pieceID: string;
  pieceType: PIECE_TYPE;
  pieceColor: PIECE_COLOR;
  coordinate: Coordinate;
}
