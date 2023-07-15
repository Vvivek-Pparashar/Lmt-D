import React from "react";
import { Layout } from "antd";
import ContinerComp from "./ContainerComp";
import './AddEmployee.css'
// import NavBar from "./components/navBar/NavBar";
import SiderComp from "../SiderComp/SiderComp";
// import FooterComp from "./components/footerComp/FooterComp";
import { ScrollRestoration } from "react-router-dom";
// import FloatingItem from "./components/floatingItem/FloatingItem";

const AddEmployee = () => {
  return (
    <>
      <Layout className="main">
        {/* <NavBar /> */}
        <div className="m-admn-nav">
          <h1>LMT Delhi</h1>
          <h1>Hello, Admin</h1>
        </div>
        <Layout className="site-layout" id="main-comp">
          <SiderComp />
          <ContinerComp />
            {/* <FloatingItem />  */}
        </Layout>
        {/* <FooterComp /> */}
      </Layout>
      <ScrollRestoration />
    </>
  );
};

export default AddEmployee;
