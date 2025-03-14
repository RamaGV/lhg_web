import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface OperationMoreButtonProps {
  text: string;
  to: string;
}

const OperationMoreButton: React.FC<OperationMoreButtonProps> = ({ text, to }) => {
  return (
    <Link 
      to={to} 
      className="
        inline-flex items-center px-8 py-4 text-lg rounded-lg font-medium 
        text-white/90 hover:text-gray-900
        bg-secondary/90 hover:bg-secondary 
        shadow-md hover:shadow-lg
        transition-colors duration-300"
    >
      {text}
      <FaArrowRight className="ml-3 text-xl" />
    </Link>
  );
};

export default OperationMoreButton;