// src/pages/Home.tsx

// Components
import Navbar from '../components/Navbar';

// Sections
import HeroSection from '../sections/homePage/HeroSection';
import AboutSection from '../sections/homePage/AboutSection';
import OperationsSection from '../sections/homePage/OperationsSection';
import SustainabilitySection from '../sections/homePage/SustainabilitySection';
import ContactSection from '../sections/homePage/ContactSection';

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
    </>
  );
};

export default Home; 