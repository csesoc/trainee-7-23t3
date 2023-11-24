import React from 'react';
import Piece from './Piece';
import Layout from './Layout';
import Hexagon from './Hexagon';

const piecesCoordinate: [number, number, number][] = []

const offsetToCube = (row: number, col: number): [number, number, number] => {
  const q = col;
  var r = row - (col - (col % 2)) / 2
  return [q, r, -q - r];
}

for (let row = 0; row < 6; row++) {
  for (let col = 0; col < 16; col++) {
    piecesCoordinate.push(offsetToCube(row, col))
  }
}

const GridBoard = () => {
  return <svg
    className="grid"
    width={2300}
    height={'80%'}
    viewBox={"-30 -30 300 300"}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
      {
        piecesCoordinate.map(coordinate => <Hexagon q={coordinate[0]} r={coordinate[1]} s={coordinate[2]} />)
      }
    </Layout>
  </svg>
};

export default GridBoard;
