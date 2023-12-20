import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <div id="break-label">
        <h1>Duração da pausa</h1>
        <button id="break-decrement"></button>
        <button id="break-increment"></button>
        <h2 id="break-length">5</h2>
      </div>
      <div id="session-label">
        <h1>Duração da sessão</h1>
        <button id="session-decrement"></button>
        <button id="session-increment"></button>
        <h2 id="session-length">25</h2>
      </div>
      <div id="timer-label">
        <h1> Sessão</h1>
        <h2 id="time-left">25:00</h2>
      </div>
      <div>
        <button id="start_stop"></button>
        <button id="reset"></button>
      </div>
    </div>
  );
}

export default App;
