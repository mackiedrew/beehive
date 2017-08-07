// @flow

// Framework
import { combineReducers } from "redux";

// Reducers
import UIReducer from "./ui";
import ConfigReducer from "./config";
import SettingsReducer from "./settings";

// Key reducers in main store
const reducers: Reducers = {
  ui: UIReducer,
  config: ConfigReducer,
  settings: SettingsReducer
};

// Combine reducers
const rootReducer: Reducer<any, any> = combineReducers(reducers);
export default rootReducer;
