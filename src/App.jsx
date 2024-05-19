import React from 'react';
import './CSS/App.css';
import Menu from './Components/Menú/Menú.jsx';
import Inicio from './Components/Inicio/Inicio.jsx';
import SobreMi from './Components/SobreMi/SobreMi.jsx';

function App() {
  return (
    <div className="container">
      <Menu />
      <Inicio />
      <SobreMi />
    </div>
  );
}

export default App;

