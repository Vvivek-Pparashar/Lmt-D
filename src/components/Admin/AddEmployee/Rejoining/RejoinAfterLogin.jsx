import React from "react";
import AdminNavBar from "../../AdminNavBar/AdminNavBar";
import { Layout } from "antd";
import { ScrollRestoration } from "react-router-dom";
import SiderComp from "../../../SiderComp/SiderComp";
import ContainerCompRj from "./ContainerCompRJ";

const RejoinAfterLogin = () => {
  return (
    <>
      <Layout className="main">
        <AdminNavBar />
        <Layout className="site-layout" id="main-comp">
          <SiderComp />
          <ContainerCompRj />
        </Layout>
      </Layout>
      <ScrollRestoration />
    </>
  );
};

export default RejoinAfterLogin;
