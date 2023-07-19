import React from "react";
import { Form, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { changeGivenState } from "../../../../slice/addEmployeeForm";
import axios from "axios";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";

// Installed by "react-uploader".
import { Uploader } from "uploader";
import { UploadButton } from "react-uploader";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free", // Get production API keys from Upload.io
});

const options = { multi: true };

const Form4 = () => {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.addEmployee.page);
  const data = useSelector((state) => state.addEmployee);
  const passportImage = useSelector((state) => state.addEmployee.passportImage);
  const familyImage = useSelector((state) => state.addEmployee.familyImage);

  const onFinish = () => {
    console.log(data);
    //     axios
    //       .post("https://lmt-d-server.vercel.app/api/employee", { ...data })
    //       .then((res) => {
    //         console.log(res);
    //         // setModel(2);
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //         // setModel(3);
    //       });
  };
  return (
    <div className={`${page === 4 ? "m_eform_active" : "m_eform_not_active"}`}>
      <div className="m-nj-photo-cnt">
        <div className="m-nj-photo-cnt-photo">
          {passportImage !== "" ? (
            <img
              src={passportImage}
              alt="PassportImage"
              width={"200px"}
              height={"200px"}
            />
          ) : (
            <Avatar shape="square" size={200} icon={<UserOutlined />} />
          )}

          {passportImage !== "" ? (
            <Button
              onClick={() =>
                dispatch(
                  changeGivenState({ state: "passportImage", value: "" })
                )
              }
            >
              Remove Image
            </Button>
          ) : (
            <UploadButton
              uploader={uploader}
              options={options}
              onComplete={(files) => {
                let x = files.map((x) => x.fileUrl).join("\n");
                dispatch(
                  changeGivenState({ state: "passportImage", value: x })
                );
              }}
            >
              {({ onClick }) => (
                <Button onClick={onClick}>Upload A Photo</Button>
              )}
            </UploadButton>
          )}
        </div>

        <div className="m-nj-photo-cnt-photo">
          {familyImage !== "" ? (
            <img
              src={familyImage}
              alt="PassportImage"
              width={"300px"}
              height={"200px"}
            />
          ) : (
            <Avatar
              shape="square"
              size={200}
              icon={<UserOutlined />}
              style={{ width: "300px" }}
            />
          )}

          {familyImage !== "" ? (
            <Button
              onClick={() =>
                dispatch(
                  changeGivenState({ state: "familyImage", value: "" })
                )
              }
            >
              Remove Image
            </Button>
          ) : (
            <UploadButton
              uploader={uploader}
              options={options}
              onComplete={(files) => {
                let x = files.map((x) => x.fileUrl).join("\n");
                dispatch(changeGivenState({ state: "familyImage", value: x }));
              }}
            >
              {({ onClick }) => (
                <Button onClick={onClick}>Upload A Family Group Photo</Button>
              )}
            </UploadButton>
          )}
        </div>
      </div>

      <div className="m-lf-btn-wr">
        <Button
          danger
          onClick={() =>
            dispatch(changeGivenState({ state: "page", value: 3 }))
          }
        >
          previous
        </Button>
        <Button type="primary">Next</Button>
      </div>
    </div>
  );
};

export default Form4;
