import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../sections/homePage/HeroSection';
import AboutSection from '../sections/homePage/AboutSection';
import OperationsSection from '../sections/homePage/OperationsSection';
import SustainabilitySection from '../sections/homePage/SustainabilitySection';
import ContactSection from '../sections/homePage/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
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