'use client'; 

import { useState, useEffect, useCallback } from 'react';


export const useCarousel = (totalItems: number, intervalTime: number = 7000, transitionDuration: number = 500) => {
  const [displayIndex, setDisplayIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false); 

  const startTransition = useCallback((newIndex: number) => {
    if (transitioning) return;
    
    setTransitioning(true);
    

    setTimeout(() => {
      setDisplayIndex(newIndex);
      setTimeout(() => setTransitioning(false), 50); 
    }, transitionDuration); 
  }, [transitioning, transitionDuration]);

  const nextItem = useCallback(() => {
    const newIndex = (displayIndex + 1) % totalItems;
    startTransition(newIndex);
  }, [displayIndex, totalItems, startTransition]);


  const prevItem = useCallback(() => {
    const newIndex = (displayIndex - 1 + totalItems) % totalItems;
    startTransition(newIndex);
  }, [displayIndex, totalItems, startTransition]);

 
  useEffect(() => {
    if (totalItems <= 1) return;

    const interval = setInterval(nextItem, intervalTime);


    return () => clearInterval(interval);
  }, [totalItems, intervalTime, nextItem]);

  return {
    currentIndex: displayIndex,
    setCurrentIndex: startTransition,
    nextItem,
    prevItem,
    transitioning, 
  };
};