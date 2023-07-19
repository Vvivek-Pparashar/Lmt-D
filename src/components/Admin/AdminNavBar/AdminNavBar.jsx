import React from "react";
import "./AdminNavBar.css";
import { Link } from "react-router-dom";

const AdminNavBar = () => {
  return (
    <div className="m-admn-nav">
      <Link to={"/admin"} style={{ textDecoration: "none" }}>
        <h1 style={{ color: "white" }}>LMT Delhi</h1>
      </Link>
      <h1>Hello, Admin</h1>
    </div>
  );
};

export default AdminNavBar;
