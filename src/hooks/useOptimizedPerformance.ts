'use client';

import { useEffect, useCallback, useRef } from 'react';

// Debounce hook para optimizar eventos de scroll/resize
export function useDebounce<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
) {
  const callbackRef = useRef<T>(callback);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(
    (...args: Parameters<T>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(() => {
        callbackRef.current(...args);
      }, delay);
    },
    [delay]
  );
}

// Throttle hook para eventos frecuentes
export function useThrottle<T extends (...args: unknown[]) => void>(
  callback: T,
  delay: number
) {
  const callbackRef = useRef<T>(callback);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  return useCallback(
    (...args: Parameters<T>) => {
      if (Date.now() - lastRan.current >= delay) {
        callbackRef.current(...args);
        lastRan.current = Date.now();
      }
    },
    [delay]
  );
}

// Hook optimizado para Intersection Observer
export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverInit = {}
) {
  const { threshold = 0, rootMargin = '0px' } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Trigger lazy loading or animations
            element.classList.add('in-view');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      observer.disconnect();
    };
  }, [elementRef, threshold, rootMargin]);
}

// Hook para prefetch de componentes
export function usePrefetch() {
  const prefetchComponent = useCallback((componentPath: string) => {
    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      window.requestIdleCallback(() => {
        import(componentPath).catch(() => {
          // Silently fail if component doesn't exist
        });
      });
    }
  }, []);

  return { prefetchComponent };
}

// Hook para Resource Hints
export function useResourceHints() {
  const preloadResource = useCallback((href: string, as: string, type?: string) => {
    if (typeof document === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = href;
    link.as = as;
    if (type) link.type = type;
    
    document.head.appendChild(link);
  }, []);

  const prefetchResource = useCallback((href: string) => {
    if (typeof document === 'undefined') return;

    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = href;
    
    document.head.appendChild(link);
  }, []);

  return { preloadResource, prefetchResource };
}

const performanceHooks = {
  useDebounce,
  useThrottle,
  useIntersectionObserver,
  usePrefetch,
  useResourceHints,
};

export default performanceHooks;
