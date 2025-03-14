import React, { useEffect, useState } from 'react';
import { HiUserGroup } from 'react-icons/hi';
import { HiCog } from 'react-icons/hi2';
import { PiLeafFill } from 'react-icons/pi';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden"> 
      {/* Background image with parallax effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-[110%] -top-10" 
          style={{ 
            transform: `translateY(${offset * 0.3}px)`, 
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <img 
            src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3" 
            alt="Mining operations" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/60 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full z-10 flex items-center">
        <div className="w-full max-w-[90%] mx-auto">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              «Trabajamos con tecnologías pioneras para producir un acero más sostenible«
            </h1>
          </div>
        </div>
      </div>
      
      {/* Navigation icons at bottom */}
      <div className="absolute bottom-20 left-0 right-0 z-20">
        <div className="w-full max-w-[90%] mx-auto">
          <div className="grid grid-cols-3 gap-8 max-w-4xl">
            <a href="#about" className="flex flex-col items-center text-white group">
              <div className="w-16 h-16 mb-2 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-secondary/20">
                <HiUserGroup className="w-8 h-8 text-white transition-colors duration-300 group-hover:text-secondary" />
              </div>
              <span className="text-lg font-medium transition-colors duration-300 group-hover:text-secondary">Quienes Somos</span>
            </a>
            <a href="#operations" className="flex flex-col items-center text-white group">
              <div className="w-16 h-16 mb-2 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-secondary/20">
                <HiCog className="w-8 h-8 text-white transition-colors duration-300 group-hover:text-secondary" />
              </div>
              <span className="text-lg font-medium transition-colors duration-300 group-hover:text-secondary">Operaciones</span>
            </a>
            <a href="#sustainability" className="flex flex-col items-center text-white group">
              <div className="w-16 h-16 mb-2 bg-white/5 rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-secondary/20">
                <PiLeafFill className="w-8 h-8 text-white transition-colors duration-300 group-hover:text-secondary" />
              </div>
              <span className="text-lg font-medium transition-colors duration-300 group-hover:text-secondary">Sostenibilidad</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 