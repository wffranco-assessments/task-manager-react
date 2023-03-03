import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const basename = process.env.PUBLIC_URL;

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
  },
  {
    path: "/tasks/edit/:id",
    element: <TaskForm />,
  },
], {
  basename,
});

const TaskManager: React.FC = () => {
  return (
    <main className="p-6">
      <RouterProvider router={router} />
    </main>
  );
};

export default TaskManager;
