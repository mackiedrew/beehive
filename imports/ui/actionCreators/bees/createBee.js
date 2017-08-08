// @flow

// Actoon Types
import { CREATE_BEE } from "../../actionTypes/bees";

// Action Creator
export const createBee = (beePrototype: BeePrototype): Action => ({
  type: CREATE_BEE,
  payload: beePrototype
});

export default createBee;
