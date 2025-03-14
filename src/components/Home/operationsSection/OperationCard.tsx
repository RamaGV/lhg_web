import React from 'react';

// Define an interface for the operation object
interface Operation {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// Define props for the OperationCard component
interface OperationCardProps {
  operation: Operation;
}

const OperationCard: React.FC<OperationCardProps> = ({ operation }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg transition-all duration-300 hover:bg-white/20">
      <div className="flex items-center mb-3">
        {operation.icon}
        <h3 className="text-xl font-bold text-white ml-3">{operation.title}</h3>
      </div>
      <p className="text-white/80">
        {operation.description}
      </p>
    </div>
  );
};

export default OperationCard;