// src/components/homePage/TitleSection.tsx

interface TitleProps {
  title: string;
  type: 'primary' | 'secondary';
}

export default function Title({ title, type }: TitleProps) {
  return (
    <div className="text-center mb-8 sm:mb-12">
      <h2 
        className={`
          font-bold mt-2 mb-3 sm:mb-4 
          text-3xl sm:text-4xl md:text-5xl 
          ${type === 'primary' ? 'text-primary-dark' : 'text-white/90'}
        `}
      >
        {title}
      </h2>
      <div className="w-16 sm:w-24 h-1 bg-secondary mx-auto"></div>
    </div>
  )
}
