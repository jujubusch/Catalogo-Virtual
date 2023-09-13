import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./login"
import Cadastro from "./Cadastro"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Filmes from './Filmes';
import EditaFilme from './EditaFilme';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
      mode: 'light',
  primary: {
    main: '#ffa8e5',
  },
  secondary: {
    main: '#f50057',
  },
  background: {
    default: '#FEB8B8',
    paper: '#E1FFF4',
  },
  text: {
    primary: '#ffa8e5',
    secondary: '#000000',
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
  },
  {
    path: "/edicao/:id",
    element: <EditaFilme />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
