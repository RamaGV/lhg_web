import React, { useState, useEffect, useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  // Valores para la rotación en la card
  const companyValues = [
    {
      title: "Actitud de dueño",
      description: "Comprometido con el resultado, conoce con profundidad lo que hace y tiene una visión del todo. Actúa con obstinación, disciplina y enfoque en los detalles."
    },
    {
      title: "Humildad",
      description: "Sabe escuchar, es atento, considera la opinión de los demás, no le importa quién hizo algo, sino lo que todos hicimos. No tiene vergüenza de preguntar ni de decir que no sabe."
    },
    {
      title: "Franqueza",
      description: "Es directo, sincero, verdadero y transparente en sus relaciones, siempre con respeto, de forma positiva, agregadora y acogedora."
    },
    {
      title: "Disponibilidad",
      description: "Es receptivo, accesible, disponible, cualquier momento es bueno, siempre está preparado y considera el trabajo una prioridad."
    },
    {
      title: "Disciplina",
      description: "Cumple lo combinado, es puntual con el horario y sus compromisos. Realiza sus tareas de forma disciplinada. Es enfocado, pragmático, optimiza el tiempo."
    },
    {
      title: "Determinación",
      description: "Es obstinado, entrega resultados superiores y cumple sus compromisos. Hace que las cosas sucedan, busca alternativas para los problemas y compromete a las personas en la búsqueda de un objetivo común."
    },
    {
      title: "Simplicidad",
      description: "Hace que las cosas sucedan de manera simple y práctica, pone manos a la obra, va derecho al punto, descomplica y desburocratiza, respetando las normas."
    }
  ];

  // Nuestras creencias
  const beliefs = [
    {
      icon: "foco.png",
      title: "Enfoque en el detalle"
    },
    {
      icon: "mao-na-massa.png",
      title: "Manos a la obra"
    },
    {
      icon: "conquistas.png",
      title: "Las cosas solamente se conquistan con mucho trabajo"
    },
    {
      icon: "pessoa.png",
      title: "La persona correcta en el lugar correcto"
    },
    {
      icon: "paixao.png",
      title: "Pasión por lo que hace"
    },
    {
      icon: "atitude.png",
      title: "La actitud es más importante que el conocimiento"
    },
    {
      icon: "lider.png",
      title: "El líder es quien tiene que conquistar a sus liderados"
    },
    {
      icon: "liderar.png",
      title: "Liderar con el ejemplo"
    },
    {
      icon: "resultado.png",
      title: "Enfoque en el resultado"
    },
    {
      icon: "acreditar.png",
      title: "Creer es un factor de diferencia"
    },
    {
      icon: "productos.png",
      title: "Productos y servicios de calidad"
    }
  ];

  // Componente para la card rotativa
  const ValuesRotator = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isPaused, setIsPaused] = useState(false);
    const intervalRef = useRef<number | null>(null);
    
    const startRotation = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      intervalRef.current = window.setInterval(() => {
        if (!isPaused) {
          setIsVisible(false);
          
          setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % companyValues.length);
            setIsVisible(true);
          }, 500); // Tiempo para el fade out
        }
      }, 5000); // Cambiar cada 5 segundos
    };
    
    useEffect(() => {
      startRotation();
      
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }, [isPaused]);
    
    return (
      <div 
        className="absolute bottom-0 left-0 right-0 p-8 z-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div 
          className={`bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <h4 className="text-xl font-bold text-primary-dark mb-2">{companyValues[currentIndex].title}</h4>
          <p className="text-gray-700">
            {companyValues[currentIndex].description}
          </p>
        </div>
      </div>
    );
  };

  // Componente de carrusel automático para creencias
  const BeliefsCarousel = () => {
    // Duplicamos los elementos para crear un efecto de loop infinito
    const duplicatedBeliefs = [...beliefs, ...beliefs];
    
    // Función para animar el carrusel con CSS
    useEffect(() => {
      // Esta implementación de JavaScript simula el movimiento del carrusel con requestAnimationFrame
      const carousel = document.querySelector('#beliefs-carousel');
      if (!carousel) return;
      
      let position = 0;
      const speed = 0.5; // Velocidad del carrusel (píxeles por frame)
      const totalWidth = carousel.scrollWidth / 2; // Mitad del ancho total (por la duplicación)
      
      const animate = () => {
        position -= speed;
        // Reiniciar la posición cuando lleguemos a la mitad (para crear efecto infinito)
        if (position <= -totalWidth) {
          position = 0;
        }
        
        // Aplicar transformación
        (carousel as HTMLElement).style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animate);
      };
      
      const animationId = requestAnimationFrame(animate);
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    }, []);
    
    return (
      <div className="w-full overflow-hidden relative">
        <div id="beliefs-carousel" className="flex">
          {duplicatedBeliefs.map((belief, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center bg-white/20 backdrop-blur-sm p-4 rounded-lg min-w-[180px] max-w-[200px] mx-2 flex-shrink-0"
            >
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <img 
                  src={`/icons/creencias/${belief.icon}`} 
                  alt={belief.title} 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <p className="text-center text-primary-dark font-medium">{belief.title}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="about" className="py-28 bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-dark mt-2 mb-4">Quienes Somos</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="flex flex-col space-y-16">
          {/* Main content - 3/4 of the vertical space */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary-dark">Liderando el camino hacia una minería más sostenible</h3>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                LHG Mining fue fundada en 2022, con la adquisición de MCR (Mineração Corumbaense Reunida) por el Grupo J&F, el mayor grupo empresarial de Brasil. Con puerto propio, logística integrada y operaciones optimizadas de mineral de hierro y mineral de manganeso.
              </p>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                Nuestra misión es ser los mejores en lo que nos propusimos hacer, asegurando los mejores productos y servicios a los clientes, solidez a los proveedores, rentabilidad a los accionistas y la oportunidad de un futuro mejor para todos los colaboradores.
              </p>
              
              {/* Botón más grande */}
              <Link to="/quienes-somos" className="inline-flex items-center text-white bg-primary hover:bg-primary-dark px-8 py-4 text-lg rounded-lg font-medium transition-colors duration-300 shadow-md hover:shadow-lg">
                Conocer más sobre nosotros
                <FaArrowRight className="ml-3 text-xl" />
              </Link>
            </div>
            
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent z-10"></div>
              <ValuesRotator />
              <img 
                src="galeria/Quem-somos5-1.jpg" 
                alt="Minería sostenible" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Nuestras creencias - 1/4 of the vertical space */}
          <div className="w-full">
            <h3 className="text-2xl font-bold mb-6 text-primary-dark">Nuestras creencias</h3>
            <BeliefsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 