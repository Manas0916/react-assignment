import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import {Routes, Route } from "react-router-dom";
import Shifts from './components/Shifts';
import AvailableShifts from './components/AvailableShifts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/shifts' element={<Shifts/>}/>
        <Route path='/availableshifts' element={<AvailableShifts/>}/>
      </Routes>

    </div>
  );
}

export default App;
