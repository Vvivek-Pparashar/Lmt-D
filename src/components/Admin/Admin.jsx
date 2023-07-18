import React from "react";
// import { UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import "./Admin.css";
import adminRouteList from "./adminRouteList";
import AdminNavBar from "./AdminNavBar/AdminNavBar";
//import { useParams } from "react-router-dom";//
// const { Content } = Layout;

const Admin = () => {
  //const  name  = useParams().username; // get admin username

  return (
    <>
      <AdminNavBar />

      <div className="m-admn-optn">
        <Row gutter={[18, 1]} style={{ padding: "0 10px" }}>
          {adminRouteList.map((e) => {
            return (
              <Col
                xs={{ span: 12 }}
                sm={{ span: 8 }}
                lg={{ span: 6 }}
                className="m-admn-optn-col"
              >
                <Link to={`${e.Route}`} className="m-admn-optn-n">
                  {e.icon}
                  <p className="m-admn-optn-n-p">{e.Title}</p>
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
