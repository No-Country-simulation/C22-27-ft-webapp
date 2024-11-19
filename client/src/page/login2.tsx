import React from 'react';

export const Login = () => {
  return (
    <div
      className="d-flex flex-column min-vh-100"
      style={{
        backgroundImage: 'url("/path/to/your-image.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
      }}
    >
      {/* Header */}
      <header className="bg-primary text-white p-2 w-100">
        <nav className="container-fluid">
          <h1 className="text-center">Hospital el PEPE</h1>
        </nav>
      </header>

      {/* Layout principal */}
      <div className="d-flex flex-grow-1 justify-content-center align-items-center w-100 px-4">
        {/* Formulario de Login (centrado verticalmente y en la derecha) */}
        <div
          className="card shadow-sm"
          style={{
            width: '100%',
            height: '70%',
            maxWidth: '450px', 
            position: 'absolute',
            right: '0',
            marginRight: '60px',
            padding: '20px', 
            borderRadius: '8px', 
          }}
        >
          <div className="card-body">
            <h4 className="card-title text-center mb-4">Bienvenido de nuevo</h4>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Ingresa tu correo"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Ingresa tu contraseña"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
            </form>
            <div className="text-center mt-3">
              <a href="/forgot-password" className="text-decoration-none">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-light text-black w-100" style={{ padding: '3px 0' }}>
        <div className="container text-center">
          <p>&copy; 2024 Hospital el PEPE</p>
        </div>
      </footer>
    </div>
  );
};
