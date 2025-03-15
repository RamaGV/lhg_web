// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './sections/homePage/HeroSection';
import AboutSection from './sections/homePage/AboutSection';
import OperationsSection from './sections/homePage/OperationsSection';
import SustainabilitySection from './sections/homePage/SustainabilitySection';
import ContactSection from './sections/homePage/ContactSection';
import SustainabilityPage from './pages/SustainabilityPage';
import Operaciones from './pages/Operaciones';
import QuienesSomos from './pages/QuienesSomos';
import NoticiasPage from './pages/NoticiasPage';
import Footer from './components/Footer';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HeroSection />
              <AboutSection />
              <OperationsSection />
              <SustainabilitySection />
              <ContactSection />
              <Footer />
            </>
          } />
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
