// @flow

// Framework
import { combineReducers } from "redux";

// Reducers
import UIReducer from "./ui";

// Key reducers in main store
const reducers: Reducers = {
  ui: UIReducer,
}

// Combine reducers
const rootReducer: Reducer<any, any> = combineReducers(reducers);
export default rootReducer;
