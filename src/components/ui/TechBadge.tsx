export function TechBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-[var(--border)] bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] font-medium tracking-wide text-zinc-300">
      {label}
    </span>
  );
}

