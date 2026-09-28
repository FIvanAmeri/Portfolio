'use client';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { useEffect, useState } from 'react';
import { SITE_CONFIG, getMailToLink } from '@/data/portfolio';
const LINKS = [
  { href: '#sobre-mi', label: 'Sobre mi', id: 'sobre-mi' },
  { href: '#proyectos', label: 'Proyectos', id: 'proyectos' },
  { href: '#testimonios', label: 'Testimonios', id: 'testimonios' },
  { href: '#contacto', label: 'Contacto', id: 'contacto' },
];
export function Navbar() {
  const r = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.4 });
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (r) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    LINKS.forEach((l) => {
      const el = document.getElementById(l.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [r]);
  return (
    <motion.header
      initial={r ? false : { y: -56, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-40 border-b border-white/[0.06] bg-[#09090b]/80 backdrop-blur-md"
    >
      <a href="#contenido" className="sr-only focus:not-sr-only focus:absolute focus:m-2 focus:rounded focus:bg-[var(--accent)] focus:px-3 focus:py-2 focus:text-black">Saltar al contenido</a>
      <nav aria-label="Navegacion principal" className="mx-auto flex h-[60px] w-full max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <a href="#inicio" className="inline-flex min-h-[44px] items-center gap-2.5" aria-label="Ir al inicio">
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-white/[0.04] font-mono text-xs font-bold">IA</span>
          <span className="hidden flex-col leading-none sm:flex">
            <span className="text-[13px] font-semibold tracking-tight">{SITE_CONFIG.name}</span>
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--faint)]">Full Stack</span>
          </span>
        </a>
        <ul className="hidden items-center gap-1 text-sm text-[var(--muted)] md:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                aria-current={active === l.id ? 'true' : undefined}
                className={`inline-flex min-h-[44px] items-center gap-1.5 rounded-full px-3.5 transition-colors hover:bg-white/[0.05] hover:text-white ${active === l.id ? 'text-white' : ''}`}
              >
                {active === l.id ? <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[var(--accent)]" /> : null}
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href={getMailToLink()} className="inline-flex min-h-[40px] items-center rounded-full bg-[var(--accent)] px-4 py-2 text-[13px] font-bold text-black transition-all duration-200 hover:bg-[var(--accent-hover)] hover:shadow-[0_0_20px_rgba(250,204,21,0.22)] active:scale-[0.98]">Contactar</a>
      </nav>
      <nav aria-label="Navegacion movil" className="border-t border-white/[0.06] md:hidden">
        <ul className="mx-auto flex w-full max-w-6xl items-center gap-1 overflow-x-auto px-4 py-1.5 text-[13px] text-[var(--muted)]">
          <li className="shrink-0"><a className="inline-flex min-h-[44px] items-center rounded-full px-3 hover:text-white" href="#inicio">Inicio</a></li>
          {LINKS.map((l) => (
            <li key={l.href} className="shrink-0"><a className="inline-flex min-h-[44px] items-center rounded-full px-3 hover:text-white" href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </nav>
      {r ? null : (
        <motion.span aria-hidden="true" className="absolute inset-x-0 bottom-[-1px] h-[2px] origin-left bg-[var(--accent)]" style={{ scaleX: progress }} />
      )}
    </motion.header>
  );
}
