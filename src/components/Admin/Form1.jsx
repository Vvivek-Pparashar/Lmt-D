import React from "react";
import { InputNumber, Form, Select, DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeGivenState } from "../../slice/addEmployeeForm";
import "./Form.css";

const Form1 = ({ submit }) => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.addEmployee.page);

  const onFinish = () => {
    dispatch(changeGivenState({ state: "page", value: 2 }));
  };

  return (
    <div className={`${page === 1 ? "m_eform_active" : "m_eform_not_active"}`}>
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
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Employee Id"
          name="Employee Id"
          rules={[
            {
              required: true,
              message: "Please input Employee Id",
            },
          ]}
        >
          <InputNumber
            onChange={(e) => {
              dispatch(changeGivenState({ state: "employeeId", value: e }));
            }}
          />
        </Form.Item>

        <Form.Item
          label="Application For"
          name="Application For"
          rules={[
            {
              required: true,
              message: "Please Select Application For",
            },
          ]}
        >
          <Select
            onChange={(e) => {
              dispatch(changeGivenState({ state: "applicationFor", value: e }));
            }}
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
          label="Joining Branch"
          name="Joining Branch"
          rules={[
            {
              required: true,
              message: "Please Select Joining Branch",
            },
          ]}
        >
          <Select
            onChange={(e) => {
              dispatch(changeGivenState({ state: "joiningBranch", value: e }));
            }}
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
          label="Joining Date"
          name="Joining Date"
          rules={[
            {
              required: true,
              message: "Please Select Joining Date",
            },
          ]}
        >
          <DatePicker
            format={"DD-MM-YYYY"}
            onChange={(date, dateString) => {
              console.log(dateString);
              dispatch(
                changeGivenState({ state: "dateOfJoining", value: dateString })
              );
            }}
          />
        </Form.Item>

        <Form.Item
          label="Salary"
          name="Salary"
          rules={[
            {
              required: true,
              message: "Please input Salary",
            },
          ]}
        >
          <InputNumber
            style={{ width: 200 }}
            onChange={(e) => {
              dispatch(changeGivenState({ state: "salary", value: e }));
            }}
          />
        </Form.Item>

        <Form.Item
          label="Experience"
          name="Experience"
          rules={[
            {
              required: true,
              message: "Please input Experience",
            },
          ]}
        >
          <InputNumber
            style={{
              width: 200,
            }}
            min="0"
            max="10"
            step="0.1"
            stringMode
            onChange={(e) => {
              dispatch(changeGivenState({ state: "experience", value: e }));
            }}
          />
        </Form.Item>

        <Form.Item
          label="Under Group"
          name="Under Group"
          rules={[
            {
              required: true,
              message: "Please Select Under Group",
            },
          ]}
        >
          <Select
            onChange={(e) => {
              dispatch(changeGivenState({ state: "underGroup", value: e }));
            }}
          >
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
            <Select.Option value="Electronics">Electronics</Select.Option>
            <Select.Option value="Clothes">Clothes</Select.Option>
            <Select.Option value="HouseHold">HouseHold</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Next
        </Button>
      </Form>
    </div>
  );
};

export default Form1;
