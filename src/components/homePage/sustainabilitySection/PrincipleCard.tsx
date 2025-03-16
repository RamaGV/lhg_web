interface PrincipleCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const PrincipleCard: React.FC<PrincipleCardProps> = ({ 
  icon, 
  title, 
  description 
}) => {
  return (
    <div className="flex items-start gap-3 sm:gap-4 bg-[#42535D] p-2 py-3 sm:py-4 rounded-xl">
      <div className="p-2 sm:p-3 rounded-lg mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-white mb-1 text-base sm:text-lg">{title}</h4>
        <p className="text-xs sm:text-sm md:text-base text-white text-opacity-80">{description}</p>
      </div>
    </div>
  );
};

export default PrincipleCard;