import React from "react";
import ReactDOM from "react-dom";
// import { createStore } from 'redux'
import store from "./store";
import { Provider } from "react-redux";
import App from "./App";
// import reducer from "./reducers/anecdoteReducer";
// console.log(store.getState());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
