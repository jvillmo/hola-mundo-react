import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store";
import Routes from "./routes";
//import App from "./components/App";

const initialState = { count: 1000 };
const store = configureStore(null, initialState);

const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    {/*
     */}
    <Routes />
  </Provider>,
  rootElement
);
