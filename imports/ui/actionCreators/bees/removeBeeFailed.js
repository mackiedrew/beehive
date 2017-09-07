// @flow

// Action Types
import { REMOVE_BEE_FAILED } from "../../actionTypes/bees";

// Action Creator
export const removeBeeFailed = (error: string): Action => ({
  type: REMOVE_BEE_FAILED,
  payload: error
});

export default removeBeeFailed;
