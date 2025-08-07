import { Chip, ChipProps } from '@mui/material'

interface TagBadgeProps extends Omit<ChipProps, 'variant'> {
  label: string
  variant?: 'default' | 'outlined' | 'success' | 'warning' | 'error'
}

export function TagBadge({ label, variant = 'outlined', ...props }: TagBadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case 'success':
        return {
          bgcolor: 'success.main',
          color: 'white',
        }
      case 'warning':
        return {
          bgcolor: 'warning.main',
          color: 'white',
        }
      case 'error':
        return {
          bgcolor: 'error.main',
          color: 'white',
        }
      default:
        return {}
    }
  }

  return (
    <Chip
      label={label}
      size="small"
      variant={variant === 'outlined' ? 'outlined' : 'filled'}
      sx={{
        fontSize: '0.75rem',
        height: 24,
        ...getVariantStyles(),
      }}
      {...props}
    />
  )
}
