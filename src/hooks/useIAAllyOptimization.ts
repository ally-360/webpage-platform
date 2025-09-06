'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook para optimización de rendimiento en componentes pesados
 * Incluye lazy loading, debouncing y memoización
 */
export function usePerformanceOptimization() {
  const intersectionRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useRef(false);

  // Intersection Observer para lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.current = true;
          }
        });
      },
      {
        threshold: 0.1, // Se activa cuando el 10% del componente es visible
        rootMargin: '50px', // Se activa 50px antes de que sea visible
      }
    );

    const currentRef = intersectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Debounced scroll handler para mejorar rendimiento en scroll
  const debounce = useCallback((func: () => void, wait: number) => {
    let timeout: NodeJS.Timeout;
    return () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(), wait);
    };
  }, []);

  // Preload crítico de recursos
  const preloadResource = useCallback((href: string, as: string) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    document.head.appendChild(link);
  }, []);

  return {
    intersectionRef,
    isVisible: isVisible.current,
    debounce,
    preloadResource,
  };
}

export default usePerformanceOptimization;
