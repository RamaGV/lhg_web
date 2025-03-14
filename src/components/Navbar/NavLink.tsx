import React from 'react';
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
  return (
    <Link
      to={`#${sectionId}`}
      key={sectionId}
      onClick={() => scrollToSection(sectionId)}
      className={`
        transition-colors duration-300 
        ${isScrolled ? 'bg-primary-dark' : 'bg-transparent'}
        ${isScrolled ? 'text-lg font-light' : 'text-xl'}
        ${isScrolled ? 'text-light' : 'text-light/90'}
        ${isScrolled ? 'hover:text-secondary/80' : 'hover:text-secondary'}
      `}
    >
      {name}
    </Link>
  );
};

export default NavLink;