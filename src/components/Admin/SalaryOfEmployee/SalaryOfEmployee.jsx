import React, { useEffect, useState } from "react";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
import axios from "axios";
import "./SalaryOfEmployee.css";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

const SalaryOfEmployee = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://lmt-d-server.vercel.app/api/employee")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <AdminNavBar />
      <div className="m-ad-soe">
      <Breadcrumb
          style={{ marginBottom: "20px", marginLeft: "10px" }}
          items={[
            {
              title: <Link to="/admin">Home</Link>,
            },
            {
              title: "Salary Of Employee",
            },
          ]}
        />
        <h1>Salary Detail's</h1>
        <div className="m-ad-soe-tble">
          <table className="m-ad-soe-tble-table">
            <tr className="m-ad-soe-tble-tr">
              <th className="m-ad-soe-tble-th">Employee Id</th>
              <th className="m-ad-soe-tble-th">Name</th>
              <th className="m-ad-soe-tble-th">Experience</th>
              <th className="m-ad-soe-tble-th">Salery</th>
            </tr>
            {data.map((e) => {
              return (
                <tr className="m-ad-soe-tble-tr">
                  <td className="m-ad-soe-tble-td">{e.employeeId}</td>
                  <td className="m-ad-soe-tble-td">{e.name}</td>
                  <td className="m-ad-soe-tble-td">{e.experience}</td>
                  <td className="m-ad-soe-tble-td">{e.salary}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};

export default SalaryOfEmployee;
