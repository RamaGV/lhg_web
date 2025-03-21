import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  sectionId: string;
  name: string;
  scrollToSection: (sectionId: string) => void;
  isScrolled: boolean;  
}

const NavLink: React.FC<NavLinkProps> = ({ 
  sectionId, 
  name, 
  scrollToSection,
  isScrolled 
}) => {
  const [isPressed, setIsPressed] = useState(false);
  
  const handleClick = () => {
    setIsPressed(true);
    scrollToSection(sectionId);
    
    // Resetear el estado después de la transición
    setTimeout(() => {
      setIsPressed(false);
    }, 3000);
  };
  
  return (
    <Link
      to={`#${sectionId}`}
      key={sectionId}
      onClick={handleClick}
      className={`
        transition-colors duration-1000 
        flex-1 text-center whitespace-nowrap px-2 sm:px-3
        ${isScrolled ? 'text-sm md:text-lg font-light' : 'text-base md:text-xl'} 
        ${isPressed ? 'text-secondary' : isScrolled ? 'text-light' : 'text-light/90'}
        hover:text-secondary/80
        cursor-pointer
        active:translate-y-0.5
      `}
    >
      {name}
    </Link>
  );
};

export default NavLink;