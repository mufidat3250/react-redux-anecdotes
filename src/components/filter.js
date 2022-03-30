import React from "react";

import { connect } from "react-redux";
import { setfilter } from "../reducers/filterSlice";
function Filter(props) {
  const handleChange = (e) => {
    props.setfilter(e.target.value);
  };
  return (
    <div>
      filter <input onChange={handleChange} />
    </div>
  );
}

const mapDispatchToprops = (dispatch) => {
  return {
    setfilter: (value) => {
      dispatch(setfilter(value));
    },
  };
};

const connectFilter = connect(null, mapDispatchToprops)(Filter);
export default connectFilter;
