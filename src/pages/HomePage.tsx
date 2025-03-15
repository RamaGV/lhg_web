// src/pages/Home.tsx

// Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Sections
import HeroSection from '../sections/homePage/HeroSection';
import AboutSection from '../sections/homePage/AboutSection';
import OperationsSection from '../sections/homePage/OperationsSection';
import SustainabilitySection from '../sections/homePage/SustainabilitySection';
import ContactSection from '../sections/homePage/ContactSection';

export default function HomePage() {
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
