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
    let user = admin === true ? "admin" : "employee";
    const allUser = await axios.get(
      `https://lmt-d-server.vercel.app/api/${user}`
    );

    const number = allUser.data.length;
    const users = allUser.data;

    let flag = 1;

    for (let i = 0; i < number; i++) {
      if (users[i].username === username && users[i].password === password) {
        navigate(`/${user}`);
        flag = 0;
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
