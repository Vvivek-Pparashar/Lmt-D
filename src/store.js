import { configureStore } from "@reduxjs/toolkit";
import loginFormReducer from "./slice/loginFormSlice";
import addEmployeeReducer from "./slice/addEmployeeForm";

export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    addEmployee: addEmployeeReducer,
  },
});
