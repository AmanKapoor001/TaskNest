import React, { useState } from 'react';
import '../styles/List.css';
import Card from './Card';

function List({ list }) {
  const [cards, setCards] = useState(list.cards);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const addCard = () => {
    if (!title.trim()) return;
    const newCard = { id: Date.now(), content: `${title}\n${desc}` };
    setCards([...cards, newCard]);
    setTitle('');
    setDesc('');
  };

  return (
    <div className="list">
      <h3>{list.title}</h3>
      <div className="card-container">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
      <input
        type="text"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      ></textarea>
      <button onClick={addCard}>Add Task</button>
    </div>
  );
}

export default List;
