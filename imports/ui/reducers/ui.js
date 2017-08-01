// @flow

// Action Types
import { FAKE_TOGGLE } from "../actionTypes/ui";

// Initializing state
export const DEFAULT_STATE: UIState = {
  fakeValue: false
};

/**
 * Reduces actions related to the user interface (UI).
 *
 * @param {State} state Current state of this section of reducer.
 * @param {Action} action Action to be placed into store and resolved. Must
 * contain the `type` key. May contain the `payload` key.
 */
const UIReducer = (state: UIState = DEFAULT_STATE, action: Action): UIState => {
  switch (action.type) {
    case FAKE_TOGGLE:
      const nextState: UIState = {
        ...state,
        fakeValue: !state.fakeValue
      };
      return nextState;
    default:
      return state;
  }
};

export default UIReducer;
