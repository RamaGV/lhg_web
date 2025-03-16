import React from 'react';
import { FooterIcons } from '../data/icons'; // Import icons from data

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="py-4 sm:py-6 px-4 sm:px-8 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Company Info and Social Media */}
          <div className="space-y-6 sm:space-y-8 md:space-y-12 px-2 sm:px-4 md:px-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
              <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-0 max-w-xs">
                Trabajamos con tecnologías pioneras para producir un acero más sostenible.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a href="#" className="text-white hover:text-secondary transition-colors">
                  {FooterIcons.LinkedIn}
                </a>
                <a href="#" className="text-white hover:text-secondary transition-colors">
                  {FooterIcons.Facebook}
                </a>
                <a href="#" className="text-white hover:text-secondary transition-colors">
                  {FooterIcons.Twitter}
                </a>
                <a href="#" className="text-white hover:text-secondary transition-colors">
                  {FooterIcons.Instagram}
                </a>
              </div>
            </div>

            <div className="mt-4 sm:mt-6">
              <div className="flex flex-col sm:flex-row justify-between">
                <div className="text-gray-300 mb-4 sm:mb-0">
                  <div className="flex items-start space-x-2">
                    <span className="mt-1">{FooterIcons.Location}</span>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-300">Av. Rio Branco, 1, Centro</p>
                      <p className="text-xs sm:text-sm text-gray-300">Rio de Janeiro, RJ</p>
                      <p className="text-xs sm:text-sm text-gray-300">Brasil</p>
                    </div>
                  </div>
                </div>
                <div className="text-gray-300 sm:text-right">
                  <div className="flex items-center space-x-2 mb-1">
                    <span>{FooterIcons.Phone}</span>
                    <span className="text-xs sm:text-sm">+55 (21) 3333-4444</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span>{FooterIcons.Email}</span>
                    <a 
                      href="mailto:info@lhgmining.com" 
                      className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
                    >
                      info@lhgmining.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter / Contact Form */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            <form>
              <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
                <div className="md:flex-1 space-y-2">
                  <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base bg-dark text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base bg-dark text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div className="md:flex-1">
                  <textarea 
                    placeholder="Mensaje" 
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 text-sm sm:text-base bg-dark text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-secondary w-full mt-2 text-sm sm:text-base py-2 sm:py-3">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 