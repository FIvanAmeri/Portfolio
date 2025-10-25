'use client';

import { useCarousel } from '../hooks/useCarousel'; 
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';


interface Testimonio {
  id: number;
  nombre: string;
  puesto: string;
  empresa: string;
  foto: string;
  contenido: string;
  rating: number;
  fecha: string;
  tecnologias: string[];
}


const TESTIMONIALES: Testimonio[] = [
  {
    id: 1,
    nombre: 'Lucas D.',
    puesto: 'CEO, Go Together',
    empresa: 'Go Together',
    foto: '/Lucas.png',
    contenido: 'Iván se comportó con total profesionalismo en todo el alcance del proyecto, teniendo comunicación activa con nuestra encargada de diseño y comunicación UX/UI. Super recomendable.',
    rating: 5,
    fecha: 'Hace 6 meses',
    tecnologias: ['JavaScript', 'Website Design', 'HTML', 'Figma'],
  },
  {
    id: 2,
    nombre: 'Víctor Padilla Rodríguez',
    puesto: 'Docente | Capacitador | Consultor',
    empresa: 'BaraCreativaHn',
    foto: '/Victor.png',
    contenido: 'Iván es un gran desarrollador full stack. Proactivo, dinámico, creativo, con muchos conocimientos y una gran experiencia. Es una persona accesible, servicial que está dispuesto a dar todo para lograr las metas y objetivos. Definitivamente un gran elemento para cualquier equipo de trabajo. Recomendado al 100%',
    rating: 5,
    fecha: '15 de agosto de 2025',
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL (SQL)', 'OAuth/NextAuth'],
  },
  {
    id: 3,
    nombre: 'Miguel Angel Gomez Flores',
    puesto: 'Fullstack Developer',
    empresa: 'Compañero en Henry (Peludópolis)',
    foto: '/Miguel.png',
    contenido: 'Tuve la oportunidad de conocer a Iván durante nuestros estudios en Henry; puedo decir que es una persona profesional y dedicada a encontrar soluciones para los problemas que se presentan en los proyectos, su capacidad de análisis es bastante alta y su disposición para colaborar siempre que se necesita es de reconocer. Sin duda si tienes la oportunidad de colaborar con él, lo recomiendo totalmente.',
    rating: 5,
    fecha: '28 de agosto de 2025',
    tecnologias: ['Next.js', 'React', 'PostgreSQL', 'Nest.js', 'TypeScript'],
  },
];


export default function Testimonios() {
  const { currentIndex, setCurrentIndex, nextItem, prevItem, transitioning } = useCarousel(TESTIMONIALES.length, 7000, 500);
  
  const currentTestimonio = TESTIMONIALES[currentIndex];

  const transitionClasses = transitioning 
    ? 'opacity-0 translate-x-[-10px]' 
    : 'opacity-100 translate-x-0';


  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
          Lo que Dicen de Mí
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          Experiencias de colaboradores y clientes que validan mi compromiso y profesionalismo.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto rounded-xl p-6 sm:p-10 bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm shadow-xl border border-white/10 flex flex-col items-center">
        

        <div 
          key={currentIndex} 
          className={`text-center text-gray-200 w-full transition-all duration-500 ease-in-out ${transitionClasses}`}
        > 
          <div className="flex justify-center mb-4">
            {[...Array(currentTestimonio.rating)].map((_, i) => (
              <FiStar key={i} className="text-yellow-400 w-6 h-6 fill-current" />
            ))}
          </div>
          
     
          <div className="flex flex-col items-center justify-center min-h-40 sm:min-h-32 transition-opacity duration-300 mb-6">
             <p className="italic text-lg sm:text-xl leading-relaxed">
               "{currentTestimonio.contenido}"
             </p>
          </div>
          
       
          <div className="mb-4">
            <p className="font-semibold text-white text-lg">{currentTestimonio.nombre}</p>
            <p className="text-sm text-gray-400">{currentTestimonio.puesto}</p>
            <p className="text-xs text-gray-500">{currentTestimonio.empresa}</p>
          </div>

          {currentTestimonio.tecnologias.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {currentTestimonio.tecnologias.map((tech: string, idx: number) => (
                <span key={idx} className="bg-blue-600/30 text-blue-200 text-xs px-3 py-1 rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          )}
          <p className="text-xs text-gray-500 mt-2">{currentTestimonio.fecha}</p>
        </div>

   
        {TESTIMONIALES.length > 1 && (
          <>
            <button
              onClick={prevItem}
              disabled={transitioning}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/40 text-white hover:bg-black/60 transition-colors z-20 rounded-full ${transitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FiChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextItem}
              disabled={transitioning}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black/40 text-white hover:bg-black/60 transition-colors z-20 rounded-full ${transitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FiChevronRight className="w-6 h-6" />
            </button>
          </>
        )}


        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {TESTIMONIALES.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full cursor-pointer ${
                index === currentIndex ? 'bg-yellow-400' : 'bg-gray-400 opacity-60'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}