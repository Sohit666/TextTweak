import './App.css';
import Navbar from './components/navbar';
import Form from './components/form';
import About from './components/About';
import React, { useState } from 'react';
import {  Routes, Route } from 'react-router-dom';

function App() {
  const [ mode, setMode ] = useState('light');

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  };

  // const linkTextColor = mode === 'dark' ? 'text-light' : 'text-dark';

  return (
    <div className="App">
      <Navbar title="TextTweak" toggleMode={toggleMode} mode={mode} />

      <div className="container">

        <Routes>
          <Route path="/" element={<Form heading="Hello and welcome to TextTweak" mode={mode} />} />
          <Route path="/About" element={<About mode={mode} />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
