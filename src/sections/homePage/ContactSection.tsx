// src/sections/homePage/ContactSection.tsx

// Data
import { contactChannels, newsItems } from '../../data/contactData';
import { ContactIcons } from '../../data/icons';

// Components from Contact
import ContactChannel from '../../components/homePage/contactSection/ContactChannel';
import EthicsChannel from '../../components/homePage/contactSection/EthicsChannel';
import NewsCard from '../../components/homePage/contactSection/NewsCard';

// Components from Page
import VerMasButton from '../../components/homePage/VerMasButton';
import Title from '../../components/homePage/Title';


export default function ContactSection() {
  // Solo mostramos las dos noticias más recientes
  const recentNews = newsItems.slice(0, 2);

  return (
    <section id="contact" className="pt-24 pb-12 bg-light select-none">
      <div className="container mx-auto px-4">
        <Title title="Contacto" type="primary" />
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Columna izquierda: Información de contacto */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-950 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-white border-b border-gray-200 pb-4">Canales de Contacto</h3>
            
            {/* Grid de 2x2 para los canales simples */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Canal comercial */}
              <ContactChannel 
                icon={ContactIcons.Email}
                title={contactChannels.commercial.title}
                link={contactChannels.commercial.email}
                isEmail={true}
              />
              
              {/* Canal de proveedores */}
              <ContactChannel 
                icon={ContactIcons.Suppliers}
                title={contactChannels.suppliers.title}
                link={contactChannels.suppliers.email}
                isEmail={true}
              />
              
              {/* Canal de prensa */}
              <ContactChannel 
                icon={ContactIcons.Press}
                title={contactChannels.press.title}
                link={contactChannels.press.email}
                isEmail={true}
              />
              
              {/* Canal RH */}
              <ContactChannel 
                icon={ContactIcons.HR}
                title={contactChannels.hr.title}
                link={contactChannels.hr.url}
              />
            </div>
            
            {/* Canal Ético - Ocupa todo el ancho */}
            <div className="border-t border-gray-200 pt-8">
              <EthicsChannel 
                title={contactChannels.ethics.title}
                email={contactChannels.ethics.email}
                phone={contactChannels.ethics.phone}
                description={contactChannels.ethics.description}
                reportUrl={contactChannels.ethics.reportUrl}
              />
            </div>
          </div>
          
          {/* Columna derecha: Noticias recientes */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-8 text-primary-dark">Noticias Recientes</h3>
            
            <div className="grid grid-cols-2 gap-8 mb-8">
              {recentNews.map((news) => (
                <NewsCard 
                  key={news.id}
                  title={news.title}
                  summary={news.summary}
                  imageUrl={news.imageUrl}
                  link={news.link}
                />
              ))}
            </div>
            
            {/* Call to action */}
            <div className="mt-auto text-center">
              <VerMasButton
                text="Ver todas las noticias" 
                to="/noticias" 
                type="primary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
