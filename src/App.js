import logo from './logo.svg';
import './App.css';
import AcceptButton from './components/AcceptButton/AcceptButton';
import CancelButton from './components/CancelButton/CancelButton';
import { useState } from 'react';

function App() {

  const [acceptColors, setAcceptColors] = useState({
    background: '#FFFF', 
    color: '#26a69a',
    hoverBackground : '#009688',
    hoverColor: '#FFFF'
  });

  const toggleStyle = () =>
  {
    setAcceptColors({
        background: '#FFFF', 
        color: acceptColors.color === '#26a69a' ? '#2196f3' : '#26a69a',
        hoverBackground : acceptColors.hoverBackground === '#009688' ? '#42a5f5': '#009688',
        hoverColor: '#FFFF'
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={toggleStyle}>Toggle Style</button>
        <AcceptButton 
          colors={acceptColors}
          title="Aceptar"/>
        <CancelButton title="Cancelar"/>
      </header>
    </div>
  );
}

export default App;
