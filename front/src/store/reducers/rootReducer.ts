import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import validateReducer from "./validateReducer";

const rootReducer = combineReducers({
  user: userReducer,
  validate: validateReducer,
});

export default rootReducer;
