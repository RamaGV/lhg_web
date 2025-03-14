import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import OperationsSection from './sections/OperationsSection';
import SustainabilitySection from './sections/SustainabilitySection';
import ContactSection from './sections/ContactSection';
import SustainabilityPage from './pages/SustainabilityPage';
import AboutPage from './pages/QuienesSomos';
import Operaciones from './pages/Operaciones';
import QuienesSomos from './pages/QuienesSomos';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
              <OperationsSection />
              <SustainabilitySection />
              <ContactSection />
            </>
          } />
          <Route path="/quienes-somos" element={<AboutPage />} />
          <Route path="/operaciones" element={<Operaciones />} />
          <Route path="/sostenibilidad" element={<SustainabilityPage />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
