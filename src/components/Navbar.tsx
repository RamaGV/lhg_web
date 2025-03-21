import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from './Navbar/Logo';
import NavLink from './Navbar/NavLink';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Aplicar la posición fija al cargar la página
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
        document.documentElement.classList.add('nav-scrolled');
      } else {
        setScrolled(false);
        document.documentElement.classList.remove('nav-scrolled');
      }
    };

    // Inicializar el estado de scroll al cargar
    handleScroll();
    
    // Usar un listener con passive true para mejorar el rendimiento en móviles
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Configuración para dispositivos móviles
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      // Fix para dispositivos móviles
      document.body.style.paddingTop = '0';
      document.body.style.width = '100%';
      document.documentElement.style.width = '100%';
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.getElementById('main-navbar');
      if (isOpen && navbar && !navbar.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

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
    { name: 'Sustentabilidad', sectionId: 'sustainability' },
    { name: 'Contacto', sectionId: 'contact' }
  ];

  // Estilos para garantizar la posición fija
  const navbarStyle = {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 9999,
    transition: 'all 0.3s',
    backgroundColor: scrolled ? '#303030' : 'transparent',
    boxShadow: scrolled ? '0 10px 30px -10px rgba(18, 24, 39, 0.3)' : 'none',
    padding: scrolled ? '2px 0' : '8px 0',
    WebkitTransform: 'translate3d(0,0,0)', 
  };

  return (
    <nav 
      style={navbarStyle}
      className="navbar-fixed" 
      id="main-navbar"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20 relative">
          {/* Logo */}
          <Logo to="/" isScrolled={scrolled} />

          {/* Desktop Navigation */}
          <div 
            className={`
              hidden md:flex justify-between flex-1 max-w-4xl ml-8 lg:ml-12
              ${scrolled ? 'space-x-1 lg:space-x-2' : 'space-x-1 lg:space-x-2'}
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

          {/* Mobile menu button - Asegurar posición a la derecha */}
          <button
            className="md:hidden text-white p-2"
            style={{ 
              position: 'absolute', 
              right: '0.5rem',
              top: '50%',
              transform: 'translateY(-50%)'
            }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div 
            className="md:hidden w-full"
            style={{ 
              backgroundColor: '#252525', 
              position: 'absolute',
              width: '100%',
              left: 0,
              right: 0,
              zIndex: 9999,
              boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
              borderRadius: '0 0 8px 8px'
            }}
          >
            <div className="px-2 pt-2 pb-3 grid grid-cols-1 gap-1">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="
                    block w-full px-4 py-2 
                    text-left 
                    rounded-md text-sm font-medium text-white hover:text-secondary active:text-secondary 
                    transition-colors duration-1000 bg-transparent active:translate-y-0.5
                  "
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