export function SectionHeading({ eyebrow, title, description, id }: { eyebrow: string; title: string; description?: string; id?: string }) {
  return (
    <div className="mb-10 max-w-2xl md:mb-12">
      <p className="eyebrow flex items-center gap-3">
        <span aria-hidden="true" className="inline-block h-px w-8 bg-[var(--accent)]/70" />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-4 max-w-xl text-3xl font-bold leading-[1.08] tracking-tight text-balance md:text-[2.75rem]">
        {title}
      </h2>
      {description ? <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)] md:text-lg">{description}</p> : null}
    </div>
  );
}
