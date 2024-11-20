import { Outlet } from "react-router-dom";
import SideBar from "../component/sideBar/SideBar";

export const Layaud = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh", width: "100vw" }}>
      {/* Header */}
      <header
        className="bg-primary text-white w-100"
        style={{ height: "5rem", position: "fixed", top: 0, zIndex: 10 }}
      >
        <nav className="container-fluid">
          <h1 className="text-center">Hospital El PEPE</h1>
        </nav>
      </header>

      {/* Layout principal */}
      <div className="d-flex" style={{ marginTop: "5rem" }}>
        {/* Barra lateral */}
        <aside
          className="bg-light"
          style={{
            width: "250px", // Ancho fijo de la barra lateral
            height: "calc(100vh - 5rem)", // Altura ajustada al espacio disponible debajo del header
            position: "fixed",
            top: "5rem", // Alineada justo debajo del header
            overflowY: "auto", // Scroll vertical independiente
          }}
        >
          <SideBar />
        </aside>

        {/* Contenido principal */}
        <main
          className="flex-grow-1 p-4 bg-white"
          style={{
            marginLeft: "250px", // Espacio para la barra lateral
            padding: "20px",
          }}
        >
          <Outlet/>
        </main>
      </div>

      {/* Footer */}
      {/* <footer
        className="bg-light text-black w-100"
        style={{
          padding: "3px 0",
          marginTop: "auto",
          position: "fixed",
          bottom: 0,
          zIndex: 5,
        }}
      >
        <div className="container text-center">
          <p>&copy; 2024 Hospital el PEPE</p>
        </div>
      </footer> */}
    </div>
  );
};