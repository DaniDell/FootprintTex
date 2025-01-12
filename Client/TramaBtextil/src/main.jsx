import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { ThemeProvider, createTheme,  responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const root = document.getElementById('root');

const customTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: "'Nunito', 'Open Sans', Roboto, Helvetica, Arial",
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
  breakpoints: {
    values: {
      xs: 0,
      s: 400,
      sm: 769,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  
});



ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);