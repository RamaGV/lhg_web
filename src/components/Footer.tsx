import React from 'react';
import { FooterIcons } from '../data/icons'; // Import icons from data

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="py-6 px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info and Social Media */}
          <div className="space-y-12 px-6">
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-300">
                Trabajamos con tecnologías pioneras para producir un acero más sostenible.
              </p>
              <div className="flex space-x-4">
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

            <div className="mt-6">
              <div className="flex justify-between">
                <div className="text-gray-300">
                  <div className="flex space-x-2">
                    {FooterIcons.Location}
                    <span className="text-gray-300">Av. Rio Branco, 1, Centro</span><br />
                    <span className="text-gray-300">Rio de Janeiro, RJ</span><br />
                    <span className="text-gray-300">Brasil</span>
                  </div>
                </div>
                <div className="text-gray-300 text-right">
                  <div className="flex space-x-2">
                    {FooterIcons.Phone} +55 (21) 3333-4444
                  </div>
                  <div className="flex space-x-2">
                    {FooterIcons.Email} <a href="mailto:info@lhgmining.com" className="text-gray-300 hover:text-white transition-colors">info@lhgmining.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Newsletter / Contact Form */}
          <div className="space-y-12">
            <form>
              <div className="flex space-x-4">
                <div className="flex-1 space-y-2">
                  <input 
                    type="text" 
                    placeholder="Nombre" 
                    className="w-full px-4 py-2 bg-dark text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                  <input 
                    type="email" 
                    placeholder="Correo electrónico" 
                    className="w-full px-4 py-2 bg-dark text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  />
                </div>
                <div className="flex-1 ">
                  <textarea 
                    placeholder="Mensaje" 
                    rows={3}
                    className="w-full px-4 py-2 bg-dark text-white border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                  ></textarea>
                </div>
              </div>
              <button type="submit" className="btn btn-secondary w-full mt-2">
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