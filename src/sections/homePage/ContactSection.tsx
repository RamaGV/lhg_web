// Data
import { contactChannels, newsItems } from '../../data/contactData';
import { ContactIcons } from '../../data/icons';

// Components
import ContactChannel from '../../components/homePage/contactSection/ContactChannel';
import EthicsChannel from '../../components/homePage/contactSection/EthicsChannel';
import NewsCard from '../../components/homePage/contactSection/NewsCard';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function ContactSection() {
  // Solo mostramos las dos noticias más recientes
  const recentNews = newsItems.slice(0, 2);

  return (
    <section id="contact" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Contacte</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
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
            
            {/* Dirección física */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <ContactChannel 
                icon={ContactIcons.Location}
                title="Oficina Principal"
              >
                <p className="text-gray-700">
                  Av. das Nações Unidas, 14401 - Chácara Santo Antônio<br />
                  São Paulo, SP 04794-000, Brasil
                </p>
              </ContactChannel>
            </div>
          </div>
          
          {/* Columna derecha: Noticias recientes */}
          <div className="flex flex-col">
            <h3 className="text-2xl font-bold mb-8 text-primary">Noticias Recientes</h3>
            
            <div className="grid grid-cols-1 gap-8 mb-8">
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
            
            <div className="mt-auto text-center">
              <Link
                to="/noticias" 
                className="inline-flex items-center text-white bg-secondary hover:bg-secondary/90 px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Ver todas las noticias
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
