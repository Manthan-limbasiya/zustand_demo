import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto Mono',
    h1: {
      fontSize: 200,
      letterSpacing: '-20px',
      fontWeight: '400',
      marginLeft: '-50px',
    },
  },
  palette: {
    primary: {
      lighter: '#E2F1FF',
      main: '#2596FF',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeObj) => {
        return `
      body {
        background-color:${themeObj.palette.grey[100]};
      }
      `;
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: 'h1',
        color: 'primary',
      },
    },
    MuiPaper: {
      disableElevation: true,
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        size: 'large',
      },
    },
  },
});

export default theme;
