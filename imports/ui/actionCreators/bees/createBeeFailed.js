// @flow

// Actoon Types
import { CREATE_BEE_FAILED } from "../../actionTypes/bees";

// Action Creator
export const createBeeFailed = (error: Error): Action => ({
  type: CREATE_BEE_FAILED,
  payload: error
});

export default createBeeFailed;
