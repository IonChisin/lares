import { createBrowserRouter } from "react-router";
import PageLoyout from "./loyouts/PageLoyout";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import FotoPrint from "./pages/FotoPrint"
import Baza from "./pages/Baza"

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageLoyout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "gallery",
        element: <Gallery />
      },
      {
        path: "fotoprint",
        element: <FotoPrint />  
      },
      {
        path: "baza",
        element: <Baza />
      }
    ]
  }
]);
