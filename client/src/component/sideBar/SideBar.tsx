import { NavLink } from 'react-router-dom';
import './SideBar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Perfil */}
      <div className="p-3">
        <div className="d-flex align-items-center">
          <div className="avatar-container">PE</div>
          <div className="ms-3">
            <div className="fw-bold">Dr. El pepe</div>
            <small>Médico General</small>
          </div>
        </div>
      </div>

      {/* nav */}
      <nav className="mt-3">
        {/* Principal */}
        <div className="px-3 mb-2">
          <small className="text-secondary text-uppercase">Principal</small>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/medico/dashboard" className="nav-link">Panel Principal</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/medico/consultas" className="nav-link d-flex justify-content-between">
              Consultas Pendientes
              <span className="badge rounded-pill align-self-center">5</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/medico/citas" className="nav-link d-flex justify-content-between">
              Citas de Hoy
              <span className="badge rounded-pill align-self-center">8</span>
            </NavLink>
          </li>
        </ul>

        {/* Pacientes */}
        <div className="px-3 mb-2 mt-4">
          <small className="text-secondary text-uppercase">Pacientes</small>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/medico/pacientes" className="nav-link d-flex justify-content-between">
              Todos los Pacientes
              <span className="badge rounded-pill align-self-center">120</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/medico/pacientes-nuevos" className="nav-link d-flex justify-content-between">
              Pacientes Nuevos
              <span className="badge rounded-pill align-self-center">3</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/medico/historial" className="nav-link">Historiales</NavLink>
          </li>
        </ul>

        {/* Administración */}
        <div className="px-3 mb-2 mt-4">
          <small className="text-secondary text-uppercase">Administración</small>
        </div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <NavLink to="/app/paciente/dashboard" className="nav-link">Configuración</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/medico/reportes" className="nav-link d-flex justify-content-between">
              Reportes
              <span className="badge rounded-pill align-self-center">2</span>
            </NavLink>
          </li>
        </ul>

        {/* cerrar sesión */}
        <div className="mt-4">
        <button 
          className="btn btn-link w-100 text-decoration-none"
          onClick={() => {/* lógica para cerrar sesión */}}>
          Cerrar Sesión
        </button>
      </div>
      </nav>
    </div>
  );
};

export default Sidebar;