import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terminos-y-condiciones" element={<Terms />} />
        <Route path="/politica-de-privacidad" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;

