import React from 'react';
import { Routes, Route, Navigate, HashRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from './Users/Login';

function App() {
  return (
    <div className="App">
      <HashRouter>
      <Routes>
          <Route path="/"         element={ <Navigate to="/Home"/>}/>
          <Route path="/Login/*"  element={<Login/>}/>
          <Route path="/Profile/*"  element={<h1>Profile</h1>}/>
          <Route path="/Details/*"  element={<h1>Details</h1>}/>
          <Route path="/Search/*"  element={<h1>Search</h1>}/>
        </Routes>
      </HashRouter>
      </div>
   );
}

export default App;
