'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiAward, FiMessageCircle, FiTool, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const CERTIFICADOS = [
  { 
    id: 1, 
    src: '/TituloHenry.jpg',
    alt: 'Certificado de Desarrollador Web Full Stack de Henry' 
  },
  { 
    id: 2, 
    src: '/TAHenry.jpg',
    alt: 'Certificado de Teaching Assistant de Henry' 
  },
];

export default function AcercaDeMi() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCertificado = CERTIFICADOS[currentIndex];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % CERTIFICADOS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + CERTIFICADOS.length) % CERTIFICADOS.length);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center rounded-xl p-8 bg-white/5 dark:bg-gray-800/20 backdrop-blur-sm shadow-xl">
        

        <div className="order-last md:order-first">
          <div className="relative w-full h-80 rounded-xl shadow-2xl overflow-hidden border border-white/10">
            <Image
              src={currentCertificado.src}
              alt={currentCertificado.alt}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500"
              priority
              unoptimized
            />
            
  
            {CERTIFICADOS.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-black/40 text-white hover:bg-black/60 transition-colors z-20 rounded-r-lg"
                >
                  <FiChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-black/40 text-white hover:bg-black/60 transition-colors z-20 rounded-l-lg"
                >
                  <FiChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

       
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
              {CERTIFICADOS.map((_, index) => (
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
        </div>

  
        <div className="order-first md:order-last text-gray-200">
          <h2 className="text-4xl font-extrabold text-white mb-6">
            Mi Trayectoria
          </h2>
          
          <p className="text-lg mb-6">
            Comencé mi camino fascinado por la lógica del Backend y la inmediatez del Frontend, lo que me llevó a convertirme en un <span className="text-yellow-400 font-semibold">Desarrollador Full Stack</span>. Mi filosofía es simple: construir soluciones robustas y escalables que entreguen un valor real y medible al negocio.
          </p>

          <h3 className="text-2xl font-semibold text-white mb-4">
            Formación y Habilidades Únicas
          </h3>
          
          <ul className="space-y-4">
            <li className="flex items-start">
              <FiAward className="shrink-0 text-yellow-400 w-6 h-6 mr-3 mt-1" />
              <div>
                <p className="font-medium text-white">Graduado en Henry y Teaching Assistant</p>
                <p className="text-sm text-gray-300">
                  Certificado como Desarrollador Web Full Stack. La experiencia como TA me dio dominio en las metodologías ágiles y la gestión de equipos.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FiTool className="shrink-0 text-yellow-400 w-6 h-6 mr-3 mt-1" />
              <div>
                <p className="font-medium text-white">Resolución Avanzada de Problemas</p>
                <p className="text-sm text-gray-300">
                  Desarrollé una profunda habilidad para el debugging y el análisis de código complejo, vital para proyectos críticos.
                </p>
              </div>
            </li>
            <li className="flex items-start">
              <FiMessageCircle className="shrink-0 text-yellow-400 w-6 h-6 mr-3 mt-1" />
              <div>
                <p className="font-medium text-white">Comunicación Técnica y Mentoreo</p>
                <p className="text-sm text-gray-300">
                  Capacidad para traducir problemas técnicos complejos a lenguaje de negocio y para formar y guiar a otros desarrolladores.
                </p>
              </div>
            </li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}