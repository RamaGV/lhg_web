import { HiUserGroup } from 'react-icons/hi';
import { HiCog } from 'react-icons/hi2';
import { PiLeafFill } from 'react-icons/pi';
import ImageCarousel from '../../components/homePage/heroSection/ImageCarousel';
import NavigationIcons from '../../components/homePage/heroSection/NavigationIcons';

export default function HeroSection() {
  const carouselImages = [
    {
      src: '/hero/Instalacao-de-beneficiamento-mina-Santa-Cruz-.jpg',
      alt: 'Operación de embarque LHG Mining',
      title: 'LHG Mining',
      description: 'Comprometidos con la excelencia en la minería sostenible'
    },
    {
      src: '/hero/Lavra-subterranea-manganes-mina-Urucum-.jpg',
      alt: 'Instalaciones LHG Mining',
      title: 'Innovación Minera',
      description: 'Tecnología de vanguardia para un futuro sostenible'
    },
    {
      src: '/hero/Operacoes-Vista-frontal-Porto-Gregorio-Curvo.jpg',
      alt: 'Sostenibilidad LHG Mining',
      title: 'Sostenibilidad',
      description: 'Cuidando el medio ambiente y las comunidades'
    },
    {
      src: '/hero/Vista-aerea-lavra-minerio-de-ferro.jpg',
      alt: 'Sostenibilidad LHG Mining',
      title: 'Sostenibilidad',
      description: 'Cuidando el medio ambiente y las comunidades'
    }
  ];

  const navigationItems = [
    {
      icon: HiUserGroup,
      label: 'Quienes Somos',
      href: '#about'
    },
    {
      icon: HiCog,
      label: 'Operaciones',
      href: '#operations'
    },
    {
      icon: PiLeafFill,
      label: 'Sostenibilidad',
      href: '#sustainability'
    }
  ];

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden select-none"> 
      {/* Background image with parallax effect */}
      <div className="absolute inset-0">
        <ImageCarousel images={carouselImages} />
      </div>
      
      {/* Content */}
      <div className="relative h-full z-10 flex items-center">
        <div className="w-full max-w-[90%] mx-auto">
          <div className="max-w-4xl">
            <h1 className="
              mb-8 leading-tight
              text-3xl md:text-4xl lg:text-6xl xl:text-7xl 
              font-bold text-white 
            ">
              «Trabajamos con tecnologías pioneras para producir un acero más sostenible«
            </h1>
          </div>
        </div>
      </div>
      
      {/* Navigation icons */}
      <NavigationIcons items={navigationItems} />
    </section>
  );
};
