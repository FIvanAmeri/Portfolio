'use client';

import Link from 'next/link';
import { FiMail, FiPhone } from 'react-icons/fi';

export default function CTA_Final() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-4xl mx-auto text-center bg-blue-900/40 backdrop-blur-md rounded-2xl shadow-2xl p-10 md:p-14 border border-blue-500/30">
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          ¿Listo para Impulsar tu Próximo Proyecto?
        </h2>
        
        <p className="text-xl text-gray-200 mb-8">
          Hablemos de cómo la arquitectura Full Stack, centrada en el valor de negocio, puede escalar tu visión.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          
     
          <Link 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=ivan.ameri.f@gmail.com&su=Contacto%20desde%20Portafolio%20Full%20Stack" 
            passHref
            target="_blank"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-black bg-yellow-400 hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-[1.02]"
          >
            <FiMail className="w-5 h-5 mr-3" />
            Agenda una Reunión Rápida
          </Link>

       
          <Link 
            href="/CV_Ivan_Ameri_Bara.pdf" 
            passHref
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-3 border border-yellow-400 text-base font-medium rounded-full text-yellow-400 bg-transparent hover:bg-yellow-400/10 transition-colors duration-300"
          >
            <FiPhone className="w-5 h-5 mr-3" />
            Ver mi CV
          </Link>

        </div>
      </div>
    </section>
  );
}