import React, { useState } from "react";
import ResignLoginPage from "../Resign/ResignLoginPage";
import RejoinAfterLogin from "./RejoinAfterLogin";
import { useSelector } from "react-redux";

const ReJoining = () => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (value) => {
    setLogin(value);
  };

  const handleLoading = (value) => {
    setLoading(value);
  };

  const data = useSelector((state) => state.reData)
  console.log(data)

  return (
    <>
      {login === false ? (
        <ResignLoginPage
          handleLoading={handleLoading}
          handleLogin={handleLogin}
          loading={loading}
          heading={"Re-Joining Form"}
        />
      ) : (
        <RejoinAfterLogin />
      )}
    </>
  );
};

export default ReJoining;
