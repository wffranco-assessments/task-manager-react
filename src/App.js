import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Header from "./components/Header";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <h1>Home</h1>
    </Provider>
  );
};

export default App;
