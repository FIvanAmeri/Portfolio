'use client';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { FiArrowLeft, FiArrowRight, FiStar } from 'react-icons/fi';
import { useCarousel } from '../hooks/useCarousel';
import { TESTIMONIOS } from '@/data/content';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal, EASE } from '@/components/motion/Reveal';
export default function Testimonios() {
  const { currentIndex, setCurrentIndex, nextItem, prevItem, transitioning } = useCarousel(TESTIMONIOS.length, 7000, 350);
  const cur = TESTIMONIOS[currentIndex];
  const r = useReducedMotion();
  return (
    <section aria-labelledby="testimonios-title" className="scroll-mt-24 py-10 md:py-14">
      <Reveal><SectionHeading id="testimonios-title" eyebrow="03 - Testimonios" title="Confianza construida en equipo" description="Lo que dicen quienes ya construyeron producto conmigo." /></Reveal>
      <Reveal d={0.05}>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="flex flex-col justify-between rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface-strong)] p-6 md:p-8">
            <p aria-hidden="true" className="font-mono text-6xl leading-none text-[var(--accent)]">&ldquo;</p>
            <div aria-live="polite" className="-mt-4 min-h-[190px] touch-pan-y select-none" onPointerDown={(e) => { (e.currentTarget as HTMLElement).dataset.sx = String(e.clientX); }} onPointerUp={(e) => { const sx = Number((e.currentTarget as HTMLElement).dataset.sx || 0); const dx = e.clientX - sx; if (Math.abs(dx) < 32) return; if (dx < 0) nextItem(); else prevItem(); }}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={r ? 's' : currentIndex} initial={r ? false : { opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} exit={r ? undefined : { opacity: 0, x: -22 }} transition={{ duration: 0.3, ease: EASE }}>
                  <div className="flex items-center gap-1" role="img" aria-label={`${cur.rating} de 5 estrellas`}>
                    {Array.from({ length: cur.rating }).map((_, i) => (<FiStar key={i} className="h-4 w-4 fill-current text-[var(--accent)]" aria-hidden="true" />))}
                  </div>
                  <blockquote className="mt-4 text-xl font-medium leading-snug tracking-tight text-balance md:text-2xl">{cur.contenido}</blockquote>
                  <div className="mt-6 flex items-center gap-3 border-t border-[var(--border)] pt-5">
                    <Image src={cur.foto} alt={cur.fotoAlt} width={48} height={48} className="h-12 w-12 rounded-full border border-[var(--border-strong)] object-cover" />
                    <div className="min-w-0"><p className="truncate text-sm font-bold">{cur.nombre}</p><p className="truncate text-xs text-[var(--muted)]">{cur.puesto}</p><p className="truncate font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--faint)]">{cur.empresa} - {cur.fecha}</p></div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="mt-7 flex items-center justify-between gap-3">
              <div className="flex items-center gap-1.5" role="tablist" aria-label="Elegir testimonio">
                {TESTIMONIOS.map((t, idx) => (
                  <button key={t.id} role="tab" aria-selected={idx === currentIndex} aria-label={`Ver testimonio de ${t.nombre}`} onClick={() => setCurrentIndex(idx)} className="inline-flex h-9 w-7 items-center justify-center"><span className={`block h-1.5 rounded-full transition-all ${idx === currentIndex ? 'w-6 bg-[var(--accent)]' : 'w-1.5 bg-zinc-600'}`} /></button>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <button onClick={prevItem} disabled={transitioning} aria-label="Testimonio anterior" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:border-zinc-500 disabled:opacity-40"><FiArrowLeft aria-hidden="true" /></button>
                <button onClick={nextItem} disabled={transitioning} aria-label="Testimonio siguiente" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:border-zinc-500 disabled:opacity-40"><FiArrowRight aria-hidden="true" /></button>
              </div>
            </div>
          </div>
          <ul className="grid content-start gap-4" aria-label="Todos los testimonios">
            {TESTIMONIOS.map((t, idx) => (
              <li key={t.id}>
                <button onClick={() => setCurrentIndex(idx)} aria-current={idx === currentIndex ? 'true' : undefined} aria-label={`Ver testimonio de ${t.nombre}`} className={`flex w-full items-center gap-4 rounded-[0.6rem] border p-4 text-left transition-colors ${idx === currentIndex ? 'border-[var(--accent)]/50 bg-yellow-400/[0.06]' : 'border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)]'}`}>
                  <Image src={t.foto} alt="" width={44} height={44} aria-hidden="true" className="h-11 w-11 shrink-0 rounded-full border border-[var(--border)] object-cover" />
                  <span className="min-w-0"><span className="block truncate text-sm font-semibold">{t.nombre} <span className="font-normal text-[var(--muted)]">- {t.empresa}</span></span><span className="mt-1 line-clamp-2 block text-[13px] leading-relaxed text-[var(--muted)]">{t.contenido}</span></span>
                  <span aria-hidden="true" className={`ml-auto shrink-0 font-mono text-xs ${idx === currentIndex ? 'text-[var(--accent)]' : 'text-zinc-600'}`}>0{idx + 1}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
