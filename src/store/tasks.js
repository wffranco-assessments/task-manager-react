import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: JSON.parse(localStorage.getItem('tasks') || '[]'),
  reducers: {
    addTask(state, action) {
      console.log('add task');
      state.push({id: state.length + 1, ...action.payload, status: 'ToDo'});
      saveTasks(state);
    },
    updateTask(state, action) {
      console.log({state, action});
      const taskIndex = state.findIndex((task) => task.id === parseInt(action.payload.id));
      if (taskIndex >= 0) {
        state[taskIndex] = action.payload;
      }
      saveTasks(state);
    },
    deleteTask: (state, action) => saveTasks(state.filter((task) => task.id !== action.payload)),
  },
});

//This function save all tasks in localStorage
function saveTasks(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
  return tasks;
}
