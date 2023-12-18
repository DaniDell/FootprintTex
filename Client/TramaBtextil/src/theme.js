import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    text: {
      primary: '#4a4a46', // Color del texto primario
    },
    primary: {
      main: '#5E7A64', // Cambia el color principal
    },
    secondary: {
      main: '#CACB4C', // Cambia el color secundario
    },
  },
  typography: {
    fontFamily: 'poppins, sans-serif',
    styleOverrides: {
      h6: {
        color: '#4a4a46', // Color del texto para variant="h6"
        fontSize: '1.5rem', // Tamaño de fuente personalizado
        // Otros estilos específicos para h6
      },
    },
  },
});

export default theme;


