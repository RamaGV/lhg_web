import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  to: string;
  isScrolled: boolean;
}

const Logo: React.FC<LogoProps> = ({ to, isScrolled }) => {
  return (
    <div className="flex-shrink-0">
      <Link to={to} className="flex items-center">
        <img 
          className={`
            transition-all duration-500 ease-in-out
            ${isScrolled ? 'h-10 w-auto' : 'h-12 w-auto'}
          `}
          src="/icons/lhgmining.svg" 
          alt="LHG Mining" 
        />
      </Link>
    </div>
  );
};

export default Logo;