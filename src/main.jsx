import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/Routes.jsx";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <ToastContainer position="top-center" />
  </StrictMode>
);
