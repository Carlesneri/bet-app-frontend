import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar Navbar">
        <span>
          <img className="star" src="./images/star.png" alt="star"></img>
        </span>
        <span>
          <button id="btn-iniciar" className="btn btn-outline-info iniciar">
            Iniciar
          </button>
        </span>
        <span>
          <img className="admin-icon" src="https://useiconic.com/open-iconic/svg/dashboard.svg" alt="admin-icon"></img>
        </span>
      </nav>      
      <ul className='list-group container mt-2' id="partidos">
      </ul>
    </div>
  );
}

export default App;
