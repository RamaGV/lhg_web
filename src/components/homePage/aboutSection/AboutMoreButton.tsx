import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

interface AboutMoreButtonProps {
  text: string;
  to: string;
}

const AboutMoreButton: React.FC<AboutMoreButtonProps> = ({ text, to }) => {
  return (
    <Link 
      to={to} 
      className="
        inline-flex items-center justify-center w-full px-8 py-4 rounded-lg 
        bg-primary-dark/90
        text-lg font-medium  
        text-white hover:text-secondary
        shadow-xl shadow-primary-dark/40 
        hover:shadow-lg hover:shadow-primary-dark/50 
        transition-colors duration-300"
    >
      {text}
      <FaArrowRight className="ml-3 text-xl" />
    </Link>
  );
};

export default AboutMoreButton;
