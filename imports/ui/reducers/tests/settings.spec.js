import reducer, { DEFAULT_STATE } from "../settings";
import { SET_SETTINGS_VALUE } from "../../actionTypes/settings";

describe("settings reducer", () => {
  it("should return the initial state", () => {
    const result = reducer(DEFAULT_STATE, {});
    expect(result).toEqual(DEFAULT_STATE);
  });

  it("should not the initial state when the state is null", () => {
    const result = reducer(null, {});
    const expected = null;
    expect(result).toEqual(expected);
  });

  it("should not the initial state when the state is not defined", () => {
    const result = reducer(undefined, {});
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle SET_SETTINGS_VALUE", () => {
    const mockAction = {
      type: SET_SETTINGS_VALUE,
      payload: { key: "hiveName", value: "New HiveName" }
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      [mockAction.payload.key]: mockAction.payload.value
    };
    expect(result).toEqual(expected);
  });
});
