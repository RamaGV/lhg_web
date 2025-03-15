import { Link } from 'react-router-dom';
import { FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaTruck, FaUsers, FaNewspaper, FaShieldAlt } from 'react-icons/fa';
import { contactChannels, newsItems } from '../data/contactData';
import NewsCard from '../components/Home/contact/NewsCard';

export default function ContactSection() {
  // Solo mostramos las dos noticias más recientes
  const recentNews = newsItems.slice(0, 2);

  return (
    <section id="contact" className="py-24 bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary uppercase tracking-wider font-medium">Comuníquese con Nosotros</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Contacte</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Columna izquierda: Información de contacto */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-8 text-primary border-b border-gray-200 pb-4">Canales de Contacto</h3>
            
            <div className="space-y-6">
              {/* Canal comercial */}
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <FaEnvelope className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{contactChannels.commercial.title}</h4>
                  <a href={`mailto:${contactChannels.commercial.email}`} className="text-secondary hover:underline">
                    {contactChannels.commercial.email}
                  </a>
                </div>
              </div>
              
              {/* Canal de proveedores */}
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <FaTruck className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{contactChannels.suppliers.title}</h4>
                  <a href={`mailto:${contactChannels.suppliers.email}`} className="text-secondary hover:underline">
                    {contactChannels.suppliers.email}
                  </a>
                </div>
              </div>
              
              {/* Canal RH */}
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <FaUsers className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{contactChannels.hr.title}</h4>
                  <a href={contactChannels.hr.url} className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    {contactChannels.hr.url}
                  </a>
                </div>
              </div>
              
              {/* Canal de prensa */}
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <FaNewspaper className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{contactChannels.press.title}</h4>
                  <a href={`mailto:${contactChannels.press.email}`} className="text-secondary hover:underline">
                    {contactChannels.press.email}
                  </a>
                  <p className="text-gray-700">{contactChannels.press.phone}</p>
                </div>
              </div>
              
              {/* Canal Ético */}
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <FaShieldAlt className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{contactChannels.ethics.title}</h4>
                  <a href={`mailto:${contactChannels.ethics.email}`} className="text-secondary hover:underline">
                    {contactChannels.ethics.email}
                  </a>
                  <p className="text-gray-700">BRASIL: {contactChannels.ethics.phone.brazil}</p>
                  <p className="text-gray-700">OTROS PAÍSES: {contactChannels.ethics.phone.international} (llamada por cobrar)</p>
                  <p className="text-gray-600 mt-2 text-sm">{contactChannels.ethics.description}</p>
                  <a 
                    href={contactChannels.ethics.reportUrl} 
                    className="mt-2 inline-block bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Hacer una denuncia
                  </a>
                </div>
              </div>
            </div>
            
            {/* Dirección física */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-4">
                <div className="bg-secondary/10 p-3 rounded-full">
                  <FaMapMarkerAlt className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Oficina Principal</h4>
                  <p className="text-gray-700">
                    Av. das Nações Unidas, 14401 - Chácara Santo Antônio<br />
                    São Paulo, SP 04794-000, Brasil
                  </p>
                </div>
              </div>
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
                  date={news.date}
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
