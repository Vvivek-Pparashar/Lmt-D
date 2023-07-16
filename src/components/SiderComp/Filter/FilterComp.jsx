import { useSelector } from "react-redux";
import "./FilterComp.css";

const FilterComp = () => {
  //   const dispatch = useDispatch();
  const page = useSelector((state) => state.addEmployee.page);

  return (
    <>
      <div className="m-flc">
        {/* <div className="m-flc-opt">
          <h3>Vivek isgr8</h3>
        </div> */}
        <div className={`m-flc-opt-${page === 1 ? "active" : "not-active"}`}>
          <h3 className={`m-flc-h3-${page === 1 ? "active" : "not-active"}`}>
            Application Details
          </h3>
        </div>

        <div className={`m-flc-opt-${page === 2 ? "active" : "not-active"}`}>
          <h3 className={`m-flc-h3-${page === 2 ? "active" : "not-active"}`}>
            Employee Details
          </h3>
        </div>

        <div className={`m-flc-opt-${page === 3 ? "active" : "not-active"}`}>
          <h3 className={`m-flc-h3-${page === 3 ? "active" : "not-active"}`}>
            Bank Details
          </h3>
        </div>
      </div>
    </>
  );
};
export default FilterComp;
