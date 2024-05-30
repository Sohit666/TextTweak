
import './App.css';
import Navbar from './components/navbar';
import Form from './components/form'
import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
      if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = '#042743';
      }
      else {
          setMode('light');
          document.body.style.backgroundColor = 'white';
      }

  };
  const linkTextColor = mode === 'dark' ? 'text-light' : 'text-dark';
  return (
    <div className="App">
      <Navbar title="TextTweak" toggleMode={toggleMode} mode={mode} />
      <div className="container">
        <h1 className={`${linkTextColor}`}>Welcome</h1>
        <Form heading="Hello and welcome to practice Program on react" mode={mode}/>
      </div>
    </div>
  );
}

export default App;
