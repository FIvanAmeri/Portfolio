'use client';

import { FiCode, FiZap, FiTarget } from 'react-icons/fi';

export default function Declaracion() {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center rounded-xl p-6 sm:p-8 bg-white/10 dark:bg-gray-700/20 backdrop-blur-md shadow-2xl border border-white/20 dark:border-gray-600/30">
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-snug mb-3">
          Construyendo <span className="text-yellow-400">Soluciones Escalares</span>
        </h1>
        <p className="text-lg text-gray-200 mb-8">
          Desarrollador Full Stack con enfoque en la eficiencia, rendimiento y experiencia de usuario.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6">
          
          <div className="w-full sm:w-1/3 p-4 bg-white/5 dark:bg-gray-800/10 rounded-lg transition-transform hover:scale-[1.02] duration-300">
            <FiCode className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
            <h3 className="text-lg font-semibold text-white mb-1">
              Código Limpio
            </h3>
            <p className="text-sm text-gray-300">
              Arquitecturas modulares y optimizadas para facilitar el mantenimiento y la escalabilidad.
            </p>
          </div>

          <div className="w-full sm:w-1/3 p-4 bg-white/5 dark:bg-gray-800/10 rounded-lg transition-transform hover:scale-[1.02] duration-300">
            <FiZap className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
            <h3 className="text-lg font-semibold text-white mb-1">
              Rendimiento
            </h3>
            <p className="text-sm text-gray-300">
              Experiencia en Next.js y optimización de Core Web Vitals para velocidades de carga ultra rápidas.
            </p>
          </div>

          <div className="w-full sm:w-1/3 p-4 bg-white/5 dark:bg-gray-800/10 rounded-lg transition-transform hover:scale-[1.02] duration-300">
            <FiTarget className="w-8 h-8 mx-auto text-yellow-400 mb-2" />
            <h3 className="text-lg font-semibold text-white mb-1">
              Orientación a Negocio
            </h3>
            <p className="text-sm text-gray-300">
              Transformo requisitos funcionales en soluciones técnicas que impulsan el crecimiento del cliente.
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}