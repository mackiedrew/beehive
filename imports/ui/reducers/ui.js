// @flow

// Action Types
import { TOGGLE_SIDE_BAR } from "../actionTypes/ui";

// Default State
export const DEFAULT_STATE: UIState = {
  sideBarOpen: false
};

// Reducer
export const UIReducer = (
  state: UIState = DEFAULT_STATE,
  action: Action
): UIState => {
  switch (action.type) {
    case TOGGLE_SIDE_BAR:
      return {
        ...state,
        sideBarOpen: !state.sideBarOpen
      };
    default:
      return state;
  }
};

export default UIReducer;
