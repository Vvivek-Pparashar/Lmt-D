import React from "react";
import { InputNumber, Form, Select, DatePicker, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import "./Form.css";
import { changeGivenReState } from "../../../../slice/reDataSlice";
import { changeGivenState } from "../../../../slice/addEmployeeForm";

const Form1Rj = ({ submit }) => {
  const dispatch = useDispatch();

  const page = useSelector((state) => state.addEmployee.page);
  const data = useSelector((state) => state.reData.data);

  console.log("vivek");
  console.log(data);

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
        <Form.Item label="Employee Id" name="Employee Id">
          <InputNumber defaultValue={data.employeeId} disabled />
        </Form.Item>

        <Form.Item label="Application For" name="Application For">
          <Select
            onChange={(e) => {
              dispatch(
                changeGivenReState({ state: "applicationFor", value: e })
              );
            }}
            defaultValue={data.applicationFor}
          >
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Joining Branch" name="Joining Branch">
          <Select
            onChange={(e) => {
              dispatch(
                changeGivenReState({ state: "joiningBranch", value: e })
              );
            }}
            defaultValue={data.joiningBranch}
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
          label="Re-Joining Date"
          name="Re-Joining Date"
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
                changeGivenReState({
                  state: "dateOfJoining",
                  value: dateString,
                })
              );
            }}
          />
        </Form.Item>
        <Form.Item label="Salary" name="Salary">
          <InputNumber
            style={{ width: 200 }}
            onChange={(e) => {
              dispatch(changeGivenReState({ state: "salary", value: e }));
            }}
            defaultValue={data.salary}
          />
        </Form.Item>
        <Form.Item label="Experience" name="Experience">
          <InputNumber
            style={{
              width: 200,
            }}
            min="0"
            max="10"
            step="0.1"
            stringMode
            defaultValue={data.experience}
            onChange={(e) => {
              dispatch(changeGivenReState({ state: "experience", value: e }));
            }}
          />
        </Form.Item>
        <Form.Item label="Under Group" name="Under Group">
          <Select
            onChange={(e) => {
              dispatch(changeGivenReState({ state: "underGroup", value: e }));
            }}
            defaultValue={data.underGroup}
          >
            <Select.Option value="Book">Book</Select.Option>
            <Select.Option value="Lab Coat">Lab Coat</Select.Option>
            <Select.Option value="Electronics">Electronics</Select.Option>
            <Select.Option value="Clothes">Clothes</Select.Option>
            <Select.Option value="HouseHold">HouseHold</Select.Option>
            <Select.Option value="Other">Other</Select.Option>
          </Select>
        </Form.Item>

        <div className="m-lf-btn-wr">
          <Button type="primary" htmlType="submit">
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Form1Rj;
