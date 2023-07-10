import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

const App = () => {
  const [data, setData] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleClick = async () => {
    const ele = await axios.get("http://localhost:3000/api/products");

    const n = ele.data.length;
    const users = ele.data;

    let flag = 1;

    for (let i = 0; i < n; i++) {
      if (
        users[i].username === data.username &&
        users[i].password === data.password
      ) {
        console.log("YEEEEEEEEES");

        console.log(users[i].admin)
        if (users[i].admin === true) {
          navigate("/admin");
        }else{
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
    <div className="m-l">
      <div className="m-l-c">
        <input
          type="email"
          placeholder="email"
          value={data.username}
          onChange={(x) => {
            setData({ ...data, username: x.target.value });
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={data.password}
          onChange={(x) => {
            setData({ ...data, password: x.target.value });
          }}
        />
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default App;
