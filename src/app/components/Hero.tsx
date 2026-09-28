import Image from 'next/image';
import { FiArrowRight, FiFileText } from 'react-icons/fi';
import { SITE_CONFIG, STACK_LINE, getMailToLink } from '@/data/portfolio';
import { ButtonLink } from '@/components/ui/ButtonLink';
import Contactame from './Contactame';
import { Seq, Reveal } from '@/components/motion/Reveal';
import { Ambient, Magnetic } from '@/components/motion/fx';
const PIL = [
  { n: '01', t: 'Codigo limpio', d: 'Arquitecturas modulares, faciles de mantener y escalar.' },
  { n: '02', t: 'Rendimiento', d: 'Next.js y Core Web Vitals: carga rapida desde el primer byte.' },
  { n: '03', t: 'Negocio', d: 'Requisitos convertidos en producto que impulsa crecimiento.' },
];
export default function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden pt-12 md:pt-20">
      <div className="grid items-start gap-10 lg:grid-cols-[1.35fr_0.85fr] lg:gap-14">
        <div className="min-w-0">
          <Seq i={0}>
            <p className="eyebrow flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/[0.03] px-3 py-1 normal-case tracking-normal">
                <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span className="font-sans text-xs font-medium normal-case tracking-normal text-zinc-300">Disponible para proyectos</span>
              </span>
              <span aria-hidden="true">Full Stack - Next.js / TypeScript</span>
            </p>
          </Seq>
          <Seq i={1}><h1 id="hero-title" className="mt-6 max-w-[16ch] text-[clamp(2.6rem,6.4vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-balance">{SITE_CONFIG.name} - construyo <span className="text-[var(--accent)]">soluciones escalables</span> que impulsan negocio.</h1></Seq>
          <Seq i={2}><p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{SITE_CONFIG.role} con enfoque en eficiencia, rendimiento y experiencia de usuario. Plataformas reales en produccion: e-learning, turnos online y consultoria.</p></Seq>
          <Seq i={3}>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Magnetic strength={10} className="w-full [&>*]:w-full sm:w-fit sm:[&>*]:w-fit"><ButtonLink href={getMailToLink()}>Agendar una conversacion <FiArrowRight aria-hidden="true" /></ButtonLink></Magnetic>
              <ButtonLink variant="secondary" href={SITE_CONFIG.cvPath} target="_blank" rel="noopener noreferrer"><FiFileText aria-hidden="true" /> Ver CV</ButtonLink>
            </div>
          </Seq>
          <Seq i={4}>
            <dl className="mt-8 grid max-w-xl grid-cols-3 gap-4 border-t border-[var(--border)] pt-6">
              <div><dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--faint)]">Stack</dt><dd className="mt-1.5 text-sm font-semibold">Next.js - TS</dd></div>
              <div><dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--faint)]">Foco</dt><dd className="mt-1.5 text-sm font-semibold">Full Stack</dd></div>
              <div><dt className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--faint)]">Base</dt><dd className="mt-1.5 text-sm font-semibold">Henry - TA</dd></div>
            </dl>
            <p className="mt-5 font-mono text-xs leading-relaxed text-[var(--faint)]">{STACK_LINE.join('  -  ')}</p>
          </Seq>
        </div>
        <Seq i={2}>
          <Ambient className="lg:sticky lg:top-24 rounded-[var(--radius)]" tint="rgba(250,204,21,0.05)">
          <aside aria-label="Perfil de Ivan Ameri">
            <div className="overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--surface)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-900">
                <Image src="/yo.jpeg" alt="Ivan Ameri - foto de perfil" fill priority sizes="(max-width:1024px) 100vw,400px" style={{ objectFit: 'cover' }} />
                <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                  <div><p className="text-base font-bold leading-tight">{SITE_CONFIG.name}</p><p className="mt-0.5 text-xs text-zinc-300">{SITE_CONFIG.role}</p></div>
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-zinc-200 backdrop-blur"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Open to work</span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-2 border-t border-[var(--border)] px-4 py-3">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[var(--faint)]">Contacto directo</p>
                <Contactame />
              </div>
            </div>
          </aside>
          </Ambient>
        </Seq>
      </div>
      <Reveal d={0.05}>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[var(--radius)] border border-[var(--border)] bg-[var(--border)] sm:grid-cols-3 md:mt-14">
          {PIL.map((p) => (
            <div key={p.n} className="bg-[var(--background-soft)] p-5 md:p-6">
              <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--accent)]">{p.n}</p>
              <h2 className="mt-2 text-base font-semibold tracking-tight">{p.t}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-[var(--muted)]">{p.d}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
