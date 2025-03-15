import { Link } from 'react-router-dom';

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
  link: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, date, summary, imageUrl, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-48 object-cover object-center"
        />
        <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-md text-sm font-medium">
          {date}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{summary}</p>
        <Link 
          to={link} 
          className="text-secondary font-medium hover:underline inline-flex items-center"
        >
          Leer más
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default NewsCard; 