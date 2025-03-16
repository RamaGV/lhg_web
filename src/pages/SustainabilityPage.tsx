import React from 'react';
import { FaWater, FaSeedling, FaRegLightbulb, FaChartLine, FaTree, FaHandHoldingHeart } from 'react-icons/fa';

const SustainabilityPage: React.FC = () => {
  const initiatives = [
    {
      title: 'Producción Eficiente',
      description: 'El 80% de la producción de las minas de Santa Cruz y Urucum se realiza por medio del procesamiento en seco, minimizando el uso de agua y de represas.',
      icon: <FaWater className="text-4xl text-secondary" />,
      stats: '80% producción en seco'
    },
    {
      title: 'Reducción de Emisiones',
      description: 'Reducción de emisiones del orden de 70 kg de CO2 por tonelada de acero, en substitución del aglomerado sinterizado.',
      icon: <FaChartLine className="text-4xl text-secondary" />,
      stats: '70 kg CO2 reducción'
    },
    {
      title: 'Vivero Forestal',
      description: 'Más de 2,5 millones de plantones nativos regionales producidos en 20 años.',
      icon: <FaTree className="text-4xl text-secondary" />,
      stats: '2.5M+ plantones'
    }
  ];

  const impactAreas = [
    {
      title: 'Áreas de Conservación',
      description: '345 mil hectáreas de áreas de conservación ambiental y reforestación.',
      icon: <FaSeedling className="text-4xl text-secondary" />
    },
    {
      title: 'Educación y Empleo',
      description: 'Más de 164,7 mil personas recibieron cursos de educación profesional.',
      icon: <FaRegLightbulb className="text-4xl text-secondary" />
    },
    {
      title: 'Responsabilidad Social',
      description: 'Iniciativas que incluyen educación, empleo y capacitación profesional.',
      icon: <FaHandHoldingHeart className="text-4xl text-secondary" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-primary-dark">
        <div className="absolute inset-0">
          <img 
            src="/galeria/sustentabilidade.jpg" 
            alt="Sostenibilidad LHG Mining" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Sostenibilidad
            </h1>
            <p className="text-xl text-white/80 max-w-3xl">
              Comprometidos con la excelencia en la minería sostenible y el desarrollo social
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-20">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Nuestro Compromiso con la Sostenibilidad
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            J&F Investimentos establece directrices, metas y objetivos para la mejora continua de su desempeño operativo, 
            haciendo que los procesos productivos sean más eficientes y sostenibles.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
              <div className="mb-6">
                {initiative.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{initiative.title}</h3>
              <p className="text-gray-600 mb-4">{initiative.description}</p>
              <div className="text-secondary font-semibold">{initiative.stats}</div>
            </div>
          ))}
        </div>

        {/* Impact Areas */}
        <div className="bg-primary-dark rounded-2xl p-12 mb-20">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Nuestro Impacto en Números
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{area.title}</h3>
                <p className="text-white/80">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿Quieres saber más sobre nuestro compromiso con la sostenibilidad?
          </h2>
          <button className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-secondary/90 transition-colors duration-300 shadow-md hover:shadow-lg">
            Contactar con nuestro equipo de sostenibilidad
          </button>
        </div>
      </div>
    </div>
  );
};

export default SustainabilityPage; 