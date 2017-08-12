// @flow

// Action Types
import { FETCH_BEES_REQUEST } from "../../actionTypes/bees";

// Action Creator
export const fetchBeesRequest = (bees: Array<Bees>): Action => ({
  type: FETCH_BEES_REQUEST
});

export default fetchBeesRequest;
