import React from "react";
import { Breadcrumb, Layout } from "antd";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import "./ContainerComp.css";
import Form4 from "./Form4";
import { Link } from "react-router-dom";
const { Content } = Layout;

const ContainerComp = () => {
  return (
    <Content className="site-layout-background">
      <div className="m-ae-form-cnt">
        <Breadcrumb
          style={{ marginTop: "20px", marginLeft: "10px" }}
          items={[
            {
              title: <Link to="/admin">Home</Link>,
            },
            {
              title: <Link to="/admin/addEmployee">Add Employee</Link>
            },

            {
              title : "New Joining"
            }
          ]}
        />
        <Form1 />
        <Form2 />
        <Form3 />
        <Form4 />
      </div>
    </Content>
  );
};

export default ContainerComp;
