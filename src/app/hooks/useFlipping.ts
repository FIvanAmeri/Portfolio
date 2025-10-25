import { useState, useEffect } from 'react';

export const useFlipping = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const toggleFlip = () => {
      setIsFlipped(prev => !prev);
    };

    const intervalId = setInterval(toggleFlip, 5000);
    
    return () => clearInterval(intervalId);
  }, []);

  return { isFlipped, isMounted };
};