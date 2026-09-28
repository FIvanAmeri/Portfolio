import type { Testimonio, Certificate } from './portfolio';
export const CERTIFICADOS: Certificate[] = [
  { id: 1, src: '/TituloHenry.jpg', alt: 'Certificado Full Stack Henry' },
  { id: 2, src: '/TAHenry.jpg', alt: 'Certificado Teaching Assistant Henry' },
];
export const TESTIMONIOS: Testimonio[] = [
  { id: 1, nombre: 'Lucas D.', puesto: 'CEO, Go Together', empresa: 'Go Together', foto: '/Lucas.png', fotoAlt: 'Foto de Lucas D.', contenido: 'Ivan se comporto con total profesionalismo en todo el alcance del proyecto, teniendo comunicacion activa con nuestra encargada de diseno y comunicacion UX/UI. Super recomendable.', rating: 5, fecha: 'Hace 6 meses', tecnologias: ['JavaScript', 'Website Design', 'HTML', 'Figma'] },
  { id: 2, nombre: 'Victor Padilla Rodriguez', puesto: 'Docente | Capacitador | Consultor', empresa: 'BaraCreativaHn', foto: '/Victor.png', fotoAlt: 'Foto de Victor Padilla Rodriguez', contenido: 'Ivan es un gran desarrollador full stack. Proactivo, dinamico, creativo, con muchos conocimientos y una gran experiencia. Recomendado al 100%.', rating: 5, fecha: '15 de agosto de 2025', tecnologias: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL (SQL)', 'OAuth/NextAuth'] },
  { id: 3, nombre: 'Miguel Angel Gomez Flores', puesto: 'Fullstack Developer', empresa: 'Companero en Henry (Peludopolis)', foto: '/Miguel.png', fotoAlt: 'Foto de Miguel Angel Gomez Flores', contenido: 'Persona profesional y dedicada a encontrar soluciones. Su capacidad de analisis es alta y su disposicion para colaborar es de reconocer.', rating: 5, fecha: '28 de agosto de 2025', tecnologias: ['Next.js', 'React', 'PostgreSQL', 'Nest.js', 'TypeScript'] },
];
