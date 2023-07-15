import React from "react";
import { InputNumber, Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeGivenState } from "../../slice/addEmployeeForm";

const Form3 = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.addEmployee.page);

  const onFinish = (values) => {};
  return (
    <div className={`${page === 3 ? "m_eform_active" : "m_eform_not_active"}`}>
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
          label="Bank Account No."
          name="Bank Account No."
          rules={[
            {
              required: true,
              message: "Please input Bank Account No.",
            },
          ]}
        >
          <InputNumber
            style={{ width: 250 }}
            onChange={(e) => {
              dispatch(changeGivenState({ state: "bankAccountNo", value: e }));
            }}
          />
        </Form.Item>

        <Form.Item
          label="Bank Name"
          name="Bank Name"
          rules={[
            {
              required: true,
              message: "Please input the Bank Name!",
            },
          ]}
        >
          <Input
            minLength={3}
            onChange={(e) => {
              dispatch(
                changeGivenState({ state: "bankName", value: e.target.value })
              );
            }}
          />
        </Form.Item>

        <Form.Item
          label="Bank IFSC code"
          name="Bank IFSC code"
          value="vivek"
          rules={[
            {
              required: true,
              message: "Please input the Bank IFSC code!",
            },
          ]}
        >
          <Input
            // minLength={3}
            defaultValue={"vivek"}
            value="vivekk"
            onChange={(e) => {
              dispatch(
                changeGivenState({
                  state: "bankIFSCCode",
                  value: e.target.value,
                })
              );
            }}
          />
        </Form.Item>

        <Form.Item
          label="Bank Branch"
          name="Bank Branch"
          rules={[
            {
              required: true,
              message: "Please input the Bank Branch!",
            },
          ]}
        >
          <Input
            minLength={3}
            onChange={(e) => {
              dispatch(
                changeGivenState({ state: "bankBranch", value: e.target.value })
              );
            }}
          />
        </Form.Item>
        <Button
          danger
          onClick={() =>
            dispatch(changeGivenState({ state: "page", value: 2 }))
          }
        >
          Previous
        </Button>
      </Form>
    </div>
  );
};

export default Form3;
