import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-secondary uppercase tracking-wider font-medium">Comuníquese con Nosotros</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Contacte</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Formulario de contacto */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-primary">Envíenos un mensaje</h3>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nombre</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Su nombre" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="ejemplo@correo.com" 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Asunto</label>
                <input 
                  type="text" 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Asunto de su mensaje" 
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Mensaje</label>
                <textarea 
                  id="message" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent h-32"
                  placeholder="Escriba su mensaje aquí..." 
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
          
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-primary">Información de contacto</h3>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Para cualquier consulta o información adicional sobre nuestros servicios, productos o oportunidades laborales, no dude en contactarnos. Nuestro equipo está disponible para atenderle.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <FaMapMarkerAlt className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Oficina Principal</h4>
                  <p className="text-gray-700">Av. das Nações Unidas, 14401 - Chácara Santo Antônio<br />São Paulo, SP 04794-000, Brasil</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Correo electrónico</h4>
                  <p className="text-gray-700">contacto@lhgmining.com</p>
                  <p className="text-gray-700">negocios@lhgmining.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-secondary/10 p-3 rounded-full mr-4">
                  <FaPhone className="text-secondary" size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Teléfono</h4>
                  <p className="text-gray-700">+55 11 3035-3500</p>
                </div>
              </div>
            </div>
            
            {/* Redes sociales */}
            <div>
              <h4 className="font-bold text-gray-800 mb-3">Síganos en:</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors"
                  aria-label="Twitter"
                >
                  <FaTwitter size={20} />
                </a>
                <a 
                  href="#" 
                  className="bg-primary text-white p-3 rounded-full hover:bg-secondary transition-colors"
                  aria-label="Instagram"
                >
                  <FaInstagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mapa */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg h-96 relative">
          {/* Aquí normalmente iría un mapa interactivo con Google Maps o similar */}
          {/* Por ahora usamos una imagen de placeholder */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3')] bg-cover bg-center">
            <div className="absolute inset-0 bg-primary/20"></div>
          </div>
          <div className="absolute top-8 left-8 bg-white p-4 rounded-lg shadow-md">
            <h4 className="font-bold text-primary">LHG Mining</h4>
            <p className="text-sm text-gray-700">Oficina central, São Paulo</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 