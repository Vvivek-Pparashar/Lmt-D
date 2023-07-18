import React from "react";
import { Layout } from "antd";
import ContinerComp from "./ContainerComp";
import "../AddEmployee.css";
import SiderComp from "../../../SiderComp/SiderComp";
import { ScrollRestoration } from "react-router-dom";
import AdminNavBar from "../../AdminNavBar/AdminNavBar";

const NewJoining = () => {
  return (
    <>
      <Layout className="main">
        <AdminNavBar />
        <Layout className="site-layout" id="main-comp">
          <SiderComp />
          <ContinerComp />
          <div></div>
        </Layout>
      </Layout>
      <ScrollRestoration />
    </>
  );
};

export default NewJoining;
