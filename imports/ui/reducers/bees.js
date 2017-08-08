// @flow

// Action Types
import {
  BEES_RECEIVED,
  BEES_REQUEST_FAILED,
  CREATE_BEE_FAILED,
  CREATE_BEE_SUCCESSFUL,
  FETCH_BEES,
  CREATE_BEE
} from "../actionTypes/bees";

// Default State
export const DEFAULT_STATE: BeesState = {
  bees: [],
  error: null
};

// Reducer
export const BeesReducer = (
  state: BeesState = DEFAULT_STATE,
  action: Action
): BeesState => {
  switch (action.type) {
    case BEES_RECEIVED:
      return {
        ...state,
        bees: action.payload
      };
    case CREATE_BEE_FAILED:
    case BEES_REQUEST_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case CREATE_BEE_SUCCESSFUL:
    case FETCH_BEES:
    case CREATE_BEE:
    default:
      return state;
  }
};

export default BeesReducer;
