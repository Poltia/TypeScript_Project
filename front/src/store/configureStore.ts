import {
  applyMiddleware,
  legacy_createStore as createStore,
} from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import thunkMiddleware from "redux-thunk";

export default function configureStore() {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const store = createStore(rootReducer, middlewareEnhancer);
  return store;
}
