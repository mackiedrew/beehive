import { combineReducers } from "redux";

import BeesReducer from "./reducers/bees";
import ConfigReducer from "./reducers/config";
import SettingsReducer from "./reducers/settings";
import UIReducer from "./reducers/ui";

const reducers = {
  bees: BeesReducer,
  config: ConfigReducer,
  settings: SettingsReducer,
  ui: UIReducer
};

const rootReducer: Reducer<any, any> = combineReducers(reducers);

export default rootReducer;
