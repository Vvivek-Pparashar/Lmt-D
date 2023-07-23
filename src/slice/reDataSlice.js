import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: {},
};

export const reDataForm = createSlice({
  name: "reDataSlice",
  initialState,
  reducers: {
    changeReData: (state, action) => {
      state.data = action.payload.value;
    },

    changeGivenReState: (state, action) => {
      const name = action.payload.state;
      state.data[name] = action.payload.value;
    },
  },
});

export const { changeReData, changeGivenReState } = reDataForm.actions;

export default reDataForm.reducer;
