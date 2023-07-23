import { configureStore } from "@reduxjs/toolkit";
import loginFormReducer from "./slice/loginFormSlice";
import addEmployeeReducer from "./slice/addEmployeeForm";
import reDataReducer from "./slice/reDataSlice";

export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
    addEmployee: addEmployeeReducer,
    reData: reDataReducer,
  },
});
