import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </Provider>
);