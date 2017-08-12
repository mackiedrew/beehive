// @flow

// Action Types
import { REMOVE_ALL_BEES_REQUEST } from "../../actionTypes/bees";

// Action Creator
export const removeAllBeesRequest = (): Action => ({
  type: REMOVE_ALL_BEES_REQUEST
});

export default removeAllBeesRequest;
