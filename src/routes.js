import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Admin from "./components/Admin/Admin";
// import Employee from "./components/Employee/Employee";
import AddEmployee from "./components/Admin/AddEmployee/AddEmployee.jsx";
import NewJoining from "./components/Admin/AddEmployee/NewJoining/NewJoining";
import ResignLoginPage from "./components/Admin/AddEmployee/Resign/ResignLoginPage";
import SalaryOfEmployee from "./components/Admin/SalaryOfEmployee/SalaryOfEmployee";
import Employee from "./components/Employee/Employee";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/employee/:username",
    element: <Employee/>,
  },
  {
    path: "/admin/",
    element: <Admin />,
  },
  {
    path: "/admin/addEmployee",
    element: <AddEmployee />,
  },

  {
    path: "/admin/addEmployee/newJoining",
    element: <NewJoining />,
  },

  {
    path: "/admin/addEmployee/resign",
    element: <ResignLoginPage />,
  },

  {
    path: "/admin/addEmployee/resign",
    element: "reign",
  },

  {
    path: "/admin/attendance",
    element: "attendance",
  },

  {
    path: "/admin/salaryOfEmployee",
    element: <SalaryOfEmployee/>,
  },

  {
    path: "/admin/salaryIncrement",
    element: "salaryIncrement",
  },

  {
    path: "/admin/leaveFrom",
    element: "leaveFrom",
  },

  {
    path: "/admin/report",
    element: "report",
  },
]);

export default router;
