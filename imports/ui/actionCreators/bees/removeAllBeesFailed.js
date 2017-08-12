// @flow

// Action Types
import { REMOVE_ALL_BEES_FAILED } from "../../actionTypes/bees";

// Action Creator
export const removeAllBeesFailed = (error: string): Action => ({
  type: REMOVE_ALL_BEES_FAILED,
  payload: error
});

export default removeAllBeesFailed;
