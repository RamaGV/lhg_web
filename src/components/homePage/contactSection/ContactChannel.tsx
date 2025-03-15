import React, { ReactNode } from 'react';

interface ContactChannelProps {
  icon: ReactNode;
  title: string;
  children?: ReactNode;
  className?: string;
  link?: string;
  isEmail?: boolean;
}

const ContactChannel: React.FC<ContactChannelProps> = ({ 
  icon, 
  title, 
  children,
  className = "",
  link,
  isEmail = false
}) => {
  const renderLink = () => {
    if (!link) return null;
    
    const href = isEmail ? `mailto:${link}` : link;
    return (
      <a 
        href={href}
        className="
          text-secondary/70 hover:text-secondary 
          transition-colors duration-200
        "
        {...(isEmail ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        {link}
      </a>
    );
  };

  return (
    <div className={`flex items-start gap-4 ${className}`}>
      <div className="bg-primary-dark/40 p-3 rounded-xl"> 
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white/80">{title}</h4>
        {link ? renderLink() : children}
      </div>
    </div>
  );
};

export default ContactChannel; 
