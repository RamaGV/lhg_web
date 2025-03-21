import React from 'react';
import { Link } from 'react-router-dom';
import { VerMasIcon } from '../../data/icons';

interface VerMasButtonProps {
  type?: 'primary' | 'secondary';
  text: string;
  to: string;
}

const VerMasButton: React.FC<VerMasButtonProps> = ({ 
  type = 'primary', 
  text, 
  to, 
}) => {
  const baseClasses = `
    w-full flex items-center justify-center 
    px-4 sm:px-6 md:px-8 
    py-2 sm:py-3 md:py-4 
    text-sm sm:text-md md:text-lg 
    rounded-lg group font-medium 
    transition-all duration-300 
    shadow-md hover:shadow-lg
  `;
  
  const typeClasses = {
    primary: "text-gray-950 bg-secondary hover:bg-secondary/90 hover:text-white/90",
    secondary: "bg-primary-dark/90 text-white hover:text-secondary shadow-xl shadow-primary-dark/40 hover:shadow-lg hover:shadow-primary-dark/50"
  };

  const isExternalUrl = to.startsWith('http://') || to.startsWith('https://');

  if (isExternalUrl) {
    return (
      <a 
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`
          ${baseClasses} 
          ${typeClasses[type]}
        `}
      >
        {text}
        <span className="ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform duration-300">
          {VerMasIcon}
        </span>
      </a>
    );
  }

  return (
    <Link 
      to={to} 
      className={`
        ${baseClasses} 
        ${typeClasses[type]}
      `}
    >
      {text}
      <span className="ml-2 sm:ml-3 transform group-hover:translate-x-1 transition-transform duration-300">
        {VerMasIcon}
      </span>
    </Link>
  );
};

export default VerMasButton;