import { useRef, useEffect, useState } from 'react';

export const useScrollReveal = <T extends HTMLElement = HTMLElement>() => {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (!elementRef.current) return;

    const options = {
      root: null,
      rootMargin: '-200px 0px 0px 0px', 
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { 
          setIsVisible(true);
          observer.unobserve(entry.target); 
        }
      });
    }, options);

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return { elementRef, isVisible, isMounted };
};