import React from 'react';
import { FaLeaf, FaIndustry, FaGlobeAmericas, FaCheck, FaHistory, FaUsers, FaShip, FaMapMarkedAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';

const QuienesSomos: React.FC = () => {
  const timeline = [
    {
      year: "2022",
      title: "Nacimiento de LHG Mining",
      description: "Adquisición de MCR (Mineração Corumbaense Reunida) por el Grupo J&F y cambio de nombre a LHG Mining."
    },
    {
      year: "2023",
      title: "Expansión de operaciones",
      description: "Ampliación de la capacidad productiva y mejoras en la infraestructura logística."
    },
    {
      year: "2024",
      title: "Innovación sostenible",
      description: "Implementación de nuevas tecnologías para reducir el impacto ambiental y aumentar la eficiencia."
    }
  ];

  const values = [
    {
      icon: <FaUsers size={36} className="text-secondary" />,
      title: "Nuestra gente",
      description: "Valoramos a las personas y creemos en el potencial humano, ofreciendo oportunidades para el crecimiento y desarrollo profesional de nuestros colaboradores."
    },
    {
      icon: <FaLeaf size={36} className="text-secondary" />,
      title: "Sostenibilidad",
      description: "Promovemos prácticas sostenibles en todas nuestras operaciones, buscando minimizar nuestro impacto ambiental y preservar los recursos naturales para las futuras generaciones."
    },
    {
      icon: <FaIndustry size={36} className="text-secondary" />,
      title: "Excelencia operacional",
      description: "Buscamos continuamente la excelencia en todos nuestros procesos, con un enfoque en la calidad, eficiencia y mejora continua."
    },
    {
      icon: <FaGlobeAmericas size={36} className="text-secondary" />,
      title: "Compromiso social",
      description: "Nos comprometemos con el desarrollo de las comunidades donde operamos, creando valor compartido y contribuyendo a su bienestar y progreso."
    }
  ];

  return (
    <>
      <Navbar />
      <div className="pt-20 bg-light">
        {/* Hero Section */}
        <div className="bg-primary-dark text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Quienes Somos</h1>
              <p className="text-xl md:text-2xl leading-relaxed">
                Somos una empresa minera comprometida con la sostenibilidad y la excelencia operativa,
                dedicada a la extracción y procesamiento de mineral de hierro y manganeso de alta calidad.
              </p>
            </div>
          </div>
        </div>

        {/* Sobre nosotros */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary-dark mb-8">Nuestra historia</h2>
              <p className="text-lg text-gray-700 mb-6">
                LHG Mining fue fundada en 2022, con la adquisición de MCR (Mineração Corumbaense Reunida) por el Grupo J&F, 
                el mayor grupo empresarial de Brasil. Con puerto propio, logística integrada y operaciones optimizadas de 
                mineral de hierro y mineral de manganeso, LHG Mining representa un nuevo estándar en la industria minera.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Ubicada en Corumbá, Mato Grosso do Sul, Brasil, nuestras operaciones incluyen las minas Santa Cruz y Urucum, 
                que contienen vastas reservas de mineral de hierro de alto tenor y manganeso. Mediante nuestro puerto privado 
                (Puerto Gregório Curvo), podemos transportar nuestros productos eficientemente a mercados globales.
              </p>
              <p className="text-lg text-gray-700 mb-12">
                Como parte del Grupo J&F, compartimos un compromiso con la excelencia, la integridad y la responsabilidad 
                social y ambiental en todas nuestras operaciones.
              </p>

              {/* Línea de tiempo */}
              <div className="relative border-l-4 border-primary pl-8 py-4 mb-16">
                {timeline.map((item, index) => (
                  <div key={index} className="mb-12 relative">
                    <div className="absolute -left-12 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <span className="text-secondary font-bold">{item.year}</span>
                      <h3 className="text-xl font-bold text-primary-dark mt-1 mb-3">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nuestra misión y visión */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-light p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">Nuestra Misión</h3>
                  <p className="text-gray-700 mb-6">
                    Ser los mejores en lo que nos propusimos hacer, asegurando los mejores productos y servicios 
                    a los clientes, solidez a los proveedores, rentabilidad a los accionistas y la oportunidad 
                    de un futuro mejor para todos los colaboradores.
                  </p>
                  <ul className="space-y-2">
                    {["Calidad superior", "Sostenibilidad", "Innovación", "Desarrollo social"].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-light p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">Nuestra Visión</h3>
                  <p className="text-gray-700 mb-6">
                    Ser reconocidos como una empresa minera líder, destacada por la excelencia operativa, 
                    compromiso con la sostenibilidad y generación de valor para todos nuestros grupos de interés.
                  </p>
                  <ul className="space-y-2">
                    {["Liderazgo en el sector", "Excelencia operativa", "Sostenibilidad ambiental", "Impacto social positivo"].map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <FaCheck className="text-secondary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nuestros valores */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-primary-dark mb-4 text-center">Nuestros Valores</h2>
              <p className="text-lg text-gray-700 mb-12 text-center max-w-3xl mx-auto">
                Los valores que guían nuestras decisiones y acciones en el día a día, formando la base 
                de nuestra cultura organizacional.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center">
                    <div className="mb-4 flex justify-center">{value.icon}</div>
                    <h3 className="text-xl font-bold mb-3 text-primary-dark">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Nuestras operaciones - Resumen */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary-dark mb-8">Dónde operamos</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-light p-6 rounded-lg shadow-md text-center">
                  <FaMapMarkedAlt size={36} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-dark mb-2">Minas</h3>
                  <p className="text-gray-700">Minas Santa Cruz y Urucum, en Corumbá, Mato Grosso do Sul, Brasil.</p>
                </div>
                <div className="bg-light p-6 rounded-lg shadow-md text-center">
                  <FaIndustry size={36} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-dark mb-2">Plantas</h3>
                  <p className="text-gray-700">Instalaciones de procesamiento en Corumbá con tecnología de vanguardia.</p>
                </div>
                <div className="bg-light p-6 rounded-lg shadow-md text-center">
                  <FaShip size={36} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-primary-dark mb-2">Puerto</h3>
                  <p className="text-gray-700">Puerto Gregório Curvo para el transporte eficiente de nuestros productos.</p>
                </div>
              </div>
              <div className="text-center">
                <a href="/operaciones" className="inline-flex items-center text-white bg-primary hover:bg-primary-dark px-6 py-3 rounded-lg font-medium transition-colors duration-300">
                  Conocer más sobre nuestras operaciones
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Mensaje del CEO */}
        <section className="py-16 bg-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white p-8 md:p-10 rounded-lg shadow-lg relative border-l-4 border-secondary">
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-6 text-primary-dark">Un mensaje de nuestra dirección</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed italic">
                    "Estamos orgullosos de anunciar que J&F Mining ahora se llama LHG Mining. Un cambio que refleja 
                    la gran transformación que ha experimentado la compañía en los últimos años. Estamos expandiendo 
                    rápidamente nuestro equipo y nuestra producción. Se están realizando muchas inversiones en operación, 
                    logística y gestión."
                  </p>
                  <p className="text-gray-700 mb-8 leading-relaxed italic">
                    "Al igual que todas las empresas del grupo J&F, el negocio minero ahora tiene su propio nombre. 
                    Nuestra nueva marca enfatiza nuestra excelencia, destacando la calidad y los beneficios de nuestro 
                    producto estrella: el granulado de mineral de hierro de alta ley o bultos de alto grado."
                  </p>
                  <div className="flex items-center justify-end">
                    <div className="text-right">
                      <p className="font-bold text-primary-dark text-lg">AGUINALDO FILHO</p>
                      <p className="text-sm text-gray-600">Presidente de J&F Investimentos y LHG Mining</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default QuienesSomos; 