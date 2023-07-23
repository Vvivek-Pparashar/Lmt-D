import React from "react";
import { InputNumber, Form, Input, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeGivenState } from "../../../../slice/addEmployeeForm";
import { changeGivenReState } from "../../../../slice/reDataSlice";

const Form3Rj = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.addEmployee.page);
  const data = useSelector((state) => state.reData.data);

  const onFinish = () => {
    dispatch(changeGivenState({ state: "page", value: 4 }));
  };
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
        >
          <InputNumber
            style={{ width: 250 }}
            onChange={(e) => {
              dispatch(changeGivenReState({ state: "bankAccountNo", value: e }));
            }}

            defaultValue={data.bankAccountNo}
            // defaultValue="vivek"
          />
        </Form.Item>

{/* vivek */}
        <Form.Item
          label="Bank Name"
          name="Bank Name"
        >
          <Input
            minLength={3}
            onChange={(e) => {
              dispatch(
                changeGivenReState({ state: "bankName", value: e.target.value })
              );
            }}

            defaultValue={data.bankName}
          />
        </Form.Item>

        <Form.Item
          label="Bank IFSC code"
          name="Bank IFSC code"
        >
          <Input
            // minLength={3}
            onChange={(e) => {
              dispatch(
                changeGivenReState({
                  state: "bankIFSCCode",
                  value: e.target.value,
                })
              );
            }}

            defaultValue={data.bankIFSCCode}
          />
        </Form.Item>

        <Form.Item
          label="Bank Branch"
          name="Bank Branch"
        >
          <Input
            minLength={3}
            onChange={(e) => {
              dispatch(
                changeGivenReState({ state: "bankBranch", value: e.target.value })
              );
            }}

            defaultValue={data.bankBranch}
          />
        </Form.Item>
        <Form.Item>
          <div className="m-lf-btn-wr">
            <Button
              danger
              onClick={() =>
                dispatch(changeGivenState({ state: "page", value: 2 }))
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

export default Form3Rj;
