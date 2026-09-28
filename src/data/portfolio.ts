export interface Project { slug: string; title: string; description: string; technologies: string[]; imageSrc: string; imageAlt: string; projectUrl?: string; linkLabel?: string; }
export interface Testimonio { id: number; nombre: string; puesto: string; empresa: string; foto: string; fotoAlt: string; contenido: string; rating: number; fecha: string; tecnologias: string[]; }
export interface Certificate { id: number; src: string; alt: string; }
export const SITE_CONFIG = { name: 'Ivan Ameri', role: 'Desarrollador Web Full Stack', email: 'ivan.ameri.f@gmail.com', linkedin: 'https://www.linkedin.com/in/ivan-federico-ameri-82770b235', github: 'https://github.com/FIvanAmeri/', cvPath: '/CV_Ivan_Ameri_Bara.pdf' } as const;
export const STACK_LINE: string[] = ['JavaScript', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind'];
export function getMailToLink(): string { return `mailto:${SITE_CONFIG.email}?subject=Contacto%20desde%20Portafolio%20Full%20Stack`; }
