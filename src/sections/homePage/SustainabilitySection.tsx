// src/sections/homePage/SustainabilitySection.tsx

// Data
import { mainInitiatives, sustainabilityPrinciples } from '../../data/sustainabilityData';

// Components from Section
import InitiativeCard from '../../components/homePage/sustainabilitySection/InitiativeCard';
import PrincipleCard from '../../components/homePage/sustainabilitySection/PrincipleCard';

// Components from Page
import VerMasButton from '../../components/homePage/VerMasButton';
import Title from '../../components/homePage/Title';

export default function SustainabilitySection() {
  return (
    <section id="sustainability" className="pt-28 bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden relative select-none">
      
      <div className="container-custom relative z-10">
        {/* Encabezado con énfasis especial */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <Title title="Sustentibilidad" type="secondary" />
          <p className="text-lg text-white/70 font-light leading-relaxed max-w-full mx-auto">
            En LHG Mining, la sostenibilidad no es solo una meta, es el eje central de nuestras operaciones.
            Como parte del grupo J&F Investimentos, seguimos directrices claras que combinan
            rendimiento económico con responsabilidad ambiental y social, desarrollando proyectos
            que contribuyen al desarrollo sostenible de las regiones donde operamos.
          </p>
        </div>
        
        {/* Iniciativas principales en cards destacadas */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {mainInitiatives.map((initiative, index) => (
            <InitiativeCard
              key={index}
              icon={initiative.icon}
              title={initiative.title}
              description={initiative.description}
            />
          ))}
        </div>
        
        {/* Sección con imagen y destacados */}
        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="lg:w-1/3">
            <div className="relative">
              <img 
                src="/galeria/sustentabilidade.jpg" 
                alt="Sostenibilidad en LHG Mining" 
                className="rounded-xl shadow-lg w-full object-cover h-[400px] relative z-10"
              />
            </div>
            {/* Call to Action */}
            <div className="text-center mt-16">
              <VerMasButton
                  text="Conocer más sobre nuestra sostenibilidad" 
                to="/sustentibilidad" 
                type="primary"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3 p-6 bg-primary-dark rounded-2xl overflow-hidden">
            <h3 className="text-3xl font-bold text-white mb-6">
              Prácticas Sostenibles que Marcan la Diferencia
            </h3>
            <p className="text-white text-opacity-80 mb-8">
              LHG Mining y su subsidiaria MCR siguen las directrices del grupo J&F Investimentos, 
              aplicando una <strong className="text-secondary">Política de Compra Responsable</strong> con criterios socioambientales y 
              promoviendo acciones en educación, medio ambiente y combate a la corrupción 
              <strong className="text-secondary"> para construir un futuro más justo y sostenible</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sustainabilityPrinciples.map((principle, index) => (
                <PrincipleCard
                  key={index}
                  icon={principle.icon}
                  title={principle.title}
                  description={principle.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
