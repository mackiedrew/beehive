// @flow

// Action Types
import { SET_SETTINGS_VALUE } from "../actionTypes/settings";

// Default State
export const DEFAULT_STATE: SettingsState = {
  hiveName: "Your Beehive"
};

// Reducer
export const SettingsReducer = (
  state: SettingsState = DEFAULT_STATE,
  action: Action
): SettingsState => {
  switch (action.type) {
    case SET_SETTINGS_VALUE:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
      return state;
  }
};

export default SettingsReducer;
