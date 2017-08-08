// @flow

// Action Types
import { SET_CONFIG_VALUE } from "../actionTypes/config";

// Default State
export const DEFAULT_STATE: ConfigState = {
  tickRate: 50
};

// Reducer
export const ConfigReducer = (
  state: ConfigState = DEFAULT_STATE,
  action: Action
): ConfigState => {
  switch (action.type) {
    case SET_CONFIG_VALUE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
      return state;
  }
};

export default ConfigReducer;
