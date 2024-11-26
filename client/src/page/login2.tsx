import React, { useState, useEffect } from 'react';
import backgroundImg from '../assets/2dab48e71b17bd29b01469f11981c192.jpg';
import { useAuthStore } from '../store/useAuth';

export const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Estado y métodos de Zustand
  const { login } = useAuthStore();


  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    };
// Inicie un usuario
    login({
      id: 1,
      name: 'Alice Johnson',
      email: 'alice.johnson@example.com',
      password: '123456',
      status: 'active',
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9',
      refreshToken: 'def5020023904f21cfe8b1bd9f...',
      userRole: "Medicos",
      createdAt: '2024-11-22T10:00:00.000Z',
      updatedAt: '2024-11-22T10:00:00.000Z',
    },'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');

    alert('Inicio de sesión exitoso.');
    
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      {/* Layout principal */}
      <div className="d-flex flex-grow-1 w-100">
        {/* Sección de imagen */}
        <div
          style={{
            flex: 1,
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>

        {/* Sección del formulario */}
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: '30%', background: 'rgba(200,200,200,0.4)' }}
        >
          <div
            style={{
              width: '450px',
              padding: '30px',
              color: '#004C79',
              fontSize: '15px',
            }}
          >
            <div className="card-body">
              <h2
                className="card-title text-center mb-4"
                style={{ color: '#004C79', fontWeight: '700px' }}
              >
                Bienvenido de nuevo!
              </h2>
              <br />
              <br />
              <form onSubmit={handleLogin}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Ingresa tu correo"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Ingresa tu contraseña"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-end">
                  <a
                    href="#"
                    className="text-decoration-none mt-3"
                    style={{ color: '#004C79', margin: '0' }}
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
                <br />
                {errorMessage && <p className="text-danger">{errorMessage}</p>}
                <button
                  type="submit"
                  className="btn w-100"
                  style={{
                    background: '#004C79',
                    color: 'white',
                    boxShadow: '0px 6px 12px rgba(0, 76, 121, 0.6)',
                  }}
                >
                  Iniciar sesión
                </button>
              </form>
              <div className="text-center mt-3">
                <a
                  href="/forgot-password"
                  className="text-decoration-none"
                  style={{ color: '#004C79' }}
                >
                  ¿No tienes una cuenta? Regístrate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
