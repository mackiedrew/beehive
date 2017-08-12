// @flow

// Libraries
import { createSelector } from "reselect";

// State Filter
const beesInState = (state: StrictState): Array<Bee> => state.bees.bees;

// Selector Constructor
const getNumberOfBees: Function = createSelector(
  beesInState,
  bees => bees.length
);

export default getNumberOfBees;
