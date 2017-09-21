import reducer, { DEFAULT_STATE } from "../ui";
import { TOGGLE_SIDE_BAR, TOGGLE_BEE_MENU } from "../../actionTypes/ui";

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

  it("should handle TOGGLE_SIDE_BAR", () => {
    const mockAction = { type: TOGGLE_SIDE_BAR };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      sideBarOpen: !DEFAULT_STATE.sideBarOpen
    };
    expect(result).toEqual(expected);
  });

  it("should handle TOGGLE_BEE_MENU", () => {
    const mockAction = { type: TOGGLE_BEE_MENU };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      beeMenuOpen: !DEFAULT_STATE.beeMenuOpen
    };
    expect(result).toEqual(expected);
  });
});
