// Flow

// Action Types
import { SET_SETTINGS_VALUE } from "../../actionTypes/settings";

// Action Creator
export const setSettingValue = (
  key: string,
  value: string | boolean | number
): Action => {
  return { type: SET_SETTINGS_VALUE, payload: { key, value } };
};

export default setSettingValue;
