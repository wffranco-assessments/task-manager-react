import { configureStore } from "@reduxjs/toolkit";
import { sectionSlice } from "./section";
import { taskSlice } from "./tasks";

const store = configureStore({
  reducer: {
    section: sectionSlice.reducer,
    tasks: taskSlice.reducer,
  },
});

export const { addTask, updateTask, deleteTask } = taskSlice.actions;
export default store;
