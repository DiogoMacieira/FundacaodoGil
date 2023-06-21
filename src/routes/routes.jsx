import Home from "../components/Home";
import Contactos from "../components/Contactos";
import Shop from "../components/Shop";
import Form from "../components/Form";
import App from "../App";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contactos",
          element: <Contactos />,
        },
        { path: "/shop", element: <Shop /> },
        { path: "/form", element: <Form /> },
      ],
    },
  ],
  {
    basename: "/FundacaodoGil",
  }
);
