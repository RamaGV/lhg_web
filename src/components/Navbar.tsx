import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Navbar/Logo';
import NavLink from './Navbar/NavLink';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Inicio', sectionId: 'hero' },
    { name: 'Quiénes Somos', sectionId: 'about' },
    { name: 'Operaciones', sectionId: 'operations' },
    { name: 'Sostenibilidad', sectionId: 'sustainability' },
    { name: 'Contacto', sectionId: 'contact' }
  ];

  return (
    <nav 
      className={`
        fixed w-full z-50 
        transition-all duration-300 
        ${scrolled ? 'bg-primary-dark shadow-xl shadow-primary-dark/30' : 'bg-transparent'}
        ${scrolled ? 'py-1' : 'py-4'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo to="/" isScrolled={scrolled} />

          {/* Desktop Navigation */}
          <div 
            className={`
              hidden md:flex 
              ${scrolled ? 'space-x-12' : 'space-x-8'}
            `}
          >
            {navItems.map((item) => (
              <NavLink
                key={item.sectionId}
                sectionId={item.sectionId}
                name={item.name}
                scrollToSection={scrollToSection}
                isScrolled={scrolled}
              />
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-white hover:bg-secondary/20"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 