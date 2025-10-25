import Profile from "./components/Profile";
import Contactame from "./components/Contactame";
import ProjectCard from "./components/ProjectCard"; 
import Peludopolis from "./components/PeludopolisCard"; 
import Together from "./components/Together";
import Declaracion from "./components/Declaracion"; 
import AcercaDeMi from "./components/AcercaDeMi"; 
import Testimonios from "./components/Testimonios"; 
import CTA_Final from "./components/CTA_Final"; 

const BARA_CREATIVA_HN = {
  title: "BaraCreativaHn - Plataforma E-learning",
  description: "Desarrollo y lanzamiento completo de una plataforma de e-learning robusta y escalable. Incluye gestión de cursos, seguimiento de progreso del estudiante, autenticación social y un sistema de administración de contenido (CMS) avanzado para la publicación de material educativo multimedia. La arquitectura está optimizada para el rendimiento y la experiencia de usuario.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL (SQL)", "OAuth/NextAuth"],
  imageSrc: "/Bara.png",
  imageAlt: "Captura de pantalla de la plataforma BaraCreativaHn E-learning",
  projectUrl: "https://www.baracreativahn.com" 
};

const PELUDOPOLIS_DATA = { 
  title: "Peludópolis - Sistema de Turnos Online",
  description: "Desarrollo de una plataforma completa para la gestión de turnos online para servicios de atención a mascotas (corte de pelo, baño, corte de uñas, etc.). Incluye sistema de pagos integrado con PayPal, reserva de horarios, notificaciones a usuarios y panel de administración para gestionar la disponibilidad y los servicios. Se utilizaron las mismas tecnologías robustas para asegurar escalabilidad.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL (SQL)", "PayPal Integration"],
  imageSrc: "/Peludopolis.png", 
  imageAlt: "Captura de pantalla de la plataforma Peludópolis",
  projectUrl: "https://www.peludopolis.com" 
};

const GO_TOGETHER = {
  title: "Go Together - Consultoría Estratégica y Branding",
  description: "Desarrollo de la presencia digital y herramientas para la firma de consultoría estratégica y branding de La Plata, liderada por Lucas De Cesare. El trabajo se centró en la creación de una plataforma que refleje su enfoque en estrategias de Marketing, Finanzas y Análisis de Datos. Incluyó el diseño de una interfaz profesional que destaca sus casos de éxito y su visión de negocio.",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Marketing Digital", "Branding"],
  imageSrc: "/GoTogether.png",
  imageAlt: "Captura de pantalla de la plataforma Go Together",
  projectUrl: "https://gotogether.com.ar/" 
};


export default function Home() {
  return (
    <main className="min-h-screen p-8"> 
   
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <Profile />
        <div className="w-full md:w-auto mt-4 md:mt-0 flex justify-center md:justify-end">
          <Contactame />
        </div>
      </div>

      <Declaracion />

      <AcercaDeMi /> 

      <div className="futuristic-divider mt-10 mb-16 max-w-5xl mx-auto"></div>


      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-16 text-gray-900 dark:text-white pt-10 mt-0 px-4 leading-none">
        <span className="block lg:inline">Proyectos</span>{" "}
        <span className="block lg:inline">Destacados</span>
      </h2>


     <div className="mt-2">
  <div className="-mb-12">
    <ProjectCard {...BARA_CREATIVA_HN} />
  </div>
  <div className="mb-12">
    <Peludopolis {...PELUDOPOLIS_DATA} /> 
  </div>
  <div className="mb-2 -mt-24">
    <Together {...GO_TOGETHER} />
  </div>
</div>

      <Testimonios />
      <CTA_Final />
      
    </main>
  );
}
