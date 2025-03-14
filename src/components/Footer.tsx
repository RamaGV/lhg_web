import React from 'react';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">LHG Mining</h3>
            <p className="mb-4 text-gray-300">
              Trabajamos con tecnologías pioneras para producir un acero más sostenible.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-secondary transition-colors">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">Quienes Somos</a>
              </li>
              <li>
                <a href="#operations" className="text-gray-300 hover:text-white transition-colors">Operaciones</a>
              </li>
              <li>
                <a href="#sustainability" className="text-gray-300 hover:text-white transition-colors">Sostenibilidad</a>
              </li>
              <li>
                <a href="#news" className="text-gray-300 hover:text-white transition-colors">Noticias</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-300 hover:text-white transition-colors">Galeria</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contacte</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mr-3 mt-1 text-secondary" />
                <span className="text-gray-300">
                  Av. Rio Branco, 1, Centro <br />
                  Rio de Janeiro, RJ <br />
                  Brasil
                </span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3 text-secondary" />
                <span className="text-gray-300">+55 (21) 3333-4444</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-secondary" />
                <a href="mailto:info@lhgmining.com" className="text-gray-300 hover:text-white transition-colors">
                  info@lhgmining.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div id="contact">
            <h3 className="text-xl font-bold mb-6">Contáctenos</h3>
            <form>
              <div className="mb-4">
                <input 
                  type="text" 
                  placeholder="Nombre" 
                  className="w-full px-4 py-2 bg-dark text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="mb-4">
                <input 
                  type="email" 
                  placeholder="Correo electrónico" 
                  className="w-full px-4 py-2 bg-dark text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                />
              </div>
              <div className="mb-4">
                <textarea 
                  placeholder="Mensaje" 
                  rows={3}
                  className="w-full px-4 py-2 bg-dark text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-secondary w-full">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-dark py-4">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} LHG Mining. Todos los derechos reservados.
            </div>
            <div className="flex space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Términos y Condiciones</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Portal de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 