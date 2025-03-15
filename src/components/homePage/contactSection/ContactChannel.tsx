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
    <div className={`flex items-start gap-4 ${className}`}>
      <div className="bg-primary-dark/40 p-3 rounded-xl"> 
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white">{title}</h4>
        {link ? renderLink(link, isEmail) : children}
      </div>
    </div>
  );
};

// Renderiza el contenido del link
const renderLink = (link: string, isEmail: boolean) => {
  if (!link) return null;

  const href = isEmail ? `mailto:${link}` : link;
  const linkText = isEmail ? "Enviar consulta" : "Visitar sitio";

  return (
    <a 
      href={href}
      className="
        text-secondary/70 hover:text-secondary 
        transition-colors duration-200
      "
      {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
    >
      {linkText}
    </a>
  );
};

