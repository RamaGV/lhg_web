import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import AboutSection from '../sections/AboutSection';
import OperationsSection from '../sections/OperationsSection';
import SustainabilitySection from '../sections/SustainabilitySection';
import ContactSection from '../sections/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <OperationsSection />
        <SustainabilitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default Home; 