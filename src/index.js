import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./login"
import Cadastro from "./Cadastro"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Filmes from './Filmes';

const theme = createTheme({
  palette: {
      mode: 'light',
  primary: {
    main: '#8A01E1',
  },
  secondary: {
    main: '#f50057',
  },
  background: {
    default: '#8A01E1',
    paper: '#cafbfb',
  },
  text: {
    primary: 'rgba(0,0,0,0.87)',
    secondary: '#AB11F7',
    disabled: '#fd0531',
    hint: '#000000',
  },
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/filmes",
    element: <Filmes />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
