import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface SustainabilityMoreButtonProps {
  text?: string;
  to?: string;
}

const SustainabilityMoreButton: React.FC<SustainabilityMoreButtonProps> = ({ 
  text = "Conocer más", 
  to = "/sostenibilidad" 
}) => {
  return (
    <Link 
      to={to} 
      className="
        w-full flex items-center justify-center px-8 py-4 text-lg rounded-lg group
        font-medium text-gray-950 bg-secondary hover:bg-secondary/90 hover:text-white/90 
        shadow-md hover:shadow-lg 
        transition-all duration-300 
      "
    >
      {text}
      <FaArrowRight className="ml-3 text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
    </Link>
  );
};

export default SustainabilityMoreButton;