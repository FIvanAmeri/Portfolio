'use client'; 

import Image from 'next/image';
import { useFlipping } from '../hooks/useFlipping';

const PROFILE_IMG = '/yo.jpeg';
const AVATAR_IMG = '/avatar.jpg';

export default function Profile() {
  const { isFlipped, isMounted } = useFlipping();

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-6 -mt-4 md:-mt-10"> 
      <div className="relative w-32 h-32 md:w-50 md:h-50 perspective-1000px"> 
        
        <div 
          className={`absolute inset-0 rounded-full ${isMounted ? 
            'bg-[conic-gradient(from_0deg_at_50%_50%,#f43f5e_0deg,#facc15_90deg,#3b82f6_180deg,#f43f5e_360deg)] animate-spin-slow' 
            : 'bg-transparent'
          }`}
        >
        </div>

        <div className={`absolute inset-0 transition-transform duration-700 transform-style-preserve-3d ${isFlipped ? 'transform-rotateY-180deg' : ''}`}>
        
          <div className="absolute inset-0 p-0.5 rounded-full flip-card-face">
            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <Image
                    src={PROFILE_IMG}
                    alt="Ivan Ameri - Foto de Perfil"
                    className="object-cover rounded-full w-[calc(100%-8px)] h-[calc(100%-8px)]"
                    width={192} 
                    height={192}
                    priority 
                />
            </div>
          </div>
          
          <div className="absolute inset-0 p-0.5 rounded-full flip-card-face transform-rotateY-180deg">
            <div className="relative w-full h-full rounded-full overflow-hidden flex items-center justify-center">
                <Image
                    src={AVATAR_IMG}
                    alt="Ivan Ameri - Avatar Ilustrado"
                    className="object-cover rounded-full w-[calc(100%-8px)] h-[calc(100%-8px)]" 
                    width={192} 
                    height={192}
                />
            </div>
          </div>
        </div>
      </div>
      
    
      <div className="text-center md:text-left">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">Ivan Ameri</h2>
        <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">Desarrollador Web Full Stack</p>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1">
          **JavaScript** | **TypeScript** | **React** | **Node.js** | **Next.js** | **Tailwind**
        </p>
      </div>
    </div>
  );
}