import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as eliminarClienteAction } from "./components/Cliente";
import ErrorPagina from "./components/ErrorPagina";
import Layout from "./components/Layout";
import EditarCliente, { loader as editarClienteLoader, action as editarClienteAction, } from "./pages/EditarCliente";
import Index, { loader as clientesLoader } from "./pages/Index";
import NuevoCliente, { action as nuevoClienteAction, } from "./pages/NuevoCliente";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Index />,
        loader: clientesLoader,
        errorElement: <ErrorPagina />,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoCliente />,
        action: nuevoClienteAction,
        errorElement: <ErrorPagina />,
      },
      {
        path: "/clientes/:clienteId/editar",
        element: <EditarCliente />,
        loader: editarClienteLoader,
        action: editarClienteAction,
        errorElement: <ErrorPagina />,
      },
      {
        path: "/clientes/:clienteId/eliminar",
        action: eliminarClienteAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
