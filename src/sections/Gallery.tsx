import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1582580845891-3c161ed555a3?ixlib=rb-4.0.3',
      caption: 'Vista frontal Porto Gregório Curvo'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3',
      caption: 'Mineral de manganeso – mina Urucum'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1581092579146-8189a1d462b6?ixlib=rb-4.0.3',
      caption: 'Lavra subterrânea manganês – Mina Urucum'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1578059457703-850565b053f6?ixlib=rb-4.0.3',
      caption: 'Instalación de beneficio – mina Santa'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1581092160607-ee22b4bd3169?ixlib=rb-4.0.3',
      caption: 'Operaciones de envío Porto Gregório'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1542058704-e6a954fae1f2?ixlib=rb-4.0.3',
      caption: 'Extraccion de mineral de hierro'
    },
  ];

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = galleryImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
    } else {
      newIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(galleryImages[newIndex].id);
  };

  return (
    <section id="gallery" className="py-16 bg-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Galeria</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image) => (
            <div 
              key={image.id} 
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-[1.02]"
              onClick={() => openLightbox(image.id)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center" 
                style={{ backgroundImage: `url(${image.url})` }}
              >
                <div className="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                <p className="text-white font-medium">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex justify-center items-center p-4">
          <button 
            className="absolute top-4 right-4 text-white text-3xl" 
            onClick={closeLightbox}
          >
            &times;
          </button>
          
          <button 
            className="absolute left-4 text-white text-4xl opacity-70 hover:opacity-100"
            onClick={() => navigateImage('prev')}
          >
            &#8249;
          </button>
          
          <button 
            className="absolute right-4 text-white text-4xl opacity-70 hover:opacity-100"
            onClick={() => navigateImage('next')}
          >
            &#8250;
          </button>
          
          <div className="relative max-w-4xl max-h-[80vh]">
            <img 
              src={galleryImages.find(img => img.id === selectedImage)?.url} 
              alt={galleryImages.find(img => img.id === selectedImage)?.caption}
              className="max-h-[80vh] max-w-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
              <p className="text-white text-center font-medium">
                {galleryImages.find(img => img.id === selectedImage)?.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery; 