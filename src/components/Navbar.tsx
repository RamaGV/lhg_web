import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Quienes Somos', href: '#about', inPageLink: '#about' },
    { name: 'Operaciones', href: '#operations', inPageLink: '#operations' },
    { name: 'Sostenibilidad', href: '#sustainability', inPageLink: '#sustainability' },
    { name: 'Noticias', href: '#news', inPageLink: '#news' },
    { name: 'Contacte', href: '#contact', inPageLink: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary-dark/95 backdrop-blur-sm shadow-lg z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start py-3">
          {/* Logo */}
          <div className="flex-shrink-0 mr-16 pb-2 my-2">
            <Link to="/" className="flex items-center">
              <img src="/icons/lhgmining.svg" alt="LHG Mining" className="h-14 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 items-start">
            {navItems.map((item, index) => (
              item.href.startsWith('#') ? (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-white/90 hover:text-secondary transition-colors"
                >
                  {item.name}
                </a>
              ) : (
                <Link 
                  key={index} 
                  to={item.href} 
                  className="text-white/90 hover:text-secondary transition-colors"
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md text-white/90 hover:text-secondary focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-gray-900/80 backdrop-blur-md p-6 space-y-4">
          {navItems.map((item, index) => (
            item.href.startsWith('#') ? (
              <a 
                key={index} 
                href={item.href} 
                className="block text-white/90 hover:text-secondary transition-colors py-2"
                onClick={toggleMenu}
              >
                {item.name}
              </a>
            ) : (
              <Link 
                key={index} 
                to={item.href} 
                className="block text-white/90 hover:text-secondary transition-colors py-2"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            )
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 