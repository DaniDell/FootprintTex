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
    fontFamily: '"Poppins", Arial, sans-serif',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
      
      .confirm-button-class {
        background-color: #CACB4C;
        color: black;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
      }

      .cancel-button-class {
        background-color: #5E7A64;
        color: white;
        border-radius: 5px;
        padding: 5px;
        margin: 5px;
      }
      `,
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