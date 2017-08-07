// @flow

// Action Types
import { SET_SETTINGS_VALUE } from "../actionTypes/settings";

// Initializing state
export const DEFAULT_STATE: SettingsState = {
  hiveName: "Your Beehive"
};

/**
 * Reduces actions related to the user settings.
 *
 * @param {State} state Current state of this section of reducer.
 * @param {Action} action Action to be placed into store and resolved. Must
 * contain the `type` key. May contain the `payload` key.
 */
const SettingReducer = (
  state: SettingsState = DEFAULT_STATE,
  action: Action
): SettingsState => {
  switch (action.type) {
    case SET_SETTINGS_VALUE:
      const nextState: SettingsState = {
        ...state,
        [action.payload.key]: action.payload.value
      };
      return nextState;
    default:
      return state;
  }
};

export default SettingReducer;
