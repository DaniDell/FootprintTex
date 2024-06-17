import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      default: '#D0C9C8',
    },
    text: {
      primary: '#474744', 
      secondary:  '#595959',
    },
    primary: {
      main: '#00947A', 
    },
    secondary: {
      main: '#595959', 
    },
    custom: {
      main: '#00947A', 
    },
    custom2: {
      main: '#F8F8F8', 
    },
  },
  typography: {
    fontFamily: 'sans-serif',
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