import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, BrowserRouter  } from "react-router-dom";
import router from "./routes/route";
import Sidebar from "./component/sideBar/SideBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <Sidebar/>
    </BrowserRouter>
    <RouterProvider router={router} />
  </StrictMode>
);
