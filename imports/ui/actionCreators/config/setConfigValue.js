// @flow

// Action Types
import { SET_CONFIG_VALUE } from "../../actionTypes/config";

// Action Creator
export const setConfigValue = (
  key: string,
  value: string | boolean | number | void
): Action => ({ type: SET_CONFIG_VALUE, payload: { key, value } });

export default setConfigValue;
