'use client';

import Image from 'next/image';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface TogetherProps {
  title: string;
  description: string;
  technologies: string[];
  imageAlt: string;
}

export default function Together({ 
  title, 
  description, 
  technologies, 
  imageAlt
}: TogetherProps) {
  
  const { elementRef, isVisible, isMounted } = useScrollReveal<HTMLDivElement>();

  const animationClasses = isMounted ? (isVisible 
    ? 'opacity-100 translate-y-0 blur-0' 
    : 'opacity-0 translate-y-10 blur-lg') 
    : 'opacity-0';

  return (
    <div
      ref={elementRef}
      className={`
        bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-xl
        transition-all duration-1000 ease-in-out transform
        ${animationClasses}
        max-w-4xl mx-auto -my-10
        flex flex-col md:flex-row gap-8 items-center
        min-h-[300px] 
      `}
    >
      
      <div className="md:w-1/2 w-full rounded-lg group relative z-10"> 
        <Image
          src="/Together.png"
          alt={imageAlt}
          width={500}
          height={300}
          className="rounded-lg shadow-2xl object-cover w-full project-card-image-zoom" 
          unoptimized 
        />
      </div>

      <div className="md:w-1/2 w-full">
        <h3 className="text-3xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>

        <p className="text-gray-700 dark:text-gray-300 mb-4 text-justify">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-sm font-medium rounded-full bg-blue-500 text-white dark:bg-blue-600 dark:text-white"
            >
              {tech}
            </span>
          ))}
        </div> 
      </div>
      
    </div>
  );
}
