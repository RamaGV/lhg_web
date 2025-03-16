// src/sections/homePage/OperationsSection.tsx

import { useEffect, useState } from 'react';

// Data
import { operationsSummary } from '../../data/operationsSectionData';

// Components
import OperationCard from '../../components/homePage/operationsSection/OperationCard';
import VerMasButton from '../../components/homePage/VerMasButton';
import Title from '../../components/homePage/Title';


export default function OperationsSection() {
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

  return (
    <section 
      id="operations" 
      className="
        pt-24 sm:pt-28 pb-12 px-6
        bg-primary-dark overflow-hidden
        relative min-h-screen
        select-none
      "
    >
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
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            {/* Columna izquierda: Título, subtítulo y mapa */}
            <div className="lg:w-1/2">
              {/* Título y subtítulo */}
              <div className="mb-6 sm:mb-8">
                <Title title="Operaciones" type="secondary" />
                <p className="
                  text-sm md:text-base lg:text-lg
                  text-white/80 leading-relaxed mb-2
                ">
                  LHG Mining llega al mercado con una estructura liviana y la capacidad de invertir en la expansión de sus vastas reservas de mineral de hierro de alta ley.
                  Su objetivo es ser una solución única y confiable para la cadena de producción de acero sostenible, 
                  contribuyendo para la reducción de las emisiones de gases del efecto invernadero.
                </p>
              </div>
              
              {/* Mapa */}
              <div className="bg-white/10 backdrop-blur-sm p-2 sm:p-4 rounded-lg">
                <div className="
                  relative 
                  h-full
                  rounded-lg overflow-hidden 
                  border border-white/20
                ">
                  <img 
                    src="/mapa.jpg" 
                    alt="Mapa de operaciones LHG Mining" 
                    className="w-full h-full object-contain sm:object-cover opacity-90"
                  />
                </div>
              </div>
            </div>
            
            {/* Columna derecha: Chips y botón */}
            <div className="lg:w-1/2 mt-6 lg:mt-0">
              <div className="mb-6 sm:mb-8 select-none">
                <p className="
                  text-sm md:text-base lg:text-lg
                  text-white/80 leading-relaxed mb-2
                ">
                  En 2022, LHG Mining nació a través de la adquisición de MCR (Mineração Corumbaense Reunida) en Corumbá, 
                  Mato Grosso do Sul. Los minerales de hierro y manganeso vienen de dos minas de alto tenor en la región.
                  El sistema integrado de logística de la empresa incluye una empresa de logística fluvial y un puerto propio, 
                  además de un puerto aliado en la región de Corumbá, una terminal marítima en Nueva Palmira, en Uruguay, 
                  y también terminales de transporte terrestre para el mercado interno.
                </p>
              </div>
              
              {/* Chips de información */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 select-none">
                {operationsSummary.map((op, index) => (
                  <OperationCard key={index} operation={op} />
                ))}
              </div>
              
              {/* Call to action */}
              <div className="flex justify-center mt-8">
                <VerMasButton
                  text="Conocer más sobre nuestras operaciones" 
                  to="/operaciones" 
                  type="primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
