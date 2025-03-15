import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { newsItems } from '../data/contactData';
import { FaArrowLeft } from 'react-icons/fa';

const NoticiasPage: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-primary-dark">
          <div className="absolute inset-0">
            <img 
              src="/galeria/news-hero.jpg" 
              alt="Noticias LHG Mining" 
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Noticias y Actualizaciones
                </h1>
                <p className="text-xl text-white/80">
                  Manténgase informado sobre las últimas novedades de LHG Mining
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home button */}
        <div className="container mx-auto px-4 py-8">
          <Link 
            to="/" 
            className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8"
          >
            <FaArrowLeft className="mr-2" />
            Volver a inicio
          </Link>
        </div>

        {/* News Grid */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
            {newsItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="w-full h-48 object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-md text-sm font-medium">
                    {item.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.summary}</p>
                  <Link 
                    to={item.link} 
                    className="text-secondary font-medium hover:underline inline-flex items-center"
                  >
                    Leer más
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-primary-dark rounded-2xl p-8 md:p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Suscríbase a nuestro boletín</h2>
              <p className="text-white/80 mb-6">Reciba noticias y actualizaciones directamente en su bandeja de entrada</p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Su correo electrónico" 
                  className="flex-1 px-4 py-3 rounded-lg focus:outline-none"
                />
                <button 
                  type="submit" 
                  className="bg-secondary text-white px-6 py-3 rounded-lg font-medium hover:bg-secondary/90 transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NoticiasPage; 