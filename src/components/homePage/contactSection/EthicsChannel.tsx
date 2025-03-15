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
      <div className="flex flex-col gap-2">
        <a 
          href={`mailto:${email}`} 
          className="  
            text-secondary/70 
            hover:text-secondary 
            transition-colors duration-200
          "
        >
          Enviar consulta
        </a>
        {/* Contacto telefónico */}
        <div>
          <p className="text-white/80">Otros Países: {phone.international}</p>
          <p className="text-white/80">Brasil: {phone.brazil}</p>
        </div>
        {/* Descripción */} 
        <p className="text-white mt-2 text-sm my-2">{description}</p>
        {/* Denuncias */}
        <a 
          className="
            mt-2 px-4 py-3 rounded-lg text-center inline-block 
            text-base 
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
