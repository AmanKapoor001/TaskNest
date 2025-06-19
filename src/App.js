// src/App.js
import React from 'react';
import './styles/App.css';
import Board from './components/Board';

function App() {
  return (
    <div className="app-container">
      <header>
        <div className="logo-container">
          <img src="/inspire-logo.png" alt="Inspire Logo" />
          <h1>TaskNest</h1>
        </div>
        <button className="login-button">Login</button>
      </header>
      <Board />
    </div>
  );
}

export default App;
