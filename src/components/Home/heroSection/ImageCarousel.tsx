import { useEffect, useState } from 'react'

interface ImageCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
}

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);

  // Efecto para el parallax
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Efecto para el cambio automático de imágenes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []); 

  return (
    <div className="absolute inset-0">
      <div 
        className="absolute inset-0 w-full h-[110%] -top-10" 
        style={{ 
          transform: `translateY(${offset * 0.3}px)`, 
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="relative w-full h-full overflow-hidden">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 w-full h-full transition-transform duration-500 ease-in-out ${
                index === currentIndex 
                  ? 'translate-x-0' 
                  : index < currentIndex 
                    ? '-translate-x-full' 
                    : 'translate-x-full'
              }`}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/60 to-transparent"></div>
    </div>
  )
}
