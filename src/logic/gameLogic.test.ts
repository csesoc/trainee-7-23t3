import { PIECE_COLOR, PIECE_TYPE, Piece } from "@datatypes/Piece";
import { addPiece } from "./gameLogic";

describe("[UNIT] gameLogic test", () => {
  it("should be able to add a new piece", () => {
    const pieces: Piece[] = [];
    addPiece(pieces, { x: 0, y: 0 }, PIECE_TYPE.QUEEN_BEE, PIECE_COLOR.WHITE);

    expect(pieces.length).toStrictEqual(1);

    const expected: Piece = {
      pieceID: 'wQ',
      coordinate: {
        x: 0,
        y: 0,
      },
      pieceType: PIECE_TYPE.QUEEN_BEE,
      pieceColor: PIECE_COLOR.WHITE
    };

    expect(pieces[0]).toStrictEqual(expected);
  });


});