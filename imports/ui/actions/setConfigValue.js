// @flow

// Action Type
import { SET_CONFIG_VALUE } from "../actionTypes/config";

/**
 * Action creator: creates an action that sets a new value for config.
 *
 * @param {string} key Config key to target
 * @param {string|boolean|number|undefined} value New config value.
 * @returns {Action} Action: sets a new value for config.
 */
const setConfigValue = (
  key: string,
  value: string | boolean | number | void
): Action => {
  return { type: SET_CONFIG_VALUE, payload: { key, value } };
};

export default setConfigValue;
