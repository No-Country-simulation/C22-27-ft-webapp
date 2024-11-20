import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [notificaciones, setNotificaciones] = useState(5)
  const [showNotifications, setShowNotifications] = useState(false)
  const notificationRef = useRef(null)

  // test lista de notificaciones
  const listaNotificaciones = [
    { id: 1, text: 'Nueva consulta pendiente', time: 'Hace 5 min' },
    { id: 2, text: 'Mensaje consulta de paciente', time: 'Hace 1 hora' },
  ]

  return (
    <nav
      className="navbar fixed-top shadow-sm p-3"
      style={{ backgroundColor: '#0063B4' }}
    >
      <div className="container-fluid px-4">
        {/* logo/title */}
        <span className="navbar-brand fw-bold fs-4 text-white">
          Hospital El PEPE
        </span>

        {/* Buscador */}
        <div className="d-none d-md-block mx-auto" style={{ width: '35%' }}>
          <div className="input-group">
            <span className="input-group-text border-0 bg-white bg-opacity-25">
              <span className="text-white">🔍</span>
            </span>
            <input
              type="search"
              className="form-control border-0 bg-white bg-opacity-25 text-white"
              placeholder="Buscar paciente..."
            />
          </div>
        </div>

        {/* Iconos de la derecha */}
        <div className="d-flex align-items-center gap-3">
          {/* Notificaciones */}
          <div ref={notificationRef} className="dropdown">
            <button
              className="btn d-flex align-items-center justify-content-center position-relative rounded-circle"
              onClick={() => setShowNotifications(!showNotifications)}
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              <span className="text-white fs-5">🔔</span>
              {notificaciones > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {notificaciones}
                </span>
              )}
            </button>

            {showNotifications && (
              <div
                className="dropdown-menu dropdown-menu-end shadow-sm show top-100 position-absolute bg-white"
                style={{
                  minWidth: '300px',
                  right: 0,
                  marginTop: '0.5rem',
                  zIndex: 1000,
                }}
              >
                <div className="p-2 border-bottom bg-light">
                  <h6 className="mb-0">Notificaciones</h6>
                </div>

                {listaNotificaciones.map((notif, index) => (
                  <button
                    key={notif.id}
                    className={`dropdown-item py-2 px-3 border-bottom ${
                      index === 0 ? 'bg-success bg-gradient' : ''
                    }`}
                  >
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <div className="mb-1">{notif.text}</div>
                        <small className="text-muted">{notif.time}</small>
                      </div>
                      {index === 0 && (
                        <span className="badge bg-primary ms-2">Nueva</span>
                      )}
                    </div>
                  </button>
                ))}

                <div className="p-2 text-center">
                  <small className="text-primary" role="button">
                    Ver todas las notificaciones
                  </small>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <NavLink 
            to="configuracion" 
            className="btn d-flex align-items-center justify-content-center rounded-circle"
            style={{
              width: '40px',
              height: '40px',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <span className="fs-4 text-white text-decoration-none">⚙️</span>
          </NavLink>

          {/* Avatar */}
          <button
            className="btn p-0 rounded-circle overflow-hidden"
            style={{
              width: '60px',
              height: '60px',
            }}
          >
            <img
              src="https://www.sopitas.com/wp-content/uploads/2020/10/meme-el-pepe-ete-sech-origen.png"
              alt="Avatar"
              className="w-100 h-100 object-fit-cover"
            />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
