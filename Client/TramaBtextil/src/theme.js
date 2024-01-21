import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#FAFAFA',
    },
    text: {
      primary: '#4a4a46', 
      secondary:  '#737373',
    },
    primary: {
      main: '#8B5982', 
    },
    secondary: {
      main: '#CACB4C', 
    },
    custom: {
      main: '#5E7A64', 
    },
    custom2: {
      main: '#F8F8F8', 
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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '500px', 
        },
      },
    },
  },
});

export default theme;