import React from "react";
import { Layout } from "antd";
import ContinerComp from "./ContainerComp";
import "../AddEmployee.css";
import SiderComp from "../../../SiderComp/SiderComp";
import { ScrollRestoration } from "react-router-dom";

const NewJoining = () => {
  return (
    <>
      <Layout className="main">
        <div className="m-admn-nav">
          <h1>LMT Delhi</h1>
          <h1>Hello, Admin</h1>
        </div>
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
