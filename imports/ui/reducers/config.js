// @flow

// Action Types
import { SET_CONFIG_VALUE } from "../actionTypes/config";

// Initializing state
export const DEFAULT_STATE: ConfigState = {
  tickRate: 50
};

/**
 * Reduces actions related to the game-related settings, or configs.
 *
 * @param {State} state Current state of this section of reducer.
 * @param {Action} action Action to be placed into store an
 * contain the `type` key. May contain the `payload` key.
 */
const ConfigReducer = (
  state: ConfigState = DEFAULT_STATE,
  action: Action
): ConfigState => {
  switch (action.type) {
    case SET_CONFIG_VALUE:
      const nextState: ConfigState = {
        ...state,
        [action.payload.key]: action.payload.value
      };
      return nextState;
    default:
      return state;
  }
};

export default ConfigReducer;
