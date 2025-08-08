'use client';

import { Button, ButtonProps } from '@mui/material';
import { externalRedirect } from '@/config/external-urls';

interface LoginButtonProps extends Omit<ButtonProps, 'onClick'> {
  returnUrl?: string;
  variant?: 'text' | 'outlined' | 'contained';
}

/**
 * Button component that redirects to external login page
 */
export function LoginButton({ 
  returnUrl, 
  variant = 'text',
  children = 'Iniciar Sesión',
  ...props 
}: LoginButtonProps) {
  const handleLogin = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : undefined;
    externalRedirect.login(returnUrl || currentUrl);
  };

  return (
    <Button
      variant={variant}
      onClick={handleLogin}
      sx={{
        fontWeight: 600,
        color: variant === 'text' ? 'text.primary' : undefined,
        '&:hover': {
          boxShadow: 'none'
        },
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default LoginButton;
