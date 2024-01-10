import { Route, Routes } from "react-router-dom";
import './App.css';
import AvailableShifts from './components/availableshifts/AvailableShifts';
import Navbar from './components/Navbar';
import Shifts from './components/myshifts/Shifts';
// import { useState } from "react";

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
