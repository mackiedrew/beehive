// @flow

// Action Types
import { INIT } from "../../actionTypes/generic";

// Action Creator
export const initAppRequest = (): Action => ({
  type: INIT
});

export default initAppRequest;
