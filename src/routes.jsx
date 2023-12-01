
import { createBrowserRouter } from "react-router-dom";

import Inicio from "./views/inicio";
import IngresarDatos from "./views/ingresarDatos";
import EliminarDatos from "./views/eliminarDatos";
import EditarDatos from "./views/editarDatos";
import Ver from "./views/ver";
import Login from './views/login'
import CrearPublicacion from "./views/crearPosteo";


const rutas = createBrowserRouter([
    {
        path: "/",
        element: <Inicio />,
    },
    {
        path: "/Ingresar",
        element: <IngresarDatos />,
    },
    {
        path: "/Eliminar/:id",
        element: <EliminarDatos />,
    },
    {
        path: "/Editar/:id",
        element: <EditarDatos />,
    },
    {
        path: "/Ver/:id",
        element: <Ver />,
    },
    {
        path: "/Login",
        element: <Login />,
    },
    {
        path: "/crear",
        element: <CrearPublicacion />,
    },
]);

export { rutas };