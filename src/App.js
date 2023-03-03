import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";
import TaskManager from "./components/TaskManager";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <TaskManager />
    </Provider>
  );
};

export default App;
