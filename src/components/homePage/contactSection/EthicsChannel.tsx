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
        <div>
          <p className="text-white/80">OTROS PAÍSES: {phone.international}</p>
          <p className="text-white/80">BRASIL: {phone.brazil}</p>
        </div>
        <p className="text-white mt-2 text-sm">{description}</p>
        <a 
          href={reportUrl} 
          className="mt-2 inline-block bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors"
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
