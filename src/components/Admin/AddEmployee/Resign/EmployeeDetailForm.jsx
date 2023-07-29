import React from "react";
import { useSelector } from "react-redux";

const EmployeeDetailForm = () => {
  const data = useSelector((state) => state.reData.data);
  return (
    <div className="m-ae-resign-whole">
      <div className="m-ae-resign-whole-main">
        <div className="m-ae-resign-upper">
          <img
            className="m-ae-resign-profile-pic"
            src={data.passportImage}
            alt="profilee"

          />
          <div className="m-ae-resign-info">
            <div className="m-ae-resign-col-1">
              <div className="m-ae-resign-row-11">
                <h5>name :</h5>
                <h1>{data.name}</h1>
              </div>
              <div className="m-ae-resign-row-12">
                <h5>Employee ID :</h5>
                <h1>{data.employeeId}</h1>
              </div>
              <div className="m-ae-resign-row-13">
                <h5>application for :</h5>
                <h1>{data.applicationFor}</h1>
              </div>
            </div>
            <div className="m-ae-resign-col-2">
              <div className="m-ae-resign-row-11">
                <h5>father's name :</h5>
                <h1>{data.fatherName}</h1>
              </div>
              <div className="m-ae-resign-row-12">
                <h5>joining branch :</h5>
                <h1>{data.joiningBranch}</h1>
              </div>
              <div className="m-ae-resign-row-13">
                <h5>under Group :</h5>
                <h1>{data.underGroup}</h1>
              </div>
            </div>
            <div className="m-ae-resign-col-3">
              <div className="m-ae-resign-row-11">
                <h5>D.O.B :</h5>
                <h1>{data.dob}</h1>
              </div>
              <div className="m-ae-resign-row-12">
                <h5>date of joining</h5>
                <h1>{data.dateOfJoining}</h1>
              </div>
              <div className="m-ae-resign-row-13">
                <h5>experience :</h5>
                <h1>{data.experience} yr</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="m-ae-resign-divider"></div>
        <div className="m-ae-resign-middle">
          <div className="m-ae-resign-col-1">
            <div className="m-ae-resign-row-11">
              <h5>adhaar code :</h5>
              <h1>{data.aadharNo}</h1>
            </div>
            <div className="m-ae-resign-row-12">
              <h5>contact no :</h5>
              <h1>{data.phoneNo}</h1>
            </div>
            <div className="m-ae-resign-row-13">
              <h5>pincode :</h5>
              <h1>{data.pincode}</h1>
            </div>
          </div>
          <div className="m-ae-resign-col-2">
            <div className="m-ae-resign-row-11">
              <h5>PAN code :</h5>
              <h1>{data.panNo}</h1>
            </div>
            <div className="m-ae-resign-row-12">
              <h5>state :</h5>
              <h1>{data.state}</h1>
            </div>
            <div className="m-ae-resign-row-13">
              <h5>gender :</h5>
              <h1>{data.gender}</h1>
            </div>
          </div>
          <div className="m-ae-resign-col-3">
            <div className="m-ae-resign-row-11">
              <h5>email ID :</h5>
              <h1>{data.email}</h1>
            </div>
            <div className="m-ae-resign-row-12">
              <h5>city</h5>
              <h1>{data.city}</h1>
            </div>
            <div className="m-ae-resign-row-13">
              <h5>marital status :</h5>
              <h1>{data.maritalStatus}</h1>
            </div>
          </div>
        </div>
        <div className="m-ae-resign-divider"></div>
        <div className="m-ae-resign-lower">
          <div className="m-ae-resign-col-1">
            <div className="m-ae-resign-row-11">
              <h5>account no :</h5>
              <h1>{data.bankAccountNo}</h1>
            </div>
            <div className="m-ae-resign-row-12">
              <h5>bank branch :</h5>
              <h1>{data.bankBranch}</h1>
            </div>
          </div>
          <div className="m-ae-resign-col-2">
            <div className="m-ae-resign-row-11">
              <h5>IFSC code :</h5>
              <h1>{data.bankIFSCCode}</h1>
            </div>
            <div className="m-ae-resign-row-12">
              <h5>state :</h5>
              <h1>{data.state}</h1>
            </div>
          </div>
          <div className="m-ae-resign-col-3">
            <div className="m-ae-resign-row-11">
              <h5>bank name :</h5>
              <h1>{data.bankName}</h1>
            </div>
            <div className="m-ae-resign-row-12">
              <h5>current salary</h5>
              <h1>₹ {data.salary}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetailForm;
