import React from 'react';
import ContactChannel from './ContactChannel';
import { ContactIcons } from '../../../data/icons';

interface EthicsChannelProps {
  title: string;
  email: string;
  phone: {
    brazil: string;
    international: string;
  };
  description: string;
  reportUrl: string;
}

const EthicsChannel: React.FC<EthicsChannelProps> = ({
  title,
  email,
  phone,
  description,
  reportUrl
}) => {
  return (
    <ContactChannel 
      icon={ContactIcons.Ethics}
      title={title}
    >
      <div className="flex flex-col gap-1 sm:gap-2">
        <a 
          href={`mailto:${email}`} 
          className="  
            text-xs sm:text-sm md:text-base
            text-secondary/70 
            hover:text-secondary 
            transition-colors duration-200
          "
        >
          {email}
        </a>
        {/* Contacto telefónico */}
        <div className="mt-1 sm:mt-2">
          <p className="text-xs sm:text-sm text-white/80">Otros Países: {phone.international}</p>
          <p className="text-xs sm:text-sm text-white/80">Brasil: {phone.brazil}</p>
        </div>
        {/* Descripción */} 
        <p className="text-white/80 mt-1 sm:mt-2 text-xs sm:text-sm">{description}</p>
        {/* Denuncias */}
        <a 
          className="
            mt-2 sm:mt-3 px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-center inline-block 
            text-xs sm:text-sm 
            text-white 
            hover:text-secondary 
            bg-primary-dark/90 
            transition-colors
          "
          href={reportUrl} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Hacer una denuncia
        </a>
      </div>
    </ContactChannel>
  );
};

export default EthicsChannel; 
