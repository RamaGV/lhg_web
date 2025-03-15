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
      <a href={`mailto:${email}`} className="text-secondary hover:underline">
        {email}
      </a>
      <p className="text-gray-700">BRASIL: {phone.brazil}</p>
      <p className="text-gray-700">OTROS PAÍSES: {phone.international} (llamada por cobrar)</p>
      <p className="text-gray-600 mt-2 text-sm">{description}</p>
      <a 
        href={reportUrl} 
        className="mt-2 inline-block bg-primary text-white px-4 py-2 rounded-md text-sm hover:bg-primary/90 transition-colors"
        target="_blank" 
        rel="noopener noreferrer"
      >
        Hacer una denuncia
      </a>
    </ContactChannel>
  );
};

export default EthicsChannel; 