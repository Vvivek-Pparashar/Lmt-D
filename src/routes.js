import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Employee from "./components/Employee/Employee";
import Admin from "./components/Admin/Admin";
import AddEmployee from "./components/Admin/AddEmployee";

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
  {
    path : "/addEmployee",
    element : <AddEmployee/>
  }
]);

export default router;
