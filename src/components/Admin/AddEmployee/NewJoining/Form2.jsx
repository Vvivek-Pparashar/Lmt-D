import React from "react";
import { InputNumber, Form, Input, Select, DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeGivenState } from "../../../../slice/addEmployeeForm";

const Form2 = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.addEmployee.page);
  const onFinish = () => {
    dispatch(changeGivenState({ state: "page", value: 3 }));
  };
  return (
    <div className={`${page === 2 ? "m_eform_active" : "m_eform_not_active"}`}>
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
          label="Name"
          name="Name"
          rules={[
            {
              required: true,
              message: "Please input the Name!",
            },
          ]}
        >
          <Input
            minLength={3}
            onChange={(e) => {
              dispatch(
                changeGivenState({ state: "name", value: e.target.value })
              );
            }}
          />
        </Form.Item>

        <Form.Item
          name="Father's Name"
          label="Father's Name"
          rules={[
            {
              required: true,
              message: "Please input your Father's Name!",
              whitespace: true,
            },
          ]}
        >
          <Input
            minLength={3}
            onChange={(e) => {
              dispatch(
                changeGivenState({ state: "fatherName", value: e.target.value })
              );
            }}
          />
        </Form.Item>

        <Form.Item
          name="Address"
          label="Address"
          rules={[
            {
              required: true,
              message: "Please input your Address!",
              whitespace: true,
            },
          ]}
        >
          <Input
            minLength={3}
            onChange={(e) => {
              dispatch(
                changeGivenState({ state: "address", value: e.target.value })
              );
            }}
          />
        </Form.Item>

        <Form.Item
          label="State"
          name="state"
          rules={[
            {
              required: true,
              message: "Please Select state",
            },
          ]}
        >
          <Select
            onChange={(e) => {
              dispatch(changeGivenState({ state: "state", value: e }));
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
          label="Pincode"
          name="Pincode"
          rules={[
            {
              required: true,
              message: "Please input Pincode",
            },
          ]}
        >
          <InputNumber
            style={{ width: 160 }}
            onChange={(e) => {
              dispatch(changeGivenState({ state: "pincode", value: e }));
            }}
          />
        </Form.Item>

        <Form.Item
          label="Date Of Birth"
          name="Date Of Birth"
          rules={[
            {
              required: true,
              message: "Please Select Date Of Birth",
            },
          ]}
        >
          <DatePicker
            format={"DD-MM-YYYY"}
            onChange={(date, dateString) => {
              // console.log(dateString);
              dispatch(changeGivenState({ state: "dob", value: dateString }));
            }}
          />
        </Form.Item>

        <Form.Item
          name="phoneNo"
          label="Phone Number"
          rules={[
            { required: true, message: "Please input your phone number!" },
          ]}
        >
          <Input
            addonBefore={"+91"}
            style={{ width: "100%" }}
            maxLength={10}
            minLength={10}
            onChange={(e) => {
              dispatch(
                changeGivenState({ state: "phoneNo", value: e.target.value })
              );
            }}
          />
        </Form.Item>

        <Form.Item
          name="Aadhar Number"
          label="Aadhar Number"
          rules={[
            { required: true, message: "Please input your aadhar number!" },
          ]}
        >
          <Input
            onChange={(e) => {
              dispatch(
                changeGivenState({ state: "aadharNo", value: e.target.value })
              );
            }}
          />
        </Form.Item>

        <Form.Item
          name="PAN Number"
          label="PAN Number"
          rules={[{ required: true, message: "Please input your PAN number!" }]}
        >
          <Input
            onChange={(e) => {
              dispatch(
                changeGivenState({ state: "panNo", value: e.target.value })
              );
            }}
          />
        </Form.Item>

        <Form.Item
          name="Email"
          label="E-mail"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input
            onChange={(e) => {
              dispatch(
                changeGivenState({ state: "email", value: e.target.value })
              );
            }}
          />
        </Form.Item>

        <Form.Item
          label="Marital Status"
          name="Marital Status"
          rules={[
            {
              required: true,
              message: "Please Select Maternal Status",
            },
          ]}
        >
          <Select
            onChange={(e) => {
              dispatch(changeGivenState({ state: "maritalStatus", value: e }));
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
          label="Gender"
          name="Gender"
          rules={[
            {
              required: true,
              message: "Please Select Gender",
            },
          ]}
        >
          <Select
            onChange={(e) => {
              dispatch(changeGivenState({ state: "gender", value: e }));
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
          label="Edu. Qualification"
          name="Edu. Qualification"
          rules={[
            {
              required: true,
              message: "Please Select Edu. Qualification",
            },
          ]}
        >
          <Select
            onChange={(e) => {
              dispatch(
                changeGivenState({ state: "eduQualification", value: e })
              );
            }}
          >
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Computer"
          name="Computer"
          rules={[
            {
              required: true,
              message: "Please Select Computer",
            },
          ]}
        >
          <Select
            onChange={(e) => {
              dispatch(changeGivenState({ state: "computer", value: e }));
            }}
          >
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <div className="m-lf-btn-wr">
            <Button
              danger
              onClick={() =>
                dispatch(changeGivenState({ state: "page", value: 1 }))
              }
            >
              previous
            </Button>
            <Button type="primary" htmlType="submit">
              Next
            </Button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Form2;
