import React from 'react';
import Piece from './Piece';
import './Piece.css'

const GridBoard = () => {
  const grid = [];
  const gridSize = 5;

  // Create a hexagonal grid
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      grid.push(
        <Piece key={`${row}-${col}`} row={row} col={col} />
      );
    }
  }

  return <div className="hexagonal-grid">{grid}</div>;
};

export default GridBoard;
