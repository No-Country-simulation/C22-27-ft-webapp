import { useState, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { GoGear } from 'react-icons/go'
import { TbBellRinging, TbBellRingingFilled } from 'react-icons/tb'
import { BiSearch } from 'react-icons/bi'

const Navbar = () => {
  const [notificaciones, setNotificaciones] = useState(10)
  const [showNotifications, setShowNotifications] = useState(false)
  const notificationRef = useRef(null)

  // test lista de notificaciones
  const listaNotificaciones = [
    { id: 1, text: 'Nueva consulta pendiente', time: 'Hace 5 min' },
    { id: 2, text: 'Mensaje consulta de paciente', time: 'Hace 1 hora' },
  ]

  return (
    <nav
      className="navbar shadow-sm p-3 w-auto "
      style={{
        backgroundColor: '#337094',
      }}
    >
      <div className="container-fluid px-4">
        {/* Buscador */}
        <div className="d-flex" style={{ width: '600px' }}>
          <div className="input-group">
            <span className="input-group-text border-0 bg-white bg-opacity-25">
              <BiSearch className="text-white" />
            </span>
            
            <input
              type="search"
              placeholder="Buscar paciente..."
              className='form-control'
              style={{
                border: '1px solid rgba(255, 255, 255, 0.9)',
                background: "rgba(255, 255, 255, 0.9)",
                borderRadius: ' 0 6px 6px 0',
                padding: '8px 12px',
                width: '240px',
                fontSize: '14px',
                color: '#1e293b',
              }}
            />
          </div>
        </div>

        {/* Iconos de la derecha */}
        <div className="d-flex align-items-center gap-3">
          {/* Notificaciones */}
          <div ref={notificationRef} className="dropdown">
            <button
              className="btn d-flex align-items-center justify-content-center position-relative rounded"
              onClick={() => setShowNotifications(!showNotifications)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }}
            >
              {/* btn notificaciones */}
              {notificaciones > 0 ? (
                <TbBellRingingFilled
                  className="text-white text-decoration-none"
                  style={{ fontSize: '25px' }}
                />
              ) : (
                <TbBellRinging
                  className="text-white text-decoration-none"
                  style={{ fontSize: '25px' }}
                />
              )}
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
                      index === 0 ? ' bg-gradient' : ''
                    }`}
                    style={{
                      backgroundColor: index === 0 ? '#337094' : 'transparent',
                      color: index === 0 ? 'white' : 'inherit',
                    }}
                  >
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <div className="mb-1">{notif.text}</div>
                        <small className="text-muted">{notif.time}</small>
                      </div>
                      {index === 0 && (
                        <span className="badge bg-primary ms-2 ">Nueva</span>
                      )}
                    </div>
                  </button>
                ))}

                <div className="p-2 text-center">
                  <NavLink
                    to="consultas"
                    role="button"
                    className="btn w-100 border"
                    style={{
                      color: '#004C79',
                    }}
                  >
                    Ver todas las notificaciones
                  </NavLink>
                </div>
              </div>
            )}
          </div>

          {/* Settings */}
          <NavLink
            to="configuracion"
            className="btn d-flex align-items-center justify-content-center rounded"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
            }}
          >
            <GoGear
              className="text-white text-decoration-none"
              style={{ fontSize: '25px' }}
            />
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
