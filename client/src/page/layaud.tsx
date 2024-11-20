import { Outlet } from "react-router-dom";
import Sidebar from "../component/sideBar/Sidebar";
import Navbar from "../component/navbar/Navbar";

export const Layaud = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh", width: "100vw", background:"#E8E8E8"}}>
      {/* Header */}
      <header>
        <Navbar/>
      </header>

      {/* Layout principal */}
      <div className="d-flex" style={{ marginTop: "5rem" }}>
        {/* Barra lateral */}
        <aside
          className="bg-light"
          style={{
            width: "250px", // Ancho fijo de la barra lateral
            height: "calc(100vh - 5rem)", // Altura ajustada al espacio disponible debajo del header
            position: "sticky",
            top: "5rem", // Alineada justo debajo del header
            overflowY: "auto", // Scroll vertical independiente
          }}
        >
          <Sidebar/>
        </aside>

        {/* Contenido principal */}
        <main
          className="flex-grow-1 p-4"
          style={{
            padding: "20px"
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