'use client';

import { useMediaQuery, Breakpoint } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type Query = 'up' | 'down' | 'between' | 'only';

export function useResponsive(query: Query, start?: Breakpoint, end?: Breakpoint) {
  const theme = useTheme();

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as Breakpoint));
  const mediaDown = useMediaQuery(theme.breakpoints.down(start as Breakpoint));
  const mediaBetween = useMediaQuery(theme.breakpoints.between(start as Breakpoint, end as Breakpoint));
  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint));

  if (query === 'up') {
    return mediaUp;
  }

  if (query === 'down') {
    return mediaDown;
  }

  if (query === 'between') {
    return mediaBetween;
  }

  return mediaOnly;
}
