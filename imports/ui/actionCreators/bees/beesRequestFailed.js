// @flow

// Actoon Types
import { BEES_REQUEST_FAILED } from "../../actionTypes/bees";

// Action Creator
const beesRequestFailed = (error: string): Action => {
  return { type: BEES_REQUEST_FAILED, payload: error };
};

export default beesRequestFailed;
