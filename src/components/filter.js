import React from "react";

import { useDispatch } from "react-redux";
import { setfilter } from "../reducers/filterSlice";
function Filter() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setfilter(e.target.value));
  };
  return (
    <div>
      filter <input onChange={handleChange} />
    </div>
  );
}

export default Filter;
