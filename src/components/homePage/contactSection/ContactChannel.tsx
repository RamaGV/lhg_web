import { ReactNode } from 'react';

interface ContactChannelProps {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
  className?: string;
  link?: string;
  isEmail?: boolean;
}


export default function ContactChannel({ 
  icon, 
  title, 
  children,
  className = "",
  link,
  isEmail = false
}: ContactChannelProps) {
  return (
    <div className={`flex items-start gap-2 sm:gap-3 md:gap-4 ${className}`}>
      <div className="bg-primary-dark/40 p-2 sm:p-3 rounded-xl"> 
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white text-sm sm:text-base md:text-lg">{title}</h4>
        {link ? renderLink(link, isEmail) : children}
      </div>
    </div>
  );
};

// Renderiza el contenido del link
const renderLink = (link: string, isEmail: boolean) => {
  if (!link) return null;

  const href = isEmail ? `mailto:${link}` : link;
  
  return (
    <div>
      {/* Versión para móviles: muestra el link real */}
      <a 
        href={href}
        className="
          sm:hidden
          text-xs sm:text-sm
          text-secondary/70 hover:text-secondary 
          transition-colors duration-200
        "
        {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {link}
      </a>
      
      {/* Versión para desktop: muestra texto genérico */}
      <a 
        href={href}
        className="
          hidden sm:inline-block
          text-base
          text-secondary/70 hover:text-secondary 
          transition-colors duration-200
        "
        {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {isEmail ? "Enviar mensaje" : "Visitar sitio"}
      </a>
    </div>
  );
};

