import React from "react";
import "./SiderComp.css";
import FilterComp from "./Filter/FilterComp";
// import { useDispatch, useSelector } from "react-redux";
// import { changeSiderState } from "../store/slice/collapsedSlice";
import { CloseOutlined } from "@ant-design/icons";

const SiderComp = () => {
  //   const dispatch = useDispatch();
  //   const open = useSelector((state) => state.collapsed.sider);
  return (
    <div className={`sider`}>
      <CloseOutlined className="sider-close-icon" />
      <h3 className="filter-h3">Apply Filters</h3>
      <FilterComp />
    </div>
  );
};

export default SiderComp;
