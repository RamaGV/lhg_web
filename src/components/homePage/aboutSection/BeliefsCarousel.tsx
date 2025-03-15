import { useEffect } from 'react';
import { Belief } from '../../../data/aboutSectionData';

interface BeliefsCarouselProps {
  beliefs: Belief[];
}

const BeliefsCarousel: React.FC<BeliefsCarouselProps> = ({ beliefs }) => {
  // Duplicate beliefs to create an infinite loop effect
  const duplicatedBeliefs = [...beliefs, ...beliefs];
  
  useEffect(() => {
    const carousel = document.querySelector('#beliefs-carousel');
    if (!carousel) return;
    
    let position = 0;
    const speed = 0.5; // Carousel speed (pixels per frame)
    const totalWidth = carousel.scrollWidth / 2; // Half of total width (due to duplication)
    
    const animate = () => {
      position -= speed;
      // Reset position when we reach the halfway point
      if (position <= -totalWidth) {
        position = 0;
      }
      
      // Apply transformation
      (carousel as HTMLElement).style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };
    
    const animationId = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div className="w-full overflow-hidden relative">
      <div id="beliefs-carousel" className="flex">
        {duplicatedBeliefs.map((belief, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center bg-white/20 backdrop-blur-sm p-4 rounded-lg min-w-[180px] max-w-[200px] mx-2 flex-shrink-0"
          >
            <div className="w-16 h-16 mb-3 flex items-center justify-center">
              <img 
                src={`/icons/creencias/${belief.icon}`} 
                alt={belief.title} 
                className="w-12 h-12 object-contain"
              />
            </div>
            <p className="text-center text-primary-dark font-medium">{belief.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeliefsCarousel;