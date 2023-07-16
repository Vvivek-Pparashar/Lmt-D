import React from "react";
import { UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./Admin.css";
//import { useParams } from "react-router-dom";//
// const { Content } = Layout;

const Admin = () => {


  //const  name  = useParams().username; // get admin username

  return (
    <>
      <div className="m-admn-nav">
        <h1>LMT Delhi</h1>
        <h1>Hello,Admin</h1>
      </div>

      <div className="m-admn-optn">
        <Row gutter={[18, 1]} style={{ padding: "0 10px" }}>
          {[1, 1, 1, 1, 1, 1, 1].map((e) => {
            return (
              <Col
                xs={{ span: 12 }}
                sm={{ span: 8 }}
                lg={{ span: 6 }}
                className="m-admn-optn-col"
              >
                <Link to={"/admin/addEmployee"} className="m-admn-optn-n">
                  <UserAddOutlined className="m-admn-optn-n-i" />
                  <p className="m-admn-optn-n-p">Add Employee</p>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </>
  );
};

export default Admin;
