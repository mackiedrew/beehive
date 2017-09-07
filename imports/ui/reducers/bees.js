// @flow

// Action Types
import {
  FETCH_BEES_REQUEST,
  BEES_RECEIVED,
  BEES_REQUEST_FAILED,
  CREATE_BEE_REQUEST,
  CREATE_BEE_FAILED,
  CREATE_BEE_SUCCESSFUL,
  REMOVE_BEE_REQUEST,
  REMOVE_BEE_FAILED,
  REMOVE_BEE_SUCCESSFUL,
  REMOVE_ALL_BEES_REQUEST,
  REMOVE_ALL_BEES_FAILED,
  REMOVE_ALL_BEES_SUCCESSFUL
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
    case REMOVE_BEE_FAILED:
    case BEES_REQUEST_FAILED:
    case REMOVE_ALL_BEES_FAILED:
      return {
        ...state,
        error: action.payload
      };
    case CREATE_BEE_SUCCESSFUL:
    case REMOVE_BEE_SUCCESSFUL:
    case REMOVE_ALL_BEES_SUCCESSFUL:
    case FETCH_BEES_REQUEST:
    case CREATE_BEE_REQUEST:
    case REMOVE_BEE_REQUEST:
    case REMOVE_ALL_BEES_REQUEST:
    default:
      return state;
  }
};

export default BeesReducer;
