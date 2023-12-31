import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeId: "",
  applicationFor: "",
  joiningBranch: "",
  underGroup: "",
  dateOfJoining: [],
  dateOfResign: [],
  reasonOfResign: [],
  resigned: Boolean,
  salary: "",
  experience: "",
  name: "",
  fatherName: "",
  address: "",
  state: "",
  city: "",
  pincode: "",
  dob: "",
  aadharNo: "",
  phoneNo: "",
  email: "",
  panNo: "",
  maritalStatus: "",
  gender: "",
  eduQualification: "",
  computer: "",
  bankAccountNo: "",
  bankName: "",
  bankIFSCCode: "",
  bankBranch: "",
  passportImage: "",
  familyImage: "",
  page: 1,
};

export const addEmployeeForm = createSlice({
  name: "loginForm",
  initialState,
  reducers: {
    changeGivenState: (state, action) => {
      const name = action.payload.state;
      state[name] = action.payload.value;
    },
  },
});

export const { changeGivenState } = addEmployeeForm.actions;

export default addEmployeeForm.reducer;
