import { configureStore } from "@reduxjs/toolkit";
import { sectionSlice } from "./section";
import { Task, taskSlice } from "./tasks";

export interface State {
  section: string;
  tasks: Task[];
}

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
