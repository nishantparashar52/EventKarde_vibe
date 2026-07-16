export const theme = {
  colors: {
    background: '#0c0a09',
    backgroundMuted: '#1c1917',
    surface: 'rgba(255, 255, 255, 0.05)',
    surfaceStrong: 'rgba(255, 255, 255, 0.08)',
    border: 'rgba(255, 255, 255, 0.10)',
    borderStrong: 'rgba(251, 191, 36, 0.24)',
    textPrimary: '#fafaf9',
    textSecondary: '#d6d3d1',
    textMuted: '#a8a29e',
    accent: '#f6c768',
    accentStrong: '#f59e0b',
    accentForeground: '#1c1917',
  },
  radii: {
    sm: '0.75rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    pill: '999px',
  },
  shadows: {
    soft: '0 10px 30px rgba(0, 0, 0, 0.22)',
    glow: '0 18px 60px rgba(245, 158, 11, 0.12)',
  },
  spacing: {
    section: 'clamp(4rem, 8vw, 7rem)',
    container: 'min(1280px, calc(100vw - 2rem))',
  },
  typography: {
    display: 'clamp(2.75rem, 6vw, 5.5rem)',
    heading: 'clamp(2rem, 4vw, 3.5rem)',
    body: '1rem',
    bodyLarge: '1.125rem',
    label: '0.75rem',
  },
} as const
