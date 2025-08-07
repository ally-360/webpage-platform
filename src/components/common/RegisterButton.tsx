'use client';

import { Button, ButtonProps } from '@mui/material';
import { externalRedirect } from '@/config/external-urls';

interface RegisterButtonProps extends Omit<ButtonProps, 'onClick'> {
  returnUrl?: string;
  variant?: 'text' | 'outlined' | 'contained';
}

/**
 * Button component that redirects to external register page
 */
export function RegisterButton({ 
  returnUrl, 
  variant = 'contained',
  children = 'Registrarse',
  ...props 
}: RegisterButtonProps) {
  const handleRegister = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : undefined;
    externalRedirect.register(returnUrl || currentUrl);
  };

  return (
    <Button
      variant={variant}
      onClick={handleRegister}
      sx={{
        fontWeight: 600,
        borderRadius: 2,
        px: 3,
        py: 1,
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default RegisterButton;
