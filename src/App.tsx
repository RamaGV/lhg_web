// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SustainabilityPage from './pages/SustainabilityPage';
import Operaciones from './pages/Operaciones';
import QuienesSomos from './pages/QuienesSomos';
import NoticiasPage from './pages/NoticiasPage';


import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/operaciones" element={<Operaciones />} />
          <Route path="/sostenibilidad" element={<SustainabilityPage />} />
          <Route path="/noticias" element={<NoticiasPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
