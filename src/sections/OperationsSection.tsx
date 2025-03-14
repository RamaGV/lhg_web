import React, { useEffect, useState } from 'react';
import { FaMountain, FaShip, FaCogs, FaIndustry, FaArrowRight, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OperationsSection: React.FC = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const sectionEl = document.getElementById('operations');
      if (sectionEl) {
        const rect = sectionEl.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        // Solo aplicar parallax cuando la sección está visible
        if (sectionTop < window.innerHeight && sectionTop > -sectionHeight) {
          requestAnimationFrame(() => {
            // Calculamos un valor relativo al scroll dentro de la sección
            const relativeScroll = -sectionTop / (window.innerHeight + sectionHeight);
            setOffset(relativeScroll * 260); // Aumentado para más rango de movimiento
          });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamada inicial para establecer la posición

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Resumen de operaciones principales
  const operationsSummary = [
    {
      title: 'Minas',
      icon: <FaMountain className="text-4xl text-secondary" />,
      description: 'Explotación de minas de mineral de hierro y manganeso en Santa Cruz y Urucum, con técnicas sostenibles.'
    },
    {
      title: 'Sistema Logístico',
      icon: <FaShip className="text-4xl text-secondary" />,
      description: 'Sistema logístico integrado que incluye ferrocarril y puerto propio, optimizando el transporte y reduciendo costos.'
    },
    {
      title: 'Procesamiento',
      icon: <FaCogs className="text-4xl text-secondary" />,
      description: 'Procesamiento en seco que elimina la necesidad de presas de relaves, reduciendo el impacto ambiental.'
    },
    {
      title: 'Producción',
      icon: <FaIndustry className="text-4xl text-secondary" />,
      description: 'Producción de granulado (lump) de alta calidad, reduciendo emisiones en la industria siderúrgica.'
    }
  ];

  // Puntos en el mapa (versión simplificada)
  const mapLocations = [
    {
      name: "Mina Santa Cruz",
      position: { top: "30%", left: "48%" },
      type: "mine"
    },
    {
      name: "Mina Urucum",
      position: { top: "32%", left: "46%" },
      type: "mine"
    },
    {
      name: "Puerto Gregório Curvo",
      position: { top: "34%", left: "47%" },
      type: "port"
    },
    {
      name: "Terminal Nueva Palmira",
      position: { top: "70%", left: "60%" },
      type: "port"
    }
  ];

  return (
    <section id="operations" className="py-28 relative w-full min-h-screen overflow-hidden"> 
      {/* Background image with parallax effect */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 w-full h-[110%] -top-[5%]" 
          style={{ 
            transform: `translateY(${offset * 0.5}px)`,
            transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <img 
            src="/galeria/Operacao-de-embarque-PCG.jpg" 
            alt="Operaciones de embarque PCG" 
            className="w-full h-full object-cover"
          />
        </div>
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-primary-dark/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full z-10">
        <div className="container-custom mx-auto py-20">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Columna izquierda: Título, subtítulo y mapa */}
            <div className="lg:w-1/2">
              {/* Título y subtítulo */}
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Operaciones
                </h2>
                <div className="w-24 h-1 bg-secondary mb-6"></div>
                <p className="text-white/90 text-lg leading-relaxed">
                  LHG Mining llega al mercado con una estructura liviana y la capacidad de invertir en la expansión de sus vastas reservas de mineral de hierro de alta ley. Su objetivo es ser una solución única y confiable para la cadena de producción de acero sostenible, contribuyendo para la reducción de las emisiones de gases del efecto invernadero.
                </p>
              </div>
              
              {/* Mapa */}
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="relative h-[350px] rounded-lg overflow-hidden border border-white/20">
                  <img 
                    src="/galeria/mapa-operaciones.jpg" 
                    alt="Mapa de operaciones LHG Mining" 
                    className="w-full h-full object-cover opacity-90"
                  />
                  {/* Puntos en el mapa */}
                  {mapLocations.map((location, index) => (
                    <div 
                      key={index}
                      className={`absolute flex flex-col items-center ${
                        location.type === 'mine' ? 'text-red-400' : 'text-blue-400'
                      }`}
                      style={{ 
                        top: location.position.top, 
                        left: location.position.left 
                      }}
                    >
                      <FaMapMarkerAlt className="text-xl" />
                      <span className="text-xs font-bold bg-black/50 text-white px-1 rounded mt-1">{location.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Columna derecha: Chips y botón */}
            <div className="lg:w-1/2">
              <div className="mb-8">
                <p className="text-white/90 text-lg leading-relaxed mb-6">
                  En 2022, LHG Mining nació a través de la adquisición de MCR (Mineração Corumbaense Reunida) en Corumbá, Mato Grosso do Sul. Los minerales de hierro y manganeso vienen de dos minas de alto tenor en la región. El sistema integrado de logística de la empresa incluye una empresa de logística fluvial y un puerto propio, además de un puerto aliado en la región de Corumbá, una terminal marítima en Nueva Palmira, en Uruguay, y también terminales de transporte terrestre para el mercado interno.
                </p>
              </div>
              
              {/* Chips de información */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {operationsSummary.map((op, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:bg-white/20">
                    <div className="flex items-center mb-3">
                      {op.icon}
                      <h3 className="text-xl font-bold text-white ml-3">{op.title}</h3>
                    </div>
                    <p className="text-white/80">
                      {op.description}
                    </p>
                  </div>
                ))}
              </div>
              
              {/* Botón para ir a la página completa */}
              <div className="flex justify-center lg:justify-start">
                <Link to="/operaciones" className="inline-flex items-center text-white bg-secondary hover:bg-secondary/90 px-8 py-4 text-lg rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
                  Conocer más sobre nuestras operaciones
                  <FaArrowRight className="ml-3 text-xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationsSection; 