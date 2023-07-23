import React, { useState } from "react";
import "../../../Loading Page/LoadingPage";
import AdminNavBar from "../../AdminNavBar/AdminNavBar";
import LoadingPage from "../../../Loading Page/LoadingPage";
import axios from "axios";
import { useDispatch } from "react-redux";
import { changeReData } from "../../../../slice/reDataSlice";

const ResignLoginPage = ({ handleLoading, handleLogin, loading }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ aadhar: "", PAN: "" });
  const handleClick = () => {
    console.log("first");
    handleLoading(true);

    const link = `https://lmt-d-server.vercel.app/api/employee/${data.aadhar}/${data.PAN}`;

    axios
      .get(link)
      .then((res) => {
        handleLoading(false);
        handleLogin(true);
        dispatch(changeReData({ value: { ...res.data } }));
      })
      .catch((err) => {
        alert("Invalid Credentails");
        handleLoading(false);
      });
  };
  return (
    <>
      <AdminNavBar />
      <div className="m-l">
        {loading === true ? <LoadingPage /> : ""}
        <div className="m-l-f">
          <h1>Resign FORM</h1>
          <div className="form-inputs">
            <label for="userid">Aadhar No.</label>
            <input
              id="userid"
              type="text"
              placeholder="Aadhar No"
              value={data.aadhar}
              onChange={(e) => {
                setData({ ...data, aadhar: e.target.value });
              }}
            />
          </div>
          <div className="form-inputs">
            <label for="password">PAN Card No.</label>
            <input
              id="password"
              type="text"
              placeholder="PAN Card No"
              value={data.PAN}
              onChange={(e) => {
                setData({ ...data, PAN: e.target.value });
              }}
            />
          </div>
          <div className="m-l-b" onClick={handleClick}>
            Validate
          </div>
        </div>
      </div>
    </>
  );
};

export default ResignLoginPage;
