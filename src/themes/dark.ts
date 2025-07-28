const darkTheme = {
  dark: true,
  colors: {
    primary: '#0A84FF',
    background: '#000000',
    card: '#1c1c1e',
    surface: '#1c1c1e',
    text: '#ffffff',
    textSecondary: '#a1a1a1',
    border: '#ffffff',
    placeholder: '#a1a1a1',
    notification: '#ff453a',
  },
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: '400' as const,
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500' as const,
    },
    bold: {
      fontFamily: 'System',
      fontWeight: '700' as const,
    },
    heavy: {
      fontFamily: 'System',
      fontWeight: '800' as const,
    },
  },
} as const;

export default darkTheme;
