import React from "react";
import { Layout } from "antd";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import "./ContainerComp.css";
const { Content } = Layout;

const ContainerComp = () => {
  return (
    <Content className="site-layout-background">
      <div className="m-ae-form-cnt">
        <Form1 />
        <Form2 />
        <Form3 />
      </div>
    </Content>
  );
};

export default ContainerComp;
