import React from 'react';
import '../styles/Card.css';

function Card({ card }) {
  return <div className="card">{card.content}</div>;
}

export default Card;
