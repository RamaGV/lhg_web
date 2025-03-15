
interface InitiativeCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <div 
      className="
        group rounded-xl shadow-lg px-6 py-4 
        bg-white/70
        shadow-primary-dark/70 
        hover:shadow-secondary/10 
        hover:shadow-2xl hover:-translate-y-2 
        transition-all duration-300 
      "
    >
      <div className="mb-6 flex justify-center items-center">
        {icon}
        <h3 className="ml-4 text-xl font-semibold text-primary-dark group-hover:text-secondary/80 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-primary-dark/90 mb-6 min-h-[80px]">
        {description}
      </p>
    </div>
  );
};

export default InitiativeCard;
