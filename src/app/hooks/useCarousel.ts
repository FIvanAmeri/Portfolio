'use client';
import { useCallback, useEffect, useRef, useState } from 'react';

/** Carrusel con autoplay que se reinicia tras interaccion manual. Sin timers duplicados. */
export function useCarousel(total: number, intervalMs = 7000, lockMs = 350) {
  const [index, setIndex] = useState(0);
  const [locking, setLocking] = useState(false);
  const gen = useRef(0);
  const lockTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = useCallback(
    (next: number) => {
      const g = ++gen.current;
      setLocking(true);
      if (lockTimer.current) clearTimeout(lockTimer.current);
      setIndex(((next % total) + total) % total);
      lockTimer.current = setTimeout(() => {
        if (gen.current === g) setLocking(false);
      }, lockMs);
    },
    [total, lockMs]
  );

  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (total <= 1) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => {
      setIndex((p) => (p + 1) % total);
    }, intervalMs);
    return () => clearInterval(id);
  }, [total, intervalMs, index]);

  useEffect(() => () => {
    if (lockTimer.current) clearTimeout(lockTimer.current);
  }, []);

  return { currentIndex: index, setCurrentIndex: go, nextItem: next, prevItem: prev, transitioning: locking };
}
