// src/components/homePage/TitleSection.tsx

interface TitleProps {
  title: string;
  type: 'primary' | 'secondary';
}

export default function Title({ title, type }: TitleProps) {
  return (
    <div className="text-center mb-16">
          <h2 
            className={
              `font-bold mt-2 mb-4 
                text-4xl md:text-5xl 
                ${type === 'primary' ? 'text-primary-dark' : 'text-white/90'}`
            }
          >{title}</h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>
  )
}
