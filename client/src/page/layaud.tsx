import React from 'react';

export const Layaud = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: '100vh', width: '100vw' }}>
      {/* Header */}
      <header className="bg-primary text-white p-2 w-100">
        <nav className="container-fluid">
          <h1 className="text-center">Hospital El PEPE</h1>
        </nav>
      </header>

      {/* Layout principal */}
      <div className="d-flex flex-grow-1 w-100">
        {/* Barra lateral */}
        <aside
          className="bg-light p-3 shadow-sm"
          style={{
            width: '250px', // Ancho fijo para la barra lateral
            minHeight: '100%',
          }}
        >
          <h5 className="border-bottom pb-2 mb-3">Costado</h5>
          <ul className="list-unstyled">
            <li className="py-2">
              <a href="#enlace1" className="text-dark text-decoration-none">
                Enlace 1
              </a>
            </li>
            <li className="py-2">
              <a href="#enlace2" className="text-dark text-decoration-none">
                Enlace 2
              </a>
            </li>
            <li className="py-2">
              <a href="#enlace3" className="text-dark text-decoration-none">
                Enlace 3
              </a>
            </li>
          </ul>
        </aside>

        {/* Contenido principal */}
        <main className="flex-grow-1 p-4 bg-white w-100">
          <h1>Este es el cuerpo</h1>
        </main>
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
