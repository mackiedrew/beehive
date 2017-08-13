// @flow

// Actoon Types
import { ASYNC_INIT_FAILED } from "../../actionTypes/generic";

// Action Creator
export const asyncInitFailed = (): Action => {
  return { type: ASYNC_INIT_FAILED };
};

export default asyncInitFailed;
