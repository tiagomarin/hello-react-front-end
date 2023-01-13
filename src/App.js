import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Greeting from './app/Components/Greetings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </div>
  );
}

export default App;
