import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Employee from "./components/Employee/Employee";
import Admin from "./components/Admin/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/employee/:username",
    element: <Employee />,
  },
  {
    path: "/admin/:username",
    element: <Admin />,
    
  },
  {
    path : "/addEmployee",
    element : <h1>Add Employee</h1>
  }
]);

export default router;
