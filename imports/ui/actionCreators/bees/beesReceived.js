// @flow

// Actoon Types
import { BEES_RECEIVED } from "../../actionTypes/bees";

// Action Creator
export const beesReceived = (bees: Array<Bees>): Action => {
  return { type: BEES_RECEIVED, payload: bees };
};

export default beesReceived;
