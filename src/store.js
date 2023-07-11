import { configureStore } from "@reduxjs/toolkit";
import loginFormReducer from "./slice/loginFormSlice";

export const store = configureStore({
  reducer: {
    loginForm: loginFormReducer,
  },
});
