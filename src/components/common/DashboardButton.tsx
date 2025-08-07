'use client';

import { Button, ButtonProps } from '@mui/material';
import { externalRedirect } from '@/config/external-urls';

interface DashboardButtonProps extends Omit<ButtonProps, 'onClick'> {
  path?: string;
  variant?: 'text' | 'outlined' | 'contained';
}

/**
 * Button component that redirects to external dashboard
 */
export function DashboardButton({ 
  path, 
  variant = 'contained',
  children = 'Ir al Dashboard',
  ...props 
}: DashboardButtonProps) {
  const handleDashboard = () => {
    externalRedirect.dashboard(path);
  };

  return (
    <Button
      variant={variant}
      onClick={handleDashboard}
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

export default DashboardButton;
