import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeUsername,
  changePassword,
  changeAdmin,
  changeInitial,
} from "../../slice/loginFormSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./LoginForm.css";
import LoadingPage from "./LoadingPage";

const LoginForm = () => {
  const username = useSelector((state) => state.loginForm.username);
  const password = useSelector((state) => state.loginForm.password);
  const admin = useSelector((state) => state.loginForm.admin);

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = async () => {
    setLoading(true);
    const user = admin === true ? "admin" : "employee";
const apiUrl = admin === true
  ? `https://lmt-d-server.vercel.app/api/admin/${user}`
  : `https://lmt-d-server.vercel.app/api/employee/${user}`;

const User = await axios.get(apiUrl);

    const userData = User.data;
   
    const res_username = userData.username;
    const res_password = userData.password


    let flag = 1;

   
      if (res_username === username && res_password === password) {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("admin", admin ? "admin" : "employee");
        flag = 0;
        if (admin ===true){
          navigate(`/admin/${user}`)
        }
        else{
          navigate(`/employee/${user}`);
        }
       
     
     
      }
    

    dispatch(changeInitial());

    setLoading(false);

    if (flag === 1) {
      alert("Wrong Username or Password")
    }
  };
  return (
    <div className="m-l">
      {loading && <LoadingPage />}
      <img
        src="../../../assests/login/companyLogo.png"
        alt="lmt-d"
        className="logo"
      />
      <div className="m-l-f">
        <h1>LOGIN FORM</h1>
        <div className="form-inputs">
          <label for="userid">User ID:</label>
          <input
            id="userid"
            type="text"
            placeholder="UserId"
            value={username}
            onChange={(x) => {
              dispatch(changeUsername(x.target.value));
            }}
          />
        </div>
        <div className="form-inputs">
          <label for="password">Password:</label>
          <input
            id="password"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(x) => {
              dispatch(changePassword(x.target.value));
            }}
          />
        </div>
        <div className="radio-btn">
          <label for="employee">Employee</label>
          <input
            type="radio"
            name="user_type"
            id="employee"
            onChange={() => {
              dispatch(changeAdmin(false));
            }}
          />
          <label for="admin">Admin</label>
          <input
            type="radio"
            name="user_type"
            id="admin"
            onChange={() => {
              dispatch(changeAdmin(true));
            }}
          />
        </div>
        <div className="m-l-b" onClick={handleClick}>
          LogIN
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
