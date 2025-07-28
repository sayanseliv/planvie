const lightTheme = {
  dark: false,
  colors: {
    primary: '#007AFF',
    background: '#ffffff',
    card: '#ffffff',
    surface: '#f9f9f9',
    text: '#000000',
    textSecondary: '#8e8e93',
    border: '#000000',
    placeholder: '#1c1c1e',
    notification: '#ff3b30',
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

export default lightTheme;
