// @flow

// Actoon Types
import { FETCH_BEES } from "../../actionTypes/bees";

// Action Creator
export const fetchBees = (bees: Array<Bees>): Action => ({ type: FETCH_BEES });

export default fetchBees;
