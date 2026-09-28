import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { IoMailOutline } from 'react-icons/io5';
import { SITE_CONFIG, getMailToLink } from '@/data/portfolio';
type Item = { href: string; label: string; hover: string; icon: React.ReactNode };
const ITEMS: Item[] = [
  { href: SITE_CONFIG.linkedin, label: 'LinkedIn de Iván Ameri', hover: 'hover:border-zinc-500 hover:text-white', icon: <FaLinkedinIn size={17} aria-hidden="true" /> },
  { href: SITE_CONFIG.github, label: 'GitHub de Iván Ameri', hover: 'hover:border-zinc-500 hover:text-white', icon: <FaGithub size={17} aria-hidden="true" /> },
  { href: getMailToLink(), label: `Enviar email a ${SITE_CONFIG.email}`, hover: 'hover:border-[var(--accent)] hover:text-[var(--accent)]', icon: <IoMailOutline size={18} aria-hidden="true" /> },
];
export default function Contactame() {
  return (
    <div className="flex items-center gap-1.5" role="group" aria-label="Enlaces de contacto">
      {ITEMS.map((item) => {
        const external = item.href.startsWith('http');
        return (
          <a
            key={item.label}
            href={item.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            aria-label={item.label}
            title={item.label}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-white/[0.02] text-zinc-400 transition-colors ${item.hover}`}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
}
