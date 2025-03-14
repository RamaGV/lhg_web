import React from 'react';
import { FaLeaf, FaHandsHelping, FaUsers, FaRecycle } from 'react-icons/fa';

const SustainabilitySection: React.FC = () => {
  const initiatives = [
    {
      title: 'Medio Ambiente',
      icon: <FaLeaf className="text-4xl text-accent" />,
      description: 'Implementamos prácticas mineras sostenibles para minimizar nuestro impacto ambiental y preservar la biodiversidad local.'
    },
    {
      title: 'Comunidad',
      icon: <FaHandsHelping className="text-4xl text-accent" />,
      description: 'Apoyamos a las comunidades locales a través de proyectos sociales, educación y oportunidades de empleo.'
    },
    {
      title: 'Personas',
      icon: <FaUsers className="text-4xl text-accent" />,
      description: 'Invertimos en nuestros empleados con programas de capacitación, seguridad laboral y desarrollo profesional.'
    },
    {
      title: 'Economía Circular',
      icon: <FaRecycle className="text-4xl text-accent" />,
      description: 'Promovemos la economía circular mediante la reutilización de residuos y el uso eficiente de recursos.'
    }
  ];

  return (
    <section id="sustainability" className="py-16 bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sostenibilidad</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
            La sostenibilidad es un pilar fundamental en nuestra estrategia de negocio. 
            Nos comprometemos a operar de manera responsable, minimizando nuestro impacto ambiental 
            y contribuyendo positivamente a las comunidades donde operamos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-block p-4 bg-light rounded-full mb-4">{initiative.icon}</div>
              <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
              <p className="text-gray-700">{initiative.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold mb-6">Reporte de Sostenibilidad</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-700 mb-4">
                LHG Mining lanzó su primer Reporte de Sostenibilidad, destacando las principales iniciativas, 
                estrategias y acciones en materia de medio ambiente, sostenibilidad, producción e inversión 
                durante el año 2023.
              </p>
              <p className="text-gray-700 mb-4">
                El informe presenta nuestros logros y establece objetivos ambiciosos para el futuro, 
                reafirmando nuestro compromiso con un desarrollo minero responsable y sostenible.
              </p>
              <div className="mt-6">
                <a href="#" className="btn btn-primary inline-flex items-center">
                  Descargar Reporte
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
              {/* We would use an actual image here */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1470813740244-df37b8c1edcb')] bg-cover bg-center">
                <div className="absolute inset-0 bg-primary opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 bg-primary text-white p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">Comprometidos con el futuro</h3>
              <p className="text-white text-opacity-90">
                Conozca más sobre nuestros proyectos de inversión social y ambiental.
              </p>
            </div>
            <a href="#contact" className="btn bg-white text-primary hover:bg-gray-100 mt-4 md:mt-0">
              Contactar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection; 