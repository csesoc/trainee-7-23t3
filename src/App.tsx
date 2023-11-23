import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import GridBoard from './components/GridBoard'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <GridBoard />
      </div>
    </DndProvider>
  );
}

export default App