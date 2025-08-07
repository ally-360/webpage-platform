'use client';

import { useState, useEffect } from 'react';

export function useOffSetTop() {
  const [offsetTop, setOffSetTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Usar un trigger más suave - activar cuando se ha hecho scroll de 20px o más
      const scrollY = window.scrollY;
      if (scrollY > 20) {
        setOffSetTop(true);
      } else {
        setOffSetTop(false);
      }
    };

    // Agregar throttling para mejor performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Verificar estado inicial
    handleScroll();

    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return offsetTop;
}
