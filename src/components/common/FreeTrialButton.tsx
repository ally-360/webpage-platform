'use client';

import { Button, ButtonProps } from '@mui/material';

interface FreeTrialButtonProps extends Omit<ButtonProps, 'onClick'> {
  returnUrl?: string;
  variant?: 'text' | 'outlined' | 'contained';
  trialDays?: number;
}

/**
 * Button component that redirects to external register/login for free trial
 */
export function FreeTrialButton({ 
  returnUrl, 
  variant = 'contained',
  trialDays = 30,
  children = 'Probar Gratis',
  ...props 
}: FreeTrialButtonProps) {
  const handleFreeTrial = () => {
    const currentUrl = typeof window !== 'undefined' ? window.location.href : undefined;
    const finalReturnUrl = returnUrl || currentUrl;
    
    // Redirect to login with trial parameters
    const trialUrl = finalReturnUrl 
      ? `${process.env.NEXT_PUBLIC_LOGIN_URL}?trial=true&days=${trialDays}&returnUrl=${encodeURIComponent(finalReturnUrl)}`
      : `${process.env.NEXT_PUBLIC_LOGIN_URL}?trial=true&days=${trialDays}`;
    
    window.location.href = trialUrl;
  };

  return (
    <Button
      variant={variant}
      onClick={handleFreeTrial}
      sx={{
        fontWeight: 600,
        borderRadius: 2,
        px: 3,
        py: 1,
        textTransform: 'none',
        ...props.sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default FreeTrialButton;
