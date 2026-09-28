'use client';
import { motion, useReducedMotion } from 'motion/react';
import type { ReactNode } from 'react';
export const EASE = [0.22, 1, 0.36, 1] as const;
export function Reveal({ children, d = 0, y = 18 }: { children: ReactNode; d?: number; y?: number }) {
  const r = useReducedMotion();
  if (r) return <>{children}</>;
  return (
    <motion.div initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-10% 0px' }} transition={{ duration: 0.55, delay: d, ease: EASE }}>
      {children}
    </motion.div>
  );
}

/** Secuencia de entrada inmediata (hero): misma curva que Reveal, trigger en mount. */
export function Seq({ children, i }: { children: ReactNode; i: number }) {
  const r = useReducedMotion();
  if (r) return <>{children}</>;
  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 + i * 0.08, ease: EASE }}>
      {children}
    </motion.div>
  );
}
