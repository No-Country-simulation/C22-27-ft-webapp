/**
 * @fileoverview Configuración de rutas principales de la aplicación médica
 * @module Routes
 * @author [Tu nombre o el del equipo]
 * @version 1.0.0
 */

/**
 * @typedef {Object} RouteConfig
 * @property {string} path - Ruta URL
 * @property {JSX.Element} element - Componente React a renderizar
 * @property {JSX.Element} [errorElement] - Componente para manejar errores
 * @property {RouteConfig[]} [children] - Sub-rutas anidadas
 */

/**
 * @constant
 * @type {import('react-router-dom').RouteObject[]}
 * @description Router principal que contiene todas las rutas de la aplicación
 * 
 * @example
 * import router from './routes';
 * 
 * // En tu archivo principal
 * <RouterProvider router={router} />
 * 
 * @returns {RouteObject[]} Configuración de rutas de la aplicación
 */
import { createBrowserRouter } from "react-router-dom";
import { Login } from "../page/login2";
import { Layaud } from "../page/layaud";
const router = createBrowserRouter([
  //ruta para landing page
  {
    path: "/",
    element: <div>Página de Inicio</div>,
    errorElement: <div>¡Ups! Algo salió mal - Página no encontrada</div>,
  },
  //ruta para el layout principal de la aplicación
  {
    path: "/app",
    element: <Layaud/>,
    children: [
      // Rutas para Pacientes
      {
        path: "paciente",
        children: [
          {
            path: "dashboard",
            element: <div>Panel de Control - Paciente</div>,
          },
          {
            path: "agendar-cita",
            element: <div>Agendar Nueva Cita</div>,
          },
          {
            path: "mis-citas",
            element: <div>Mis Citas Programadas</div>,
          },
          {
            path: "consulta/:citaId",
            element: <div>Sala de Consulta Virtual</div>,
          },
          {
            path: "mi-historial",
            element: <div>Mi Historial Médico</div>,
          },
        ],
      },
      // Rutas para Médicos
      {
        path: "medico",
        children: [
          {
            path: "dashboard",
            element: <div>Panel de Control - Médico</div>,
          },
          {
            path: "consultas",
            element: <div>Consultas Pendientes</div>,
          },
          {
            path: "pacientes",
            element: <div>Lista de Pacientes</div>,
          },
          {
            path: "historial/:pacienteId",
            element: <div>Historial del Paciente</div>,
          },
        ],
      },
      // Rutas para Administradores
      {
        path: "admin",
        children: [
          {
            path: "dashboard",
            element: <div>Panel de Control - Administrador</div>,
          },
          {
            path: "gestionar-citas",
            element: <div>Gestión de Citas</div>,
          },
          {
            path: "gestionar-medicos",
            element: <div>Gestión de Médicos</div>,
          },
          {
            path: "gestionar-pacientes",
            element: <div>Gestión de Pacientes</div>,
          },
        ],
      },
    ],
  },
  //rutas de autenticación
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/registro",
    element: <div>Página de Registro</div>,
  },
]);

export default router;
