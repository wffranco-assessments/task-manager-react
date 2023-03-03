import { createSlice } from "@reduxjs/toolkit";

export const sectionSlice = createSlice({
  name: "section",
  initialState: "",
  reducers: {
    updateSection: (state, action) => {
      return action.payload;
    },
  },
});
