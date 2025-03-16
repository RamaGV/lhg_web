import { Link } from 'react-router-dom';

interface NewsCardProps {
  title: string;
  summary: string;
  imageUrl: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, summary, imageUrl, link }) => {
  return (
    <div className="
      bg-white rounded-xl shadow-md 
      overflow-hidden transition-all duration-300 
      hover:shadow-lg
    ">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-32 sm:h-40 md:h-48 object-cover object-center"
        />
      </div>
      <div className="p-4 sm:p-6">
        <h3 className="
          text-lg sm:text-xl 
          font-bold text-gray-900 
          mb-1 sm:mb-2 
          line-clamp-2
        ">
          {title}
        </h3>
        <p className="
          text-sm sm:text-base 
          text-gray-600 
          mb-3 sm:mb-4 
          line-clamp-3
        ">
          {summary}
        </p>
        <Link 
          to={link} 
          className="text-secondary font-medium hover:underline inline-flex items-center text-sm sm:text-base"
        >
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard; 
