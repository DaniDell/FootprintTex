import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#4a4a46', 
    },
    primary: {
      main: '#5E7A64', 
    },
    secondary: {
      main: '#CACB4C', 
    },
  },
  typography: {
    fontFamily: 'poppins, sans-serif',
    styleOverrides: {
      h6: {
        color: '#4a4a46', // Color del texto para variant="h6"
        fontSize: '1.5rem', // Tamaño de fuente personalizado
      },
    },
  },
});

export default theme;


