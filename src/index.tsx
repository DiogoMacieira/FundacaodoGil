import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import "./css/index.css";
import "typeface-montserrat"; // Import the "Montserrat" font CSS

import { router } from "./routes/routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
