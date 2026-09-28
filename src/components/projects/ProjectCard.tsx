'use client';
import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';
import { FiExternalLink } from 'react-icons/fi';
import type { Project } from '@/data/portfolio';
import { TechBadge } from '@/components/ui/TechBadge';
import { EASE } from '@/components/motion/Reveal';
import { useSpotlight } from '@/components/motion/fx';
export default function ProjectCard({ title, description, technologies, imageSrc, imageAlt, projectUrl, linkLabel, index }: Project & { index: number }) {
  const r = useReducedMotion();
  const n = String(index + 1).padStart(2, '0');
  const { ref: spotRef, onMove: onSpot, onLeave: spotLeave } = useSpotlight<HTMLElement>();
  const inner = (
    <article ref={spotRef} onPointerMove={onSpot} onPointerLeave={spotLeave} aria-labelledby={`proyecto-${n}`} className="group relative overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] transition-colors duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]">
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 hidden opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-fine:block" style={{ background: 'radial-gradient(420px circle at var(--mx, 50%) var(--my, 0%), rgba(250,204,21,0.07), transparent 70%)' }} />
      <div className="relative overflow-hidden border-b border-[var(--border)] bg-zinc-950">
        <span aria-hidden="true" className="absolute inset-x-0 top-0 z-10 h-[2px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent)]/25 to-transparent opacity-80" />
        <Image src={imageSrc} alt={imageAlt} width={1200} height={720} sizes="(max-width:768px) 100vw,900px" className="aspect-[16/9] h-auto w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.015]" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-1 font-mono text-[11px] tracking-[0.14em] text-zinc-100 backdrop-blur"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" /> CASO {n} - FULL STACK</span>
      </div>
      <div className="grid gap-6 p-6 md:grid-cols-[1fr_300px] md:gap-8 md:p-8">
        <div className="min-w-0">
          <h3 id={`proyecto-${n}`} className="max-w-xl text-xl font-bold leading-tight tracking-tight text-balance md:text-2xl">{title}</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[var(--muted)] md:text-[15px]">{description}</p>
          <ul className="mt-5 flex max-w-2xl flex-wrap gap-1.5" aria-label={`Tecnologias de ${title}`}>
            {technologies.slice(0, 6).map((t) => (<li key={t}><TechBadge label={t} /></li>))}
          </ul>
        </div>
        <div className="flex flex-row items-start justify-between gap-3 border-t border-[var(--border)] pt-5 md:flex-col md:items-stretch md:border-l md:border-t-0 md:pl-6 md:pt-1">
          <div><p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--faint)]">Entrega</p><p className="mt-1.5 text-sm font-semibold">Producto en produccion</p></div>
          {projectUrl ? (<a href={projectUrl} target="_blank" rel="noopener noreferrer" aria-label={`Abrir ${linkLabel ?? title}`} className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-bold text-black transition-all duration-200 hover:bg-[var(--accent-hover)] hover:shadow-[0_8px_28px_-8px_rgba(250,204,21,0.45)] active:scale-[0.98] md:mt-4">{linkLabel ?? 'Ver proyecto'} <FiExternalLink aria-hidden="true" /></a>) : null}
        </div>
      </div>
    </article>
  );
  if (r) return inner;
  return (
    <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-8% 0px' }} transition={{ duration: 0.6, ease: EASE }}>
      {inner}
    </motion.div>
  );
}
