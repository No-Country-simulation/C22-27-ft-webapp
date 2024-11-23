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
import ProtectedRoute from "./protectedRoute";
import RouteRedirect from "./routeRedirect";

import DashboardMedic from "../page/medico/dashboardMedic";

const ROLES = {
  ADMIN: "Administrator",
  MEDIC: "Medicos",
  PATIENT: "Pacientes",
};

const router = createBrowserRouter([
  // Ruta principal
  {
    path: "/",
    element: <div> <PaginaInicio /></div>,
    errorElement: <div>¡Ups! Algo salió mal - Página no encontrada</div>,
  },

  // Área de Pacientes
  {
    path: "/app-paciente",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.PATIENT]}>
        <Layaud />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <RouteRedirect to="dashboard" />,
      },
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

  // Área de Médicos
  {
    path: "/app-medico",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.MEDIC]}>
        <Layaud />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <RouteRedirect to="dashboard" />,
      },
      {
        path: "dashboard",
        element: <DashboardMedic />,
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

  // Área de Administradores
  {
    path: "/app-administrador",
    element: (
      <ProtectedRoute allowedRoles={[ROLES.ADMIN]}>
        <Layaud />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <RouteRedirect to="dashboard" />,
      },
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

  // Rutas de autenticación
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <div>Página de Registro</div>,
  },
]);

export default router;
