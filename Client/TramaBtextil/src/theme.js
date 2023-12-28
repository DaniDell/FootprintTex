import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#FAFAFA',
    },
    text: {
      primary: '#4a4a46', 
    },
    primary: {
      main: '#8B5982', 
    },
    secondary: {
      main: '#CACB4C', 
    },
  },
  typography: {
    fontFamily: 'poppins, sans-serif',
    styleOverrides: {
      h6: {
        color: '#4a4a46', 
        fontSize: '1.5rem', 
      },
      h5: {
        fontSize: '2rem',
        color: '#5E7A64',
      },
    },
  },
});

export default theme;
