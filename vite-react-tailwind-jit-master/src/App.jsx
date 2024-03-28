import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/index';

function App() {
  return (
    <Router>
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
