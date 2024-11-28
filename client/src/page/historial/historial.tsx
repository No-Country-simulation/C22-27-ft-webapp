import './historial.css';

const Historial = () => {
  // Datos simulados (como si vinieran de una base de datos)
  const datos = [
    { dni: '12345678', nombre: 'Juan Pérez', domicilio: 'posadas', fnacimiento:'05/01/1999',finicio:'20/05/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '87654321', nombre: 'Ana López', domicilio: 'pampa', fnacimiento:'01/01/1999',finicio:'20/08/2021', hisclinica:'linkhistotia', id:'1'},
    { dni: '56781234', nombre: 'Luis García', domicilio: 'Peru', fnacimiento:'30/03/1950',finicio:'06/06/2022', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '12345678', nombre: 'Juan Pérez', domicilio: 'posadas', fnacimiento:'05/01/1999',finicio:'20/05/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '87654321', nombre: 'Ana López', domicilio: 'pampa', fnacimiento:'01/01/1999',finicio:'20/08/2021', hisclinica:'linkhistotia', id:'1'},
    { dni: '56781234', nombre: 'Luis García', domicilio: 'Peru', fnacimiento:'30/03/1950',finicio:'06/06/2022', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '12345678', nombre: 'Juan Pérez', domicilio: 'posadas', fnacimiento:'05/01/1999',finicio:'20/05/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '87654321', nombre: 'Ana López', domicilio: 'pampa', fnacimiento:'01/01/1999',finicio:'20/08/2021', hisclinica:'linkhistotia', id:'1'},
    { dni: '56781234', nombre: 'Luis García', domicilio: 'Peru', fnacimiento:'30/03/1950',finicio:'06/06/2022', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '12345678', nombre: 'Juan Pérez', domicilio: 'posadas', fnacimiento:'05/01/1999',finicio:'20/05/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '87654321', nombre: 'Ana López', domicilio: 'pampa', fnacimiento:'01/01/1999',finicio:'20/08/2021', hisclinica:'linkhistotia', id:'1'},
    { dni: '56781234', nombre: 'Luis García', domicilio: 'Peru', fnacimiento:'30/03/1950',finicio:'06/06/2022', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
    { dni: '43218765', nombre: 'María Torres', domicilio: 'Argentina', fnacimiento:'08/05/2000',finicio:'03/03/2020', hisclinica:'linkhistotia', id:'1'},
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
          maxHeight: '1000px',
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
              <th style={{ border: 'solid 1px #004C79', width: '12.5%', padding: '10px' }}>DNI</th>
              <th style={{ border: 'solid 1px #004C79', width: '14%', padding: '10px' }}>NOMBRE</th>
              <th style={{ border: 'solid 1px #004C79', width: '14%', padding: '10px' }}>DOMICILIO</th>
              <th style={{ border: 'solid 1px #004C79', width: '14%', padding: '10px' }}>FECHA DE NACIMIENTO</th>
              <th style={{ border: 'solid 1px #004C79', width: '14%', padding: '10px' }}>FECHA DE INICIO</th>
              <th style={{ border: 'solid 1px #004C79', width: '14%', padding: '10px' }}>Historia Clinica</th>
            </tr>
          </thead>
        </table>

        {/* Contenedor con barra de desplazamiento para el cuerpo de la tabla */}
        <div
          style={{
            maxHeight: '600px', // Altura máxima (5 filas de 40px cada una)
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
                  <td style={{ border: 'solid 1px #004C79', padding: '10px' }}><a href={`historial/paciente`}>{fila.hisclinica}</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/**Saque el boton de seleccionar porque tocaria el link y listo*/}

    </div>
  );
};

export default Historial;
