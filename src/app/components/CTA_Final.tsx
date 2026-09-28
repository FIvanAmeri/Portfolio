import Link from 'next/link';
import { FiArrowRight, FiFileText } from 'react-icons/fi';
import { SITE_CONFIG, getMailToLink } from '@/data/portfolio';
import { ButtonLink } from '@/components/ui/ButtonLink';
import { Reveal } from '@/components/motion/Reveal';
import { Magnetic } from '@/components/motion/fx';
export default function CTA_Final() {
  return (
    <section aria-labelledby="contacto-title" className="scroll-mt-24 py-10 md:py-14">
      <Reveal y={22}>
        <div className="relative overflow-hidden rounded-[1.25rem] border border-[var(--border-strong)] bg-[var(--surface-strong)] p-8 md:p-14">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[var(--accent)] via-[var(--accent)]/30 to-transparent" />
          <span aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[var(--accent)]/[0.08] blur-3xl" />
          <div className="relative grid items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <p className="eyebrow">04 - Contacto - Respuesta en 24h</p>
              <h2 id="contacto-title" className="mt-4 max-w-[18ch] text-3xl font-extrabold leading-[1.05] tracking-[-0.02em] text-balance md:text-5xl">Si necesitas construir algo serio, <span className="text-[var(--accent)]">hablemos.</span></h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">Cuentame tu idea en un email corto: objetivo, alcance y tiempos. Te respondo con proximos pasos concretos.</p>
              <p className="mt-5 font-mono text-xs tracking-wide text-[var(--faint)]">{SITE_CONFIG.email}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Magnetic strength={10} fill><ButtonLink href={getMailToLink()}>Agendar conversacion <FiArrowRight aria-hidden="true" /></ButtonLink></Magnetic>
              <Link href={SITE_CONFIG.cvPath} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-[var(--border-strong)] bg-white/[0.03] px-6 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-px hover:border-zinc-500 hover:bg-white/[0.06] active:scale-[0.98]"><FiFileText aria-hidden="true" /> Descargar CV</Link>
              <p className="text-center font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--faint)]">Sin compromiso</p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
