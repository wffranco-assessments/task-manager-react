import { createSlice } from "@reduxjs/toolkit";

export const sectionSlice = createSlice({
  name: "section",
  initialState: "",
  reducers: {
    updateSection: (_state, action) => action.payload,
  },
});
