import { lazy, Suspense, ComponentType } from 'react';
import { CircularProgress, Box } from '@mui/material';

// Loading component optimized for performance
const LoadingFallback = () => (
  <Box 
    display="flex" 
    justifyContent="center" 
    alignItems="center" 
    minHeight="200px"
  >
    <CircularProgress size={24} />
  </Box>
);

// Higher-order component for lazy loading with optimized fallback
export function withLazyLoading<T extends object>(
  importFunc: () => Promise<{ default: ComponentType<T> }>,
  FallbackComponent: ComponentType = LoadingFallback
) {
  const LazyComponent = lazy(importFunc);
  
  return function LazyWrapper(props: T) {
    return (
      <Suspense fallback={<FallbackComponent />}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

// Preload component for critical resources
export function preloadComponent(importFunc: () => Promise<{ default: ComponentType<unknown> }>) {
  if (typeof window !== 'undefined') {
    // Preload on idle or after 2 seconds
    const preload = () => importFunc();
    
    if ('requestIdleCallback' in window) {
      requestIdleCallback(preload);
    } else {
      setTimeout(preload, 2000);
    }
  }
}

export default withLazyLoading;
