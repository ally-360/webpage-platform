'use client';

import React, { 
  memo, 
  Suspense, 
  lazy, 
  ComponentType, 
  useState, 
  useEffect, 
  useRef 
} from 'react';
import { Box, Skeleton, CircularProgress } from '@mui/material';

interface LazyComponentWrapperProps {
  componentImport: () => Promise<{ default: ComponentType<Record<string, unknown>> }>;
  fallback?: React.ReactNode;
  errorFallback?: React.ReactNode;
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  children?: React.ReactNode;
  minHeight?: number | string;
  sx?: object;
}

const LazyComponentWrapper = memo(({
  componentImport,
  fallback,
  errorFallback,
  threshold = 0.1,
  rootMargin = '50px',
  triggerOnce = true,
  minHeight = 400,
  sx,
  ...props
}: LazyComponentWrapperProps) => {
  const [isInView, setIsInView] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  if (error) {
    return (
      errorFallback || (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight,
            textAlign: 'center',
            p: 3,
            ...sx,
          }}
        >
          Error al cargar el componente
        </Box>
      )
    );
  }

  if (!isInView) {
    return (
      <Box
        ref={elementRef}
        sx={{
          minHeight,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          ...sx,
        }}
      >
        {fallback || (
          <Skeleton
            variant="rectangular"
            width="100%"
            height={minHeight}
            sx={{ borderRadius: 2 }}
          />
        )}
      </Box>
    );
  }

  const LazyComponent = lazy(() =>
    componentImport().catch((err) => {
      setError(err);
      return { default: () => <div>Error loading component</div> };
    })
  );

  return (
    <Suspense
      fallback={
        fallback || (
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight,
              ...sx,
            }}
          >
            <CircularProgress size={40} />
          </Box>
        )
      }
    >
      <LazyComponent {...props} />
    </Suspense>
  );
});

LazyComponentWrapper.displayName = 'LazyComponentWrapper';

export default LazyComponentWrapper;
