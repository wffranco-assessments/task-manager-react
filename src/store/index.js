import { configureStore } from "@reduxjs/toolkit";
import { sectionSlice } from "./section";
import { taskSlice } from "./tasks";

const store = configureStore({
  reducer: {
    section: sectionSlice.reducer,
    tasks: taskSlice.reducer,
  },
});

const { updateSection } = sectionSlice.actions;
const { addTask, updateTask, deleteTask } = taskSlice.actions;

export { addTask, updateSection, updateTask, deleteTask };
export default store;
