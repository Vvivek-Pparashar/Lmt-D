import React, { useState } from "react";
import "./ResignCard.css";
import AdminNavBar from "../../AdminNavBar/AdminNavBar";
import { Form, Select, DatePicker, Button } from "antd";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";
import EmployeeDetailForm from "./EmployeeDetailForm";
import { useSelector } from "react-redux";
import ResignLoginPage from "./ResignLoginPage";

const ResignCard = () => {
  const [login, setLogin] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleLogin = (value) => {
    setLogin(value);
  };

  const handleLoading = (value) => {
    setLoading(value);
  };

  const data = useSelector((state) => state.reData);
  console.log(data);

  return (
    <>
      {login === false ? (
        <ResignLoginPage
          handleLoading={handleLoading}
          handleLogin={handleLogin}
          loading={loading}
          heading="Resign Form"
        />
      ) : (
        <div
          style={{ background: "#e3e3e3", minHeight: "100vh", height: "100%" }}
        >
          <AdminNavBar />

          <Breadcrumb
            style={{
              paddingTop: "2rem",
              paddingLeft: "100px",
              background: "#e3e3e3",
            }}
            items={[
              {
                title: <Link to="/admin">Home</Link>,
              },
              {
                title: <Link to="/admin/addEmployee">Add Employee</Link>,
              },

              {
                title: "Resign",
              },
            ]}
          />

          <EmployeeDetailForm />

          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
              marginTop: "50px",
            }}
            initialValues={{
              remember: true,
            }}
          >
            <Form.Item
              label="Reason"
              name="Reason"
              rules={[
                {
                  required: true,
                  message: "Please Select Application For",
                },
              ]}
            >
              <Select
              //     onChange={(e) => {
              //       dispatch(changeGivenState({ state: "applicationFor", value: e }));
              //     }}
              >
                <Select.Option value="Book">Book</Select.Option>
                <Select.Option value="Lab Coat">Lab Coat</Select.Option>
                <Select.Option value="Electronics">Electronics</Select.Option>
                <Select.Option value="Clothes">Clothes</Select.Option>
                <Select.Option value="HouseHold">HouseHold</Select.Option>
                <Select.Option value="Other">Other</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Resign Date"
              name="Resign Date"
              rules={[
                {
                  required: true,
                  message: "Please Select Date Of Birth",
                },
              ]}
            >
              <DatePicker
                format={"DD-MM-YYYY"}
                //     onChange={(date, dateString) => {
                //       // console.log(dateString);
                //       dispatch(changeGivenState({ state: "dob", value: dateString }));
                //     }}
              />
            </Form.Item>

            <div className="m-lf-btn-wr" style={{ paddingBottom: "20px" }}>
              <Button type="primary" htmlType="submit">
                resign
              </Button>
            </div>
          </Form>
        </div>
      )}
    </>
  );
};

export default ResignCard;
