import React from 'react';
import { IconType } from 'react-icons';

interface NavigationItem {
  icon: IconType;
  label: string;
  href: string;
}

interface NavigationIconsProps {
  items: NavigationItem[];
  className?: string;
}

const NavigationIcons: React.FC<NavigationIconsProps> = ({ items, className = "" }) => {
  return (
    <div className={`absolute bottom-32 left-0 right-0 z-20 ${className}`}>
      <div className="w-full max-w-[90%] mx-auto">
        <div className={`flex flex-col-${items.length} gap-8 max-w-4xl`}>
          {items.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="flex flex-col items-center text-white group"
            >
              <div className="w-12 h-12 mb-2 bg-white/5 rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 group-hover:bg-secondary/20">
                {React.createElement(item.icon, {
                  className: "w-8 h-8 text-white transition-colors duration-300 group-hover:text-secondary"
                })}
              </div>
              <span className="
                text-sm sm:text-lg lg:text-xl
                font-light  text-center
                transition-colors duration-300 
                group-hover:text-secondary
              ">
                {item.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationIcons; 
