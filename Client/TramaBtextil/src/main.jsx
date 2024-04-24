import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import Hotjar from '@hotjar/browser';

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
      sm: 769,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});



const Main = () => {
  useEffect(() => {
    const siteId = 4958279;
    const hotjarVersion = 6;

    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={customTheme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </Provider>
  );
};

ReactDOM.createRoot(root).render(<Main />);