// @flow

// Action Types
import { REMOVE_BEE_REQUEST } from "../../actionTypes/bees";

// Action Creator
export const removeBeeRequest = (id: String): Action => ({
  type: REMOVE_BEE_REQUEST,
  payload: id
});

export default removeBeeRequest;
