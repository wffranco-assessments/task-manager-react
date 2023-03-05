import React from "react";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./store";
import Header from "./components/Header";
import TaskList from "./views/TaskList";
import TaskForm from "./views/TaskForm";

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

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
