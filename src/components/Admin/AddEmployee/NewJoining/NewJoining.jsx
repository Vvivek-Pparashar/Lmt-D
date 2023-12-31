import React from "react";
import { Layout } from "antd";
import "../AddEmployee.css";
import SiderComp from "../../../SiderComp/SiderComp";
import { ScrollRestoration } from "react-router-dom";
import AdminNavBar from "../../AdminNavBar/AdminNavBar";
import ContainerComp from "./ContainerComp";

const NewJoining = () => {
  return (
    <>
      <Layout className="main">
        <AdminNavBar />
        <Layout className="site-layout" id="main-comp">
          <SiderComp />
          <ContainerComp />
        </Layout>
      </Layout>
      <ScrollRestoration />
    </>
  );
};

export default NewJoining;
