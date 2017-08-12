// @flow

// Action Types
import { REMOVE_ALL_BEES_SUCCESSFUL } from "../../actionTypes/bees";

// Action Creator
export const removeAllBeesSuccessful = (): Action => ({
  type: REMOVE_ALL_BEES_SUCCESSFUL
});

export default removeAllBeesSuccessful;
