import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import LoginForm from "./components/Login Page/LoginForm.jsx";
import "./App.css";

const App = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleClick = async () => {
    const ele = await axios.get("https://lmt-d-server.vercel.app/api/products");

    const n = ele.data.length;
    const users = ele.data;

    let flag = 1;

    for (let i = 0; i < n; i++) {
      if (
        users[i].username === data.username &&
        users[i].password === data.password
      ) {
        console.log("YEEEEEEEEES");

        console.log(users[i].admin);
        if (users[i].admin === true) {
          navigate("/admin");
        } else {
          navigate("/employee");
        }

        flag = 0;
      }
    }

    if (flag === 1) {
      console.log("NOOOOOOO");
    }
    // console.log(ele.data);
  };
  return (
    <>
      <LoginForm />
    </>
  );
};

export default App;
