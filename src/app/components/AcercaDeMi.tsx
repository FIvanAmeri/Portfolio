'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FiAward, FiMessageCircle, FiTool, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { CERTIFICADOS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/motion/Reveal';
const STR = [
  { icon: FiAward, t: 'Graduado en Henry - Teaching Assistant', d: 'Formacion Full Stack certificada, metodologias agiles y gestion de equipos.' },
  { icon: FiTool, t: 'Resolucion de problemas', d: 'Debugging y analisis de codigo complejo en proyectos criticos.' },
  { icon: FiMessageCircle, t: 'Comunicacion y mentoreo', d: 'Traduzco lo tecnico a lenguaje de negocio y acompano a otros devs.' },
];
export default function AcercaDeMi() {
  const [i, setI] = useState(0);
  const cur = CERTIFICADOS[i];
  return (
    <section aria-labelledby="trayectoria-title" className="scroll-mt-24 py-10 md:py-14">
      <Reveal><SectionHeading id="trayectoria-title" eyebrow="01 - Sobre mi" title="Trayectoria con foco en producto" description="Del backend a la experiencia de usuario: software robusto que aporta valor medible." /></Reveal>
      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-8">
        <Reveal d={0.05}>
          <div className="flex h-full flex-col rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)] p-6 md:p-8">
            <p className="text-base leading-relaxed text-zinc-200 md:text-lg">Soy <strong className="font-semibold text-white">Desarrollador Full Stack</strong>: convierto requisitos ambiguos en plataformas claras, rapidas y mantenibles.</p>
            <ul className="mt-7 border-t border-[var(--border)]">
              {STR.map((s) => (
                <li key={s.t} className="flex items-start gap-4 border-b border-[var(--border)] py-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--border)] bg-white/[0.03]"><s.icon className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" /></span>
                  <div><p className="text-sm font-semibold md:text-[15px]">{s.t}</p><p className="mt-1 text-sm text-[var(--muted)]">{s.d}</p></div>
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-6 font-mono text-xs text-[var(--faint)]">STACK PRINCIPAL - JavaScript - TypeScript - React - Node.js - Next.js - Tailwind</p>
          </div>
        </Reveal>
        <Reveal d={0.1}>
          <figure className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]">
            <div className="flex items-center justify-between border-b border-[var(--border)] px-5 py-3.5">
              <figcaption className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--muted)]">Certificaciones - {i + 1}/{CERTIFICADOS.length}</figcaption>
              <div className="flex gap-1.5">
                <button onClick={() => setI((p) => (p - 1 + CERTIFICADOS.length) % CERTIFICADOS.length)} aria-label="Ver certificado anterior" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:border-zinc-500"><FiChevronLeft aria-hidden="true" /></button>
                <button onClick={() => setI((p) => (p + 1) % CERTIFICADOS.length)} aria-label="Ver certificado siguiente" className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:border-zinc-500"><FiChevronRight aria-hidden="true" /></button>
              </div>
            </div>
            <div className="relative aspect-[16/10] bg-zinc-950"><Image key={cur.src} src={cur.src} alt={cur.alt} fill sizes="(max-width:1024px) 100vw,560px" style={{ objectFit: 'cover' }} /></div>
            <div className="flex items-center justify-between gap-3 px-5 py-4">
              <p className="truncate text-sm text-[var(--muted)]">{cur.alt}</p>
              <div className="flex gap-1.5" role="tablist" aria-label="Seleccionar certificado">
                {CERTIFICADOS.map((c, idx) => (
                  <button key={c.id} role="tab" aria-selected={idx === i} aria-label={`Ver certificado ${idx + 1}`} onClick={() => setI(idx)} className="inline-flex h-8 w-8 items-center justify-center"><span className={`block h-1.5 rounded-full ${idx === i ? 'w-6 bg-[var(--accent)]' : 'w-1.5 bg-zinc-600'}`} /></button>
                ))}
              </div>
            </div>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
