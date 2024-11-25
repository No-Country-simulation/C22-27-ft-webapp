import { Outlet } from "react-router-dom";
import Sidebar from "../component/common/sideBar/SideBar";
import Navbar from "../component/common/navbar/Navbar";

export const Layaud = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh", background:"#E8E8E8"}}>
      {/* Header */}
      <header className="flex-grow-1 d-flex flex-column "
      style={{marginLeft:"250px"}}> 
        <Navbar/>
      </header>

      {/* Layout principal */}
      <div className="d-flex" >
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
          className="flex-grow-1 "
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