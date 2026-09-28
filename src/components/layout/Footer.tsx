import { SITE_CONFIG, getMailToLink } from '@/data/portfolio';
import { Reveal } from '@/components/motion/Reveal';
export function Footer() {
  return (
    <footer className="hairline-top mt-4">
      <Reveal y={12}>
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-12 md:grid-cols-[1.2fr_1fr_auto] md:items-start md:px-8">
          <div>
            <p className="flex items-center gap-2.5"><span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--border-strong)] bg-white/[0.04] font-mono text-xs font-bold">IA</span><span className="text-sm font-semibold tracking-tight">{SITE_CONFIG.name}</span></p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-[var(--muted)]">{SITE_CONFIG.role} - Next.js, TypeScript y producto real en produccion.</p>
            <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--faint)]">© {new Date().getFullYear()} - Todos los derechos reservados</p>
          </div>
          <nav aria-label="Secciones del portfolio">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--faint)]">Mapa</p>
            <ul className="mt-3 grid grid-cols-2 gap-1 text-sm text-[var(--muted)] md:grid-cols-1">
              <li><a className="inline-flex min-h-[36px] items-center transition-colors hover:text-white" href="#sobre-mi">Sobre mi</a></li>
              <li><a className="inline-flex min-h-[36px] items-center transition-colors hover:text-white" href="#proyectos">Proyectos</a></li>
              <li><a className="inline-flex min-h-[36px] items-center transition-colors hover:text-white" href="#testimonios">Testimonios</a></li>
              <li><a className="inline-flex min-h-[36px] items-center transition-colors hover:text-white" href="#contacto">Contacto</a></li>
            </ul>
          </nav>
          <nav aria-label="Contacto externo">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--faint)]">Contacto</p>
            <ul className="mt-3 flex flex-col gap-2 text-sm">
              <li><a className="inline-flex min-h-[44px] items-center rounded-full border border-[var(--border)] px-4 transition-colors hover:border-zinc-500 hover:bg-white/[0.05]" href={SITE_CONFIG.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li><a className="inline-flex min-h-[44px] items-center rounded-full border border-[var(--border)] px-4 transition-colors hover:border-zinc-500 hover:bg-white/[0.05]" href={SITE_CONFIG.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
              <li><a className="inline-flex min-h-[44px] items-center rounded-full border border-[var(--border)] px-4 transition-colors hover:border-zinc-500 hover:bg-white/[0.05]" href={getMailToLink()}>Email</a></li>
            </ul>
          </nav>
        </div>
      </Reveal>
    </footer>
  );
}
