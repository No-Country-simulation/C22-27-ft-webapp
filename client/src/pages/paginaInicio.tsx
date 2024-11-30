export const PaginaInicio = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh", // Asegura que el contenedor ocupe toda la altura de la pantalla
          margin: 0,
        }}
      >
        {/* Header */}
        <header
          className="bg-primary text-white w-100"
          style={{
            margin: 0,
            padding: 0,
          }}
        >
          <nav className="container-fluid">
            <h1 className="text-center">Hospital el PEPE</h1>
          </nav>
        </header>
        {/* Main */}
        <main className="d-flex flex-grow-1 w-100 px-4">
            <div>
                
            </div>
          <div className="d-flex flex-grow-1 justify-content-center align-items-center w-100 px-4"
            style={{
              display: "flex", 
              justifyContent:'center',
              gap: "20px", 
              width:'100%',
            }}
          >
            <button className="btn btn-primary rounded-pill shadow" style={{width:'11%'}}>Paciente</button>
            <button className="btn btn-primary rounded-pill shadow" style={{width:'11%'}}>Doctor</button>
            <button className="btn btn-primary rounded-pill shadow" style={{width:'11%'}}>Administrador</button>
          </div>
        </main>
        {/* Footer */}
        <footer
          className="text-black w-100"
          style={{
            padding: "0px",
            paddingTop: "5px",
            paddingBottom: "5px",
            margin: "0px",
            backgroundColor: "rgba(200,200,200,0.4)",
            fontSize: "12px",
          }}
        >
          <div className="container text-center">
            <p style={{ padding: "0px", margin: "0px" }}>&copy; 2024 Hospital el PEPE</p>
          </div>
        </footer>
      </div>
    );
  };
  