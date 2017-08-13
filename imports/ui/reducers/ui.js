// @flow

// Action Types
import { TOGGLE_SIDE_BAR, TOGGLE_BEE_MENU } from "../actionTypes/ui";

// Default State
export const DEFAULT_STATE: UIState = {
  sideBarOpen: false,
  beeMenuOpen: false
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
    case TOGGLE_BEE_MENU:
      return {
        ...state,
        beeMenuOpen: !state.beeMenuOpen
      };
    default:
      return state;
  }
};

export default UIReducer;
