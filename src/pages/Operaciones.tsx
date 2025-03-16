import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaMountain, FaShip, FaIndustry, FaCogs, FaLeaf, FaCheckCircle, FaWater, FaTree, FaMapMarkerAlt, FaWarehouse, FaExchangeAlt, FaGlobeAmericas } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Operaciones: React.FC = () => {
  // Datos de las minas
  const mines = [
    {
      name: "Mina de Santa Cruz",
      description: "Ubicada en Corumbá, este complejo minero explota yacimientos de mineral de hierro de alto tenor, a cielo abierto, y está en funcionamiento desde 1974. Su principal producto es el granulado (lump) de alto tenor, producto único en el mercado. Adicionalmente, produce un fino natural (sínter feed) con tenor superior a la media del mercado y granulometría que permite alta productividad para la producción de sinterizado.",
      features: [
        "Producción de granulado de alta calidad",
        "Operación de baja emisión de carbono",
        "Sistema de extracción optimizado",
        "Laboratorio para control de calidad"
      ],
      image: "/galeria/mina-santa-cruz.jpg"
    },
    {
      name: "Mina de Urucum",
      description: "En operación desde 1903, cuenta con una extracción de mineral de hierro a cielo abierto y una extracción subterránea de manganeso, única en el país. Además de granulados y finos de mineral de hierro con calidad similar a los de la mina de Santa Cruz, Urucum produce también un granulado de manganeso con excelente calidad para la producción de ferroaleaciones.",
      features: [
        "Reservas de mineral de alta calidad",
        "Extracción subterránea única de manganeso",
        "Instalaciones de última generación",
        "Procesos sostenibles de extracción",
        "Recuperación ambiental progresiva"
      ],
      image: "/galeria/mina-urucum.jpg"
    }
  ];

  // Datos del sistema logístico
  const logisticSections = [
    {
      title: "Puertos fluviales",
      description: "El mineral se transporta por carretera o ferrocarril a dos puertos fluviales en el río Paraguay: el puerto Gregório Curbo, propiedad de LHG Mining, y el puerto asociado Granel Química.",
      icon: <FaShip className="text-4xl text-secondary" />
    },
    {
      title: "Navegación fluvial",
      description: "La producción baja por la hidrovía de los ríos Paraguay y Paraná en dirección al mar en barcazas de Transbarge Navegación (TBN), empresa de navegación fluvial propia con sede en Asunción, o en embarcaciones de terceros.",
      icon: <FaWater className="text-4xl text-secondary" />
    },
    {
      title: "Terminal marítima",
      description: "Después de 2,5 mil quilómetros de hidrovía, las barcazas llegan a la terminal marítima de Nueva Palmira, en Uruguay. Allí se cargan navíos handy-maxes, panamaxes y baby-capes con cantidades de hasta 45 mil toneladas.",
      icon: <FaWarehouse className="text-4xl text-secondary" />
    },
    {
      title: "Mercado interno",
      description: "Los clientes del mercado brasileño son atendidos por medio de las terminales de transporte terrestre de Tupacery y Antônio Maria Coelho, en el municipio de Corumbá, además de las terminales de transbordo ferroviario de Suzano e Itutinga.",
      icon: <FaExchangeAlt className="text-4xl text-secondary" />
    }
  ];

  // Datos de procesamiento y producción
  const productionInfo = [
    {
      title: "Procesamiento en seco",
      description: "El 80% de la producción de mineral de hierro se realiza a través de procesamiento en seco. La minería en seco utiliza cantidades menores de agua y, por lo tanto, no genera residuos y elimina la construcción de represas. Prácticamente todo el material manipulado se convierte en producto final.",
      icon: <FaWater className="text-4xl text-secondary" />
    },
    {
      title: "Sistema de filtrado",
      description: "Desde julio de 2023, tras la instalación de un sistema de filtración, LHG Mining dejó de utilizar presas, incluso para el 20% de la producción procesada en húmedo. La meta es que el 100% de la producción pase a ser en seco, reduciendo aún más el impacto ambiental.",
      icon: <FaCogs className="text-4xl text-secondary" />
    },
    {
      title: "Granulado (lump)",
      description: "El principal producto es el granulado de mineral de hierro de alta ley. Este 'natural pellet' permite reducir las emisiones de CO2 en un promedio de 70 kg por tonelada de acero, en comparación con el aglomerado sinterizado, y 60 kg comparado con la pelota de mineral de hierro.",
      icon: <FaIndustry className="text-4xl text-secondary" />
    },
    {
      title: "Natural pellet",
      description: "LHG Mining desarrolla un nuevo producto, el 'natural pellet', para aplicación en la ruta de producción del acero que utiliza tecnologías de Reducción Directa y horno eléctrico, emitiendo casi 40% menos de CO2 por tonelada de acero en comparación con métodos tradicionales.",
      icon: <FaTree className="text-4xl text-secondary" />
    }
  ];

  // Puntos en el mapa
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
      name: "Terminales Tupacery",
      position: { top: "36%", left: "46%" },
      type: "terminal"
    },
    {
      name: "Hidrovía Paraguay-Paraná",
      position: { top: "50%", left: "52%" },
      type: "route"
    },
    {
      name: "Terminal Nueva Palmira",
      position: { top: "70%", left: "60%" },
      type: "port"
    }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero section */}
        <div className="relative h-[60vh] overflow-hidden">
          <img 
            src="/galeria/Operacao-de-embarque-PCG.jpg" 
            alt="Operaciones LHG Mining" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/60 to-primary-dark/30"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container-custom">
              <div className="max-w-3xl">
                <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-6">
                  <FaArrowLeft className="mr-2" /> Volver al inicio
                </Link>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Nuestras Operaciones</h1>
                <div className="w-32 h-1 bg-secondary mb-6"></div>
                <p className="text-xl text-white/90 max-w-2xl">
                  Desde la extracción hasta la entrega, cada etapa de nuestras operaciones se rige por los más altos estándares de calidad, eficiencia y sostenibilidad.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Visión general con mapa */}
        <section className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Cadena Productiva Integrada
              </h2>
              <div className="w-24 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                LHG Mining llega al mercado con una estructura liviana y la capacidad de invertir en la expansión de sus vastas reservas de mineral de hierro de alta ley, con el objetivo de ser una solución confiable para la cadena de producción de acero sostenible.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-10 mb-16">
              {/* Mapa de operaciones */}
              <div className="lg:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-xl bg-light p-4 h-full">
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">Presencia Operativa</h3>
                  <div className="relative h-[500px] rounded-lg overflow-hidden border border-gray-200">
                    <img 
                      src="/galeria/mapa-operaciones.jpg" 
                      alt="Mapa de operaciones LHG Mining" 
                      className="w-full h-full object-cover"
                    />
                    {/* Puntos en el mapa */}
                    {mapLocations.map((location, index) => (
                      <div 
                        key={index}
                        className={`absolute flex flex-col items-center ${
                          location.type === 'mine' ? 'text-red-500' : 
                          location.type === 'port' ? 'text-blue-500' : 
                          location.type === 'terminal' ? 'text-green-500' : 'text-yellow-500'
                        }`}
                        style={{ 
                          top: location.position.top, 
                          left: location.position.left 
                        }}
                      >
                        <FaMapMarkerAlt className="text-2xl" />
                        <span className="text-xs font-bold bg-white/90 px-1 rounded">{location.name}</span>
                      </div>
                    ))}
                    
                    {/* Leyenda del mapa */}
                    <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-lg text-xs">
                      <div className="flex items-center mb-1">
                        <span className="block w-3 h-3 rounded-full bg-red-500 mr-1"></span>
                        <span>Minas</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="block w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                        <span>Puertos</span>
                      </div>
                      <div className="flex items-center mb-1">
                        <span className="block w-3 h-3 rounded-full bg-green-500 mr-1"></span>
                        <span>Terminales</span>
                      </div>
                      <div className="flex items-center">
                        <span className="block w-3 h-3 rounded-full bg-yellow-500 mr-1"></span>
                        <span>Rutas</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Información general */}
              <div className="lg:w-1/2">
                <div className="bg-light p-8 rounded-lg shadow-md mb-6">
                  <FaGlobeAmericas className="text-5xl text-secondary mb-4" />
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">Nuestra Presencia</h3>
                  <p className="text-gray-700 mb-4">
                    En 2022, LHG Mining nació a través de la adquisición de MCR (Mineração Corumbaense Reunida) en Corumbá, Mato Grosso do Sul. Los minerales de hierro y manganeso vienen de dos minas de alto tenor en la región.
                  </p>
                  <p className="text-gray-700">
                    El sistema integrado de logística de la empresa incluye una empresa de logística fluvial y un puerto propio, además de un puerto aliado en la región de Corumbá, una terminal marítima en Nueva Palmira, en Uruguay, y también terminales de transporte terrestre para el mercado interno.
                  </p>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-lg border border-primary/10">
                  <h3 className="text-xl font-bold text-primary-dark mb-3">Objetivo estratégico</h3>
                  <p className="text-gray-700">
                    Nuestro objetivo es convertirse en una solución única y confiable para la cadena de producción de acero más sostenible, permitiendo una reducción significativa de las emisiones de gases de efecto invernadero a través de nuestros productos de alta calidad y procesos innovadores.
                  </p>
                </div>
              </div>
            </div>

            {/* Áreas principales de operación */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-light p-8 rounded-lg shadow-md">
                <FaMountain className="text-5xl text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-primary-dark mb-3">Extracción</h3>
                <p className="text-gray-700">
                  Explotación de minas con tecnología de punta, priorizando la eficiencia operativa y el cuidado del medio ambiente en nuestras operaciones de Santa Cruz y Urucum.
                </p>
              </div>
              
              <div className="bg-light p-8 rounded-lg shadow-md">
                <FaCogs className="text-5xl text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-primary-dark mb-3">Procesamiento</h3>
                <p className="text-gray-700">
                  Beneficio y procesamiento del mineral con métodos innovadores que eliminan la necesidad de presas de relaves, utilizando principalmente procesamiento en seco.
                </p>
              </div>
              
              <div className="bg-light p-8 rounded-lg shadow-md">
                <FaShip className="text-5xl text-secondary mb-4" />
                <h3 className="text-2xl font-bold text-primary-dark mb-3">Logística</h3>
                <p className="text-gray-700">
                  Sistema logístico integrado con puerto propio en el río Paraguay y navegación fluvial hasta la terminal marítima en Uruguay, optimizando el transporte.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Minas */}
        <section id="minas" className="py-20 bg-light">
          <div className="container-custom">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Nuestras Minas
              </h2>
              <div className="w-24 h-1 bg-secondary mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl">
                Operamos dos importantes complejos mineros en la región de Mato Grosso do Sul, de donde extraemos mineral de hierro y manganeso de alta calidad con operaciones optimizadas y sostenibles.
              </p>
            </div>

            <div className="space-y-16">
              {mines.map((mine, index) => (
                <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                  <div className="md:w-1/2">
                    <div className="rounded-lg overflow-hidden shadow-xl">
                      <img src={mine.image} alt={mine.name} className="w-full h-96 object-cover" />
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold text-primary-dark mb-4">{mine.name}</h3>
                    <p className="text-gray-700 mb-6">{mine.description}</p>
                    <div className="space-y-2">
                      {mine.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <FaCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sistema Logístico */}
        <section id="logistica" className="py-20 bg-white">
          <div className="container-custom">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Sistema Logístico Integrado
              </h2>
              <div className="w-24 h-1 bg-secondary mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl">
                Nuestro sistema logístico integrado es uno de los grandes diferenciales de LHG Mining, permitiendo transportar el mineral desde la mina hasta el puerto de manera eficiente y competitiva.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {logisticSections.map((section, index) => (
                <div key={index} className="bg-light p-8 rounded-lg shadow-md">
                  <div className="mb-4">{section.icon}</div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">{section.title}</h3>
                  <p className="text-gray-700">{section.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Ventajas de nuestro sistema logístico</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <FaCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Reducción de costos de transporte</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Menor impacto ambiental</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Mayor control de calidad del producto</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Optimización de tiempos de entrega</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Flexibilidad para responder a demandas del mercado</span>
                </div>
                <div className="flex items-start">
                  <FaCheckCircle className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Mayor competitividad en el mercado global</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Procesamiento y Producción */}
        <section id="produccion" className="py-20 bg-light">
          <div className="container-custom">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-4">
                Procesamiento y Producción Sostenible
              </h2>
              <div className="w-24 h-1 bg-secondary mb-6"></div>
              <p className="text-xl text-gray-700 max-w-3xl">
                Nuestros procesos de beneficio y producción combinan tecnología avanzada con prácticas sostenibles, lo que nos permite ofrecer productos de alta calidad con menor impacto ambiental.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {productionInfo.map((item, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                  <div className="mb-4">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-primary-dark mb-3">{item.title}</h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary/5 p-8 rounded-lg border border-primary/10">
              <h3 className="text-2xl font-bold text-primary-dark mb-4">Beneficios ambientales</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                <div className="flex items-start">
                  <FaLeaf className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Eliminación de presas de relaves</span>
                </div>
                <div className="flex items-start">
                  <FaLeaf className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Reducción de consumo de agua</span>
                </div>
                <div className="flex items-start">
                  <FaLeaf className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Menor emisión de CO2 en la cadena productiva</span>
                </div>
                <div className="flex items-start">
                  <FaLeaf className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Recuperación progresiva de áreas minadas</span>
                </div>
                <div className="flex items-start">
                  <FaLeaf className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Menor impacto en ecosistemas locales</span>
                </div>
                <div className="flex items-start">
                  <FaLeaf className="text-secondary mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">Contribución a la reducción de emisiones en la industria siderúrgica</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Operaciones; 