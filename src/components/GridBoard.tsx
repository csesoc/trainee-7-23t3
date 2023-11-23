import React from 'react';
import Piece from './Piece';
import Layout from './Layout';
import Hexagon from './Hexagon';

const GridBoard = () => {
  return <svg
    className="grid"
    width={800}
    height={600}
    viewBox={"-50 -50 100 100"}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.1} origin={{ x: 0, y: 0 }}>
      <Hexagon q={0} r={0} s={0} />
      <Hexagon q={0} r={-1} s={1} />
      <Hexagon q={0} r={1} s={-1} />
      <Hexagon q={1} r={-1} s={0} />
    </Layout>
  </svg>
};

export default GridBoard;
