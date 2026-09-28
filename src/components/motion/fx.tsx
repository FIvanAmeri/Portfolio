'use client';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react';
import { useEffect, useRef, type PointerEvent as RPE, type ReactNode } from 'react';

/** Spotlight sutil por puntero: escribe --mx/--my (CSS vars, sin re-renders). Solo mouse. */
export function useSpotlight<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const r = useReducedMotion();
  const onMove = (e: RPE<T>) => {
    if (r || e.pointerType !== 'mouse') return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${(e.clientX - rect.left).toFixed(1)}px`);
    el.style.setProperty('--my', `${(e.clientY - rect.top).toFixed(1)}px`);
  };
  // Al salir el puntero el glow se oculta por CSS; se limpia para no dejar posicion obsoleta.
  const onLeave = () => {
    ref.current?.style.removeProperty('--mx');
    ref.current?.style.removeProperty('--my');
  };
  return { ref, onMove, onLeave };
}

/** Contenedor con glow ambiental que sigue el puntero (desktop, puntero fino). */
export function Ambient({ children, className = '', tint = 'rgba(250,204,21,0.06)' }: { children: ReactNode; className?: string; tint?: string }) {
  const { ref, onMove } = useSpotlight<HTMLDivElement>();
  return (
    <div ref={ref} onPointerMove={onMove} className={`group/ambient relative ${className}`}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-500 pointer-fine:group-hover/ambient:opacity-100"
        style={{ background: `radial-gradient(300px circle at var(--mx, 50%) var(--my, 0%), ${tint}, transparent 70%)` }}
      />
      {children}
    </div>
  );
}

/** Atraccion magnetica leve (max ~10px, solo mouse). Envuelve CTAs importantes. */
export function Magnetic({ children, strength = 10, fill = false, className = '' }: { children: ReactNode; strength?: number; fill?: boolean; className?: string }) {
  const r = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 17, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 220, damping: 17, mass: 0.35 });
  const onMove = (e: RPE<HTMLDivElement>) => {
    if (r || e.pointerType !== 'mouse') return;
    const rect = e.currentTarget.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(Math.max(-strength, Math.min(strength, dx * 0.18)));
    y.set(Math.max(-strength, Math.min(strength, dy * 0.18)));
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.div
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x: sx, y: sy }}
      className={`inline-block ${fill ? 'w-full [&>*]:w-full' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
}

/** Cursor complementario en dos capas (punto rapido + anillo con retardo). Solo puntero fino, sin reduced-motion. */
export function CustomCursor() {
  const r = useReducedMotion();
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);
  const dx = useSpring(dotX, { stiffness: 700, damping: 50, mass: 0.25 });
  const dy = useSpring(dotY, { stiffness: 700, damping: 50, mass: 0.25 });
  const rx = useSpring(ringX, { stiffness: 180, damping: 22, mass: 0.5 });
  const ry = useSpring(ringY, { stiffness: 180, damping: 22, mass: 0.5 });
  const ringRef = useRef<HTMLSpanElement | null>(null);
  useEffect(() => {
    if (r || !window.matchMedia('(pointer: fine)').matches) return;
    // Solo motion values + un atributo en el anillo: cero re-renders por movimiento.
    const move = (e: PointerEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement | null;
      ringRef.current?.setAttribute('data-hot', t?.closest?.('a, button, [role="tab"]') ? '1' : '0');
    };
    const leave = () => ringRef.current?.setAttribute('data-hot', '0');
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('mouseover', over, { passive: true });
    document.addEventListener('mouseleave', leave);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('mouseover', over);
      document.removeEventListener('mouseleave', leave);
    };
  }, [r, dotX, dotY, ringX, ringY]);
  if (r) return null;
  return (
    <span aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] hidden pointer-fine:block">
      <motion.span className="absolute left-0 top-0 block h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)]" style={{ x: dx, y: dy }} />
      <motion.span
        ref={ringRef}
        data-hot="0"
        className="absolute left-0 top-0 block h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/35 transition-[width,height,border-color,background-color] duration-200 data-[hot='1']:h-10 data-[hot='1']:w-10 data-[hot='1']:border-[var(--accent)]/70 data-[hot='1']:bg-yellow-400/10"
        style={{ x: rx, y: ry }}
      />
    </span>
  );
}
