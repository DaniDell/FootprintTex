import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

const root = document.getElementById('root');

const customTheme = createTheme({
  ...theme,
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
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

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>
);