import { useState, useEffect, useRef } from 'react';
import { CompanyValue } from '../../../data/aboutSectionData';

interface ValuesRotatorProps {
  companyValues: CompanyValue[];
}

const ValuesRotator: React.FC<ValuesRotatorProps> = ({ companyValues }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);
  
  const startRotation = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    
    intervalRef.current = window.setInterval(() => {
      if (!isPaused) {
        setIsVisible(false);
        
        setTimeout(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % companyValues.length);
          setIsVisible(true);
        }, 500); // Fade out time
      }
    }, 5000); // Change every 5 seconds
  };
  
  useEffect(() => {
    startRotation();
    
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused, companyValues]);
  
  return (
    <div 
      className="absolute bottom-0 left-0 right-0 p-8 z-20"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div 
        className={`
          bg-white/90 backdrop-blur-sm 
          p-6 rounded-lg shadow-lg 
          transition-opacity duration-500 
          ${isVisible ? 'opacity-100' : 'opacity-0'}
        `}
      >
        <h4 className="text-xl font-bold text-primary-dark mb-2">
          {companyValues[currentIndex].title}
        </h4>
        <p className="text-gray-700">
          {companyValues[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

export default ValuesRotator;