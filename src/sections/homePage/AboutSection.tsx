// src/sections/homePage/AboutSection.tsx

// Data
import { beliefs, companyValues } from '../../data/aboutSectionData';

// Components from Section
import BeliefsCarousel from '../../components/homePage/aboutSection/BeliefsCarousel';
import ValuesRotator from '../../components/homePage/aboutSection/ValuesRotator';

// Components from Page
import VerMasButton from '../../components/homePage/VerMasButton';
import Title from '../../components/homePage/Title';

export default function AboutSection() {
  return (
    <section id="about" className="pt-28 pb-12 bg-light select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title title="Quienes Somos" type="primary" />
        
        <div className="flex flex-col space-y-16">
          {/* Main content - 3/4 of the vertical space */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col h-full items-center justify-between space-y-12">
              <h3 className="text-2xl text-start font-bold text-primary-dark ">Liderando el camino hacia una minería más sostenible</h3>
              <div className="text-start mx-4">
                <p className="text-base text-gray-700 leading-relaxed mb-2">
                  LHG Mining fue fundada en 2022, con la adquisición de MCR (Mineração Corumbaense Reunida) por el Grupo J&F, el mayor grupo empresarial de Brasil. Con puerto propio, logística integrada y operaciones optimizadas de mineral de hierro y mineral de manganeso.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Nuestra misión es ser los mejores en lo que nos propusimos hacer, asegurando los mejores productos y servicios a los clientes, solidez a los proveedores, rentabilidad a los accionistas y la oportunidad de un futuro mejor para todos los colaboradores.
                </p>
              </div>
              
              {/* Call to action */}
              <VerMasButton 
                text="Conocer más sobre nosotros" 
                to="/quienes-somos" 
                type="secondary"
              />
            </div>
            
            {/* Values Rotator */}
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/40 to-primary-dark/10 z-10"></div>
              <ValuesRotator companyValues={companyValues} />
              <img 
                src="galeria/mina-urucum.jpg" 
                alt="Minería sostenible" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Beliefs - 1/4 of the vertical space */}
          <div className="w-full">
            <h3 className="
                text-center mb-6 
                text-xl font-semibold
                text-primary-dark
              "
            >Nuestras creencias</h3>
            <BeliefsCarousel beliefs={beliefs} />
          </div>
        </div>
      </div>
    </section>
  );
};
