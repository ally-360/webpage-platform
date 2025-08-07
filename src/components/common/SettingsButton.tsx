'use client';

import { IconButton, IconButtonProps, Tooltip } from '@mui/material';
import { Settings } from '@mui/icons-material';

interface SettingsButtonProps extends IconButtonProps {
  tooltip?: string;
}

/**
 * Settings button component
 */
export function SettingsButton({ 
  tooltip = 'Configuración',
  ...props 
}: SettingsButtonProps) {
  return (
    <Tooltip title={tooltip}>
      <IconButton
        size="small"
        sx={{
          width: 40,
          height: 40,
          color: 'text.primary',
          '&:hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.04)',
          },
          ...props.sx,
        }}
        {...props}
      >
        <Settings fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}

export default SettingsButton;
