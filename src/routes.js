import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Employee from "./components/Employee/Employee";
import Admin from "./components/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/employee",
    element: <Employee />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
]);

export default router;
