// @flow

// Action Type
import { FAKE_TOGGLE } from '../actionTypes/ui';

/**
 * Action creator: creates an action that toggles the fake value.
 *
 * @returns {Action} Action: toggles the fake value.
 */
const fakeToggle = (): Action => {
  return { type: FAKE_TOGGLE };
};

export default fakeToggle;
