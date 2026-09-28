import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost';
type Props = { variant?: Variant; children: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>;

const BASE =
  'group/btn inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 active:scale-[0.98] [&_svg]:transition-transform [&_svg]:duration-200 group-hover/btn:[&_svg]:translate-x-0.5';

const VARIANTS: Record<Variant, string> = {
  primary: 'bg-[var(--accent)] text-[var(--accent-ink)] shadow-[0_0_0_rgba(250,204,21,0)] hover:bg-[var(--accent-hover)] hover:shadow-[0_8px_28px_-8px_rgba(250,204,21,0.45)]',
  secondary:
    'border border-[var(--border-strong)] bg-white/[0.03] text-zinc-100 hover:-translate-y-px hover:border-zinc-500 hover:bg-white/[0.06]',
  ghost: 'text-[var(--accent)] hover:bg-yellow-400/10',
};

export function ButtonLink({ variant = 'primary', children, className = '', ...rest }: Props) {
  return (
    <a className={`${BASE} ${VARIANTS[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}

