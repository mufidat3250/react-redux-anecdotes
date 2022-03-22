import { createSlice, current } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setfilter(state, action) {
      return action.payload;
    },
  },
});
export default filterSlice.reducer;
export const { setfilter } = filterSlice.actions;
