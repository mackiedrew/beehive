// @flow

// Action Type
import { SET_SETTINGS_VALUE } from "../actionTypes/settings";

/**
 * Action creator: creates an action that sets a new value for setting.
 *
 * @param {string} key Config key to target
 * @param {string|boolean|number|undefined} value New setting value.
 * @returns {Action} Action: sets a new value for setting.
 */
const setSettingValue = (
  key: string,
  value: string | boolean | number
): Action => {
  return { type: SET_SETTINGS_VALUE, payload: { key, value } };
};

export default setSettingValue;
