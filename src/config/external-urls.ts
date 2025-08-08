/**
 * External URLs configuration
 * Centralized configuration for microservices URLs
 */

interface ExternalUrls {
  dashboard: string;
  login: string;
  register: string;
}

/**
 * Get external URLs from environment variables
 * Validates that all required URLs are present
 */
export function getExternalUrls(): ExternalUrls {
  const dashboardUrl = process.env.NEXT_PUBLIC_DASHBOARD_URL;
  const loginUrl = process.env.NEXT_PUBLIC_LOGIN_URL;
  const registerUrl = process.env.NEXT_PUBLIC_REGISTER_URL;

  if (!dashboardUrl || !loginUrl || !registerUrl) {
    console.warn('Missing external URLs configuration:', {
      dashboard: !!dashboardUrl,
      login: !!loginUrl,
      register: !!registerUrl,
    });
    
    // Fallback URLs for development/build
    return {
      dashboard: dashboardUrl || 'https://app.ally360.co',
      login: loginUrl || 'https://auth.ally360.co/login',
      register: registerUrl || 'https://auth.ally360.co/register',
    };
  }

  return {
    dashboard: dashboardUrl,
    login: loginUrl,
    register: registerUrl,
  };
}

/**
 * Helper functions to redirect to external URLs
 */
export const externalRedirect = {
  /**
   * Redirect to login page
   * @param returnUrl - Optional return URL after login
   */
  login: (returnUrl?: string) => {
    const urls = getExternalUrls();
    const loginUrl = returnUrl 
      ? `${urls.login}?returnUrl=${encodeURIComponent(returnUrl)}`
      : urls.login;
    
    window.location.href = loginUrl;
  },

  /**
   * Redirect to register page
   * @param returnUrl - Optional return URL after registration
   */
  register: (returnUrl?: string) => {
    const urls = getExternalUrls();
    const registerUrl = returnUrl 
      ? `${urls.register}?returnUrl=${encodeURIComponent(returnUrl)}`
      : urls.register;
    
    window.location.href = registerUrl;
  },

  /**
   * Redirect to dashboard
   * @param path - Optional specific path within dashboard
   */
  dashboard: (path?: string) => {
    const urls = getExternalUrls();
    const dashboardUrl = path 
      ? `${urls.dashboard}${path}`
      : urls.dashboard;
    
    window.location.href = dashboardUrl;
  },
};

/**
 * Hook to get external URLs in client components
 */
export function useExternalUrls() {
  return getExternalUrls();
}
