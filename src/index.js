import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from "./login"
import Cadastro from "./Cadastro"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import EditaProdutos from './EditarProduto';
import CadastroProdutos from './CadastroProdutos';
import MenuResponsivo from './MenuResponsivo';
import Menu from "./components/Menu";


const theme = createTheme({
  palette: {
      mode: 'light',
  primary: {
    main: '#000000',
  },
  secondary: {
    main: '#f50057',
  },
  background: {
    default: '#f8bbd0',
    paper: '#fae3ff',
  },
  text: {
    primary: 'rgba(0,0,0,0.87)',
    secondary: '#000000',
    disabled: '#fd0531',
    hint: '#000000',
  },
  shape: {
    borderRadius: 15,
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
    path: "/editar",
    element: <EditaProdutos />
  },
  {
    path: "/produtos",
    element: <CadastroProdutos />
  },
  {
    path: "/menuResponsivo",
    element: <MenuResponsivo />
  },
  {
    path: "/menu",
    element: <Menu />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
