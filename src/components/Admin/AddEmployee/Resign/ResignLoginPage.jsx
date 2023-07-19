import React from "react";
import "../../../Login Page/LoadingPage.css";
import AdminNavBar from "../../AdminNavBar/AdminNavBar";

const ResignLoginPage = () => {
  return (
    <>
      <AdminNavBar/>
      <div className="m-l">
        <div className="m-l-f">
          <h1>Resign FORM</h1>
          <div className="form-inputs">
            <label for="userid">Aadhar No.</label>
            <input id="userid" type="text" placeholder="Aadhar No" />
          </div>
          <div className="form-inputs">
            <label for="password">PAN Card No.</label>
            <input id="password" type="text" placeholder="PAN Card No" />
          </div>
          <div className="m-l-b">Validate</div>
        </div>
      </div>
    </>
  );
};

export default ResignLoginPage;
