'use client';

import { useCallback } from 'react';
import { externalRedirect, getExternalUrls } from '@/config/external-urls';

/**
 * Hook for handling external redirections
 * Provides callbacks for different types of redirections
 */
export function useExternalRedirect() {
  const urls = getExternalUrls();

  const redirectToLogin = useCallback((returnUrl?: string) => {
    externalRedirect.login(returnUrl);
  }, []);

  const redirectToRegister = useCallback((returnUrl?: string) => {
    externalRedirect.register(returnUrl);
  }, []);

  const redirectToDashboard = useCallback((path?: string) => {
    externalRedirect.dashboard(path);
  }, []);

  /**
   * Handle demo request - redirect to register with special parameter
   */
  const requestDemo = useCallback((returnUrl?: string) => {
    const demoUrl = returnUrl 
      ? `${urls.register}?demo=true&returnUrl=${encodeURIComponent(returnUrl)}`
      : `${urls.register}?demo=true`;
    
    window.location.href = demoUrl;
  }, [urls.register]);

  /**
   * Handle free trial - redirect to login with trial parameter
   */
  const startFreeTrial = useCallback((trialDays: number = 30, returnUrl?: string) => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : undefined;
    const finalReturnUrl = returnUrl || currentUrl;
    
    const trialUrl = finalReturnUrl 
      ? `${urls.login}?trial=true&days=${trialDays}&returnUrl=${encodeURIComponent(finalReturnUrl)}`
      : `${urls.login}?trial=true&days=${trialDays}`;
    
    window.location.href = trialUrl;
  }, [urls.login]);

  /**
   * Handle free trial - redirect to register with trial parameter  
   */
  const startTrial = useCallback((returnUrl?: string) => {
    const trialUrl = returnUrl 
      ? `${urls.register}?trial=true&returnUrl=${encodeURIComponent(returnUrl)}`
      : `${urls.register}?trial=true`;
    
    window.location.href = trialUrl;
  }, [urls.register]);

  return {
    urls,
    redirectToLogin,
    redirectToRegister,
    redirectToDashboard,
    requestDemo,
    startTrial,
    startFreeTrial,
  };
}

/**
 * Utility function to get external URLs for server-side usage
 */
export { getExternalUrls } from '@/config/external-urls';
