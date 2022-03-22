import { configureStore } from "@reduxjs/toolkit";
// import {} from './reducers/anecdoteReducerSlice'
// import reducer from "./reducers/anecdoteReducer";
import reducer from "./reducers/anecdoteReducerSlice";
import notification from "./reducers/notificationSlice";
import filter from "./reducers/filterSlice";
export default configureStore({
  reducer: {
    anecdote: reducer,
    notification: notification,
    filter: filter,
  },
});
