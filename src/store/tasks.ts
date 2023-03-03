import { createSlice } from "@reduxjs/toolkit";

export interface Task {
  id?: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export type TaskStatus = "ToDo" | "InProgress" | "Blocked" | "InQA" | "Done" | "Deployed";

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks') || '[]') as Task[],
  reducers: {
    addTask(state, action) {
      state.push({id: state.length + 1, ...action.payload, status: 'ToDo'});
      saveTasks(state);
    },
    updateTask(state, action) {
      const taskIndex = state.findIndex((task: Task) => task.id === parseInt(action.payload.id));
      if (taskIndex >= 0) {
        state[taskIndex] = action.payload;
      }
      saveTasks(state);
    },
    deleteTask: (state, action) => saveTasks(state.filter((task) => task.id !== action.payload)),
  },
});

//save all tasks in localStorage
function saveTasks(tasks: Task[]) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
}
