'use client';

import { useState, useEffect } from 'react';

export function useOffSetTop(top: number) {
  const [offsetTop, setOffSetTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > top) {
        setOffSetTop(true);
      } else {
        setOffSetTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [top]);

  return offsetTop;
}
