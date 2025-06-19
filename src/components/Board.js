import React, { useState } from 'react';
import '../styles/Board.css';
import List from './List';

function Board() {
  const [columns, setColumns] = useState([
    { id: 1, title: 'Backlog', cards: [] },
    { id: 2, title: 'In Progress', cards: [] },
    { id: 3, title: 'In Review', cards: [] },
    { id: 4, title: 'Done', cards: [] }
  ]);

  const addColumn = (title) => {
    const newColumn = {
      id: Date.now(),
      title,
      cards: []
    };
    setColumns([...columns, newColumn]);
  };

  const handleAddColumn = () => {
    const title = prompt('Enter column title:');
    if (title) addColumn(title);
  };

  return (
    <div className="board-list">
      {columns.map((col) => (
        <List key={col.id} list={col} />
      ))}
      <div className="add-column">
        <button onClick={handleAddColumn}>Add Column</button>
      </div>
    </div>
  );
}

export default Board;
