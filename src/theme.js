export const primary = '#6868BE';
export const secondary = '#B3E9C7';
export const tertiary = '#E63946';
export const highlight = '#FBECD2';
// export const background = '#424242';
export const background = '#8BABE4';

export default {
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: [
      'inter',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    type: 'dark',
    primary: { main: primary },
    secondary: { main: secondary },
    tertiary: { main: tertiary },
  },
  status: {
    danger: 'orange',
  },
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
    MuiPaper: {
      elevation: 0,
      square: true,
    },
    MuiLink: {
      underline: 'none',
    },
  },
  overrides: {
    MuiTooltip: {
      tooltip: {
        minWidth: '200px',
        color: background,
        backgroundColor: 'white',
      },
      arrow: {
        color: 'white',
      },
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: 16,
      },
    },
  },
};
