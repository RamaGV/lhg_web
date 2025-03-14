import React from 'react';

const NewsSection: React.FC = () => {
  const news = [
    {
      title: 'LHG Mining lanza primer Reporte de Sustentabilidad',
      date: '15 Feb 2024',
      excerpt: 'LHG Mining lanzó el primer Reporte de Sostenibilidad de la compañía con las principales iniciativas, estrategias y acciones en materia de medio ambiente, sustentabilidad, producción e inversión de la minera durante 2023.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3'
    },
    {
      title: 'LHG Mining patrocina R$ 500.000 para el Instituto Moinho Cultural Sul-Americano',
      date: '28 Ene 2024',
      excerpt: 'LHG Mining anunció la donación de R$ 500.000 al Instituto Moinho Cultural Sul Americano, que atiende anualmente a cerca de 400 niños y adolescentes en situación de vulnerabilidad en la región de Corumbá, Ladário y Bolivia.',
      image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3'
    },
    {
      title: 'LHG Mining participa en el I Congreso de Derecho Ambiental de OAB MG',
      date: '10 Dic 2023',
      excerpt: 'A principios de mes, el Primer Congreso de Derecho Ambiental fue promovido por la OAB Minas Gerais en asociación con la Federación de Industrias del Estado de Minas Gerais (FIEMG).',
      image: 'https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3'
    },
    {
      title: 'LHG amplía contrataciones en Corumbá y recibe a 600 nuevos empleados',
      date: '5 Nov 2023',
      excerpt: 'Hasta el final de 2023, más de 300 personas se incorporarán a las operaciones locales. La empresa ofrece muchas oportunidades en diferentes áreas.',
      image: 'https://images.unsplash.com/photo-1533222481259-ce20eda1e20b?ixlib=rb-4.0.3'
    }
  ];

  return (
    <section id="news" className="py-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Noticias</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {news.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${item.image})` }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-block bg-secondary text-white text-xs px-2 py-1 rounded">
                    {item.date}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold mb-3 line-clamp-2">{item.title}</h3>
                <p className="text-gray-700 mb-4 line-clamp-3">{item.excerpt}</p>
                <a href="#" className="text-primary font-medium hover:text-secondary transition-colors">
                  Leer más →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="btn btn-primary">
            Ver todas las noticias
          </a>
        </div>
        
        <div className="mt-16 bg-light p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 md:pr-10">
              <h3 className="text-2xl font-bold mb-4">Suscríbase a nuestro boletín</h3>
              <p className="text-gray-700 mb-6">
                Reciba actualizaciones periódicas sobre nuestras actividades, proyectos y noticias corporativas.
              </p>
              <form className="flex flex-col sm:flex-row gap-4">
                <input 
                  type="email" 
                  placeholder="Su correo electrónico" 
                  className="flex-grow px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
                <button type="submit" className="btn btn-secondary whitespace-nowrap">
                  Suscribirse
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-3">
                Al suscribirse, acepta nuestra política de privacidad. Puede darse de baja en cualquier momento.
              </p>
            </div>
            <div className="md:w-1/3 mt-6 md:mt-0">
              <div className="relative h-48 w-48 mx-auto">
                <div className="absolute inset-0 bg-secondary rounded-full opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 