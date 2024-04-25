import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../pages/App";
import Home from "../pages/home";
import About from "../pages/about";
import DevelopInfo from '../pages/about/DevelopInfo'
import NotFound from "../pages/error/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/about/develop-info/:id",
        element: <DevelopInfo />,
      },
    ],
  },
]);
