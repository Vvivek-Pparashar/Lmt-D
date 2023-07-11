import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  admin:false
};

export const loginFormSlice = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    changeUsername: (state, action) => {
      state.username = action.payload;
    },

    changePassword: (state, action) => {
      state.password = action.payload;
    },

    changeAdmin : (state, action) => {
      state.admin = action.payload;
    }
  },
});

export const {
  changePassword,
  changeUsername,
  changeAdmin
} = loginFormSlice.actions;

export default loginFormSlice.reducer;
