import React from "react";
// import { UserAddOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Row, Col, Breadcrumb } from "antd";
import "../Admin.css";
import addEmployeeRouteList from "./addEmployeeRouteList";
import AdminNavBar from "../AdminNavBar/AdminNavBar";
//import { useParams } from "react-router-dom";//
// const { Content } = Layout;

const AddEmployee = () => {
  //const  name  = useParams().username; // get admin username

  return (
    <>
      <AdminNavBar />

      <div className="m-admn-optn">
        <Breadcrumb
          style={{ marginBottom: "20px", marginLeft: "10px" }}
          items={[
            {
              title: <Link to="/admin">Home</Link>,
            },
            {
              title: "Add Employee",
            },
          ]}
        />

        <Row gutter={[18, 1]} style={{ padding: "0 10px" }}>
          {addEmployeeRouteList.map((e) => {
            return (
              <Col
                xs={{ span: 12 }}
                sm={{ span: 8 }}
                lg={{ span: 6 }}
                className="m-admn-optn-col"
              >
                <Link
                  to={`/admin/addEmployee/${e.Route}`}
                  className="m-admn-optn-n"
                >
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

export default AddEmployee;
