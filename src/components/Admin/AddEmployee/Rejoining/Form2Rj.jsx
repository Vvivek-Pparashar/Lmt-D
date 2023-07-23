import React from "react";
import { InputNumber, Form, Input, Select, DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeGivenState } from "../../../../slice/addEmployeeForm";
import { changeGivenReState } from "../../../../slice/reDataSlice";

const Form2Rj = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.addEmployee.page);
  const data = useSelector((state) => state.reData.data);

  const onFinish = () => {
    dispatch(changeGivenState({ state: "page", value: 3 }));
  };
  return (
    <div className={`${page === 2 ? "m_eform_active" : "m_eform_not_active"}`}>
      <Form
        name="Form2Rj"
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
        <Form.Item label="Name" name="Name">
          <Input
            minLength={3}
            onChange={(e) => {
              dispatch(
                changeGivenReState({ state: "name", value: e.target.value })
              );
            }}
            defaultValue={data.name}
            disabled
          />
        </Form.Item>

        <Form.Item name="Father's Name" label="Father's Name">
          <Input minLength={3} defaultValue={data.fatherName} disabled />
        </Form.Item>

        <Form.Item name="Address" label="Address">
          <Input
            minLength={3}
            onChange={(e) => {
              dispatch(
                changeGivenReState({ state: "address", value: e.target.value })
              );
            }}
            defaultValue={data.address}
          />
        </Form.Item>

        <Form.Item label="State" name="state">
          <Select
            onChange={(e) => {
              dispatch(changeGivenReState({ state: "state", value: e }));
            }}
            defaultValue={data.state}
          >
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
            <Select.Option value="Electronics">Electronics</Select.Option>
            <Select.Option value="Clothes">Clothes</Select.Option>
            <Select.Option value="HouseHold">HouseHold</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Pincode" name="Pincode">
          <InputNumber
            style={{ width: 160 }}
            onChange={(e) => {
              dispatch(changeGivenReState({ state: "pincode", value: e }));
            }}
            defaultValue={data.pincode}
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
              dispatch(changeGivenReState({ state: "dob", value: dateString }));
            }}
          />
        </Form.Item>

        <Form.Item name="phoneNo" label="Phone Number">
          <Input
            addonBefore={"+91"}
            style={{ width: "100%" }}
            maxLength={10}
            minLength={10}
            onChange={(e) => {
              dispatch(
                changeGivenReState({ state: "phoneNo", value: e.target.value })
              );
            }}
            defaultValue={data.phoneNo}
          />
        </Form.Item>

        <Form.Item name="Aadhar Number" label="Aadhar Number">
          <Input defaultValue={data.aadharNo} disabled />
        </Form.Item>

        <Form.Item name="PAN Number" label="PAN Number">
          <Input defaultValue={data.panNo} disabled />
        </Form.Item>

        <Form.Item name="Email" label="E-mail">
          <Input
            onChange={(e) => {
              dispatch(
                changeGivenReState({ state: "email", value: e.target.value })
              );
            }}
            defaultValue={data.email}
          />
        </Form.Item>

        <Form.Item label="Marital Status" name="Marital Status">
          <Select
            onChange={(e) => {
              dispatch(
                changeGivenReState({ state: "maritalStatus", value: e })
              );
            }}
            defaultValue={data.maritalStatus}
          >
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
            <Select.Option value="Electronics">Electronics</Select.Option>
            <Select.Option value="Clothes">Clothes</Select.Option>
            <Select.Option value="HouseHold">HouseHold</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Gender" name="Gender">
          <Select
            onChange={(e) => {
              dispatch(changeGivenReState({ state: "gender", value: e }));
            }}
            defaultValue={data.gender}
            disabled
          >
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
            <Select.Option value="Electronics">Electronics</Select.Option>
            <Select.Option value="Clothes">Clothes</Select.Option>
            <Select.Option value="HouseHold">HouseHold</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Edu. Qualification" name="Edu. Qualification">
          <Select
            onChange={(e) => {
              dispatch(
                changeGivenReState({ state: "eduQualification", value: e })
              );
            }}
            defaultValue={data.eduQualification}
          >
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item label="Computer" name="Computer">
          <Select
            onChange={(e) => {
              dispatch(changeGivenReState({ state: "computer", value: e }));
            }}
            defaultValue={data.computer}
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

export default Form2Rj;
