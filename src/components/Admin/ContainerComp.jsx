import React from "react";
import { Layout } from "antd";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
const { Content } = Layout;

const ContainerComp = () => {
  return (
    <Content className="site-layout-background">
      <Form1 />
      <Form2 />
      <Form3 />
    </Content>
  );
};

export default ContainerComp;
