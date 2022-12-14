import reduxThunk from "redux-thunk";
import reduxPromiseMiddleware from "redux-promise-middleware";
// import { routerMiddleware } from 'react-router-redux';
// import { browserHistory } from 'react-router';
import logger from "./logger"; // eslint-disable-line no-unused-vars
import asyncActionDispatch from "./asyncActionDispatch";

export default [
  reduxThunk, // Thunk middleware for Redux
  asyncActionDispatch,
  //jvillmo reduxPromiseMiddleware(), // Resolve, reject promises with conditional optimistic updates
  // routerMiddleware(browserHistory), // !! IMPORTANT for location.href changes
  logger // A basic middleware logger
];
