import './historial.css';

const Historial = () => {
  // Datos simulados (como si vinieran de una base de datos)
  const datos = [
    { dni: '12345678', nombre: 'Juan Pérez', domicilio: 'posadas', fnacimiento:'05/01/1999',finicio:'20/05/2020'},
    { dni: '87654321', nombre: 'Ana López', domicilio: 'pampa', fnacimiento:'01/01/1999',finicio:'20/08/2021'},
    { dni: '56781234', nombre: 'Luis García', domicilio: 'Peru', fnacimiento:'30/03/1950',finicio:'06/06/2022'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020'},
  ];

  return (
    <div className="d-flex flex-column min-vh-100" style={{maxWidth:'1800px'}}>
      {/* Botón de Filtro */}
      <div style={{ margin: '10px', padding: '10px' }}>
        <button style={{ padding: '8px 16px', borderRadius: '8px', background: '#004C79', color: '#fff', border: 'none',boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)' }}>
          FILTRO
        </button>
      </div>

      <div
        className="rounded-3 custom-scroll"
        style={{
          margin: '0px 10px',
          padding: '0px',
          overflow: 'hidden',
          boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.75)',
        }}
      >
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          {/* Encabezado de la tabla */}
          <thead>
            <tr
              style={{
                border: 'solid 1px #004C79',
                height: '50px',
                textAlign: 'center',
                backgroundColor: '#004C79',
                color: 'white',
              }}
            >
              <th style={{ border: 'solid 1px #004C79', width: '20%', padding: '10px' }}>DNI</th>
              <th style={{ border: 'solid 1px #004C79', width: '20%', padding: '10px' }}>NOMBRE</th>
              <th style={{ border: 'solid 1px #004C79', width: '20%', padding: '10px' }}>DOMICILIO</th>
              <th style={{ border: 'solid 1px #004C79', width: '20%', padding: '10px' }}>FECHA DE NACIMIENTO</th>
              <th style={{ border: 'solid 1px #004C79', width: '20%', padding: '10px' }}>FECHA DE INICIO</th>
            </tr>
          </thead>
        </table>

        {/* Contenedor con barra de desplazamiento para el cuerpo de la tabla */}
        <div
          style={{
            maxHeight: '220px', // Altura máxima (5 filas de 40px cada una)
            overflowY: 'auto', // Barra de desplazamiento vertical
          }}
          className="custom-scroll"
        >
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <tbody>
              {datos.map((fila, index) => (
                <tr
                  key={index}
                  style={{
                    border: 'solid 1px #004C79',
                    height: '40px',
                    textAlign: 'center',
                    backgroundColor: index % 2 === 0 ? '#e3f2fd' : '#ffffff',
                  }}
                >
                  <td style={{ border: 'solid 1px #004C79', padding: '10px' }}>{fila.dni}</td>
                  <td style={{ border: 'solid 1px #004C79', padding: '10px' }}>{fila.nombre}</td>
                  <td style={{ border: 'solid 1px #004C79', padding: '10px' }}>{fila.domicilio}</td>
                  <td style={{ border: 'solid 1px #004C79', padding: '10px' }}>{fila.fnacimiento}</td>
                  <td style={{ border: 'solid 1px #004C79', padding: '10px' }}>{fila.finicio}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Botones de acción */}
      <div
        className="d-flex align-items-center justify-content-center text-center"
        style={{ margin: '20px 10px 10px 10px', height: '40px', padding: '20px' }}
      >
        <button
          style={{
            margin: '10px',
            padding: '6px',
            width: '12%',
            borderRadius: '18px',
            background: '#004C79',
            color: '#fff',
            border: 'none',
            boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'
          }}
        >
          SELECCIONAR
        </button>
      </div>

      <div 
        className=" text-center rounded-3"
        style={{ 
          margin: '20px 10px 10px 10px', 
          padding: '20px', 
          background: 'rgb(255,255,255)', 
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.25)', 
          flexWrap: 'wrap' 
        }}
      >
        <div 
        className='d-flex align-items-center justify-content-center'
        style={{flexWrap: 'wrap'}}
        >
          <div 
            className="flex-grow-1 rounded-3" 
            style={{
              boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.25)',
              borderRadius:'5px',
              background: '#e3f2fd',
              margin: '10px', 
              minWidth: '20%',
              maxWidth:'25%',
              minHeight:'200px',
              flex: '1 1 calc(20% - 20px)', 
              textAlign: 'center', 
              color:'#004C79'
            }}
          >
            <h4>Datos Personales</h4>
            <p></p>
            
          </div>
          <div 
            style={{
              minHeight:'200px',
              boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.25)',
              borderRadius:'5px',
              background: '#e3f2fd', 
              margin: '10px', 
              minWidth: '20%',
              maxWidth:'25%',
              flex: '1 1 calc(20% - 20px)', 
              textAlign: 'center',
              color:'#004C79'
            }}
          >
            <h4>Antecedentes</h4>
            <p></p>
            
          </div>
          <div 
            style={{
              minHeight:'200px',
              boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.25)',
              borderRadius:'5px',
              background: '#e3f2fd', 
              margin: '10px', 
              minWidth: '20%',
              maxWidth:'25%',
              flex: '1 1 calc(20% - 20px)', 
              textAlign: 'center',
              color:'#004C79'
            }}
          >
            <h4>Actos médicos</h4>
            <p></p>
          </div>
          <div 
            style={{
              minHeight:'200px',
              boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.25)',
              borderRadius:'5px',
              background: '#e3f2fd',
              margin: '10px', 
              minWidth: '20%',
              maxWidth:'25%',
              flex: '1 1 calc(20% - 20px)', 
              textAlign: 'center',
              color:'#004C79'
            }}
          >
            <h4>Enfermedades</h4>
            <p></p>
          </div>
          <div 
            style={{
              minHeight:'200px',
              boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.25)',
              borderRadius:'5px',
              background: '#e3f2fd',
              margin: '10px', 
              minWidth: '20%',
              maxWidth:'25%',
              flex: '1 1 calc(20% - 20px)', 
              textAlign: 'center',
              color:'#004C79'
            }}
          >
            <h4>Medicamentos</h4>
            <p></p>
          </div>
        </div>
        

        {/* Botones de acción */}
        <div
          className="d-flex align-items-center justify-content-center text-center"
          style={{ margin: '20px 0', gap: '15px' }}
        >
          <button
            style={{
              padding: '6px',
              minWidth: '120px',
              borderRadius: '25px',
              background: '#004C79',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              boxShadow: '0px 4px 6px rgba(0,0,0,0.25)',
            }}
          >
            Eliminar
          </button>
          <button
            style={{
              padding: '6px',
              minWidth: '120px',
              borderRadius: '25px',
              background: '#004C79',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.3s ease',
              boxShadow: '0px 4px 6px rgba(0,0,0,0.2)5',
            }}
          >
            Modificar
          </button>
        </div>
      </div>
      {/**Termina container de la traida de datos */}
      {/** Empieza container de observaciones hechas antes*/}
      <div 
        className="d-flex align-items-center justify-content-center text-center rounded-3"
        style={{ 
          margin: '20px 10px 10px 10px', 
          padding: '20px', 
          background: 'rgb(255,255,255)', 
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.25)', 
          flexWrap: 'wrap' 
        }}
      >
        <div style={{
          margin:'10px',
          background: '#e3f2fd',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.25)',
          maxWidth:'250px',
          color:'#004C79'
        }}>
          <h5>OBSERVACIÓN</h5>
          <p>fecha: 22/10/2022</p>
          <p>Se notaron ampollas en la garganta</p>
        </div>
        <div style={{
          margin:'10px',
          background: '#e3f2fd',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.25)',
          maxWidth:'250px',
          color:'#004C79'
        }}>
          <h5>OBSERVACIÓN</h5>
          <p>fecha: 22/10/2022</p>
          <p>Se notaron ampollas en la garganta</p>
        </div>
        <div style={{
          margin:'10px',
          background: '#e3f2fd',
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.25)',
          maxWidth:'250px',
          color:'#004C79'
        }}>
          <h5>OBSERVACIÓN</h5>
          <p>fecha: 22/10/2022</p>
          <p>Se notaron ampollas en la garganta</p>
        </div>
        
      </div>
      {/**Termina observaciones */}
      {/**Empieza formulario de observaciones */}
      <div 
        className=" rounded-3"
        style={{ 
          margin: '20px 10px 10px 10px', 
          padding: '20px', 
          background: 'rgb(255,255,255)', 
          boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.25)', 
          flexWrap: 'wrap',
          color:'#004C79'
        }}
      >
        <div
          className="d-flex align-items-center justify-content-center text-center"
          style={{ 
            margin: '20px 10px 10px 10px', 
            padding: '20px', 
            flexWrap: 'wrap' 
          }}
        >
          <div className="mb-3" style={{paddingRight:'30px'}}>
              <label htmlFor="title" className="form-label">
                TITULO
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Ingresa el título"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">
                FECHA
              </label>
              <input
                type="date"
                className="form-control"
                id="date"
              />
            </div>
        </div>
        
        <div className="mb-3">
          <label htmlFor="text" className="form-label">
            OBSERVACIÓN
          </label>
          <input
            type="text"
            className="form-control"
            id="text"
            placeholder="Ingresa tu observación"
          />
        </div>
      </div>
      {/** Termina formulario de observaciones */}
    </div>
  );
};

export default Historial;
