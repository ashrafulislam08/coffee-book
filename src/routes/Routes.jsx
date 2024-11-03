import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Coffees from "../pages/Coffees";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import CoffeeCards from "../components/CoffeeCards";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        loader: () => fetch("/categories.json"),
        element: <Home />,
        children: [
          {
            path: "/",
            element: <CoffeeCards />,
            loader: () => fetch("/coffees.json"),
          },
          {
            path: "/category/:category",
            element: <CoffeeCards />,
            loader: () => fetch("/coffees.json"),
          },
        ],
      },
      {
        path: "/coffees",
        element: <Coffees />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default routes;
