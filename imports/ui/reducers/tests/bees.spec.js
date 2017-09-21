import reducer, { DEFAULT_STATE } from "../bees";
import {
  FETCH_BEES_REQUEST,
  BEES_RECEIVED,
  BEES_REQUEST_FAILED,
  CREATE_BEE_REQUEST,
  CREATE_BEE_SUCCESSFUL,
  CREATE_BEE_FAILED,
  REMOVE_BEE_REQUEST,
  REMOVE_BEE_SUCCESSFUL,
  REMOVE_BEE_FAILED,
  REMOVE_ALL_BEES_REQUEST,
  REMOVE_ALL_BEES_SUCCESSFUL,
  REMOVE_ALL_BEES_FAILED
} from "../../actionTypes/bees";

describe("bees reducer", () => {
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

  it("should handle FETCH_BEES_REQUEST", () => {
    const mockAction = { type: FETCH_BEES_REQUEST };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle BEES_RECEIVED", () => {
    const mockAction = {
      type: BEES_RECEIVED,
      payload: []
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      bees: mockAction.payload
    };
    expect(result).toEqual(expected);
  });

  it("should handle BEES_REQUEST_FAILED", () => {
    const mockAction = {
      type: BEES_REQUEST_FAILED,
      payload: "bee request failed"
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      error: mockAction.payload
    };
    expect(result).toEqual(expected);
  });

  it("should handle CREATE_BEE_REQUEST", () => {
    const mockAction = { type: CREATE_BEE_REQUEST };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle CREATE_BEE_SUCCESSFUL", () => {
    const mockAction = { type: CREATE_BEE_SUCCESSFUL };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle CREATE_BEE_FAILED", () => {
    const mockAction = {
      type: CREATE_BEE_FAILED,
      payload: "create bee failed"
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      error: mockAction.payload
    };
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_BEE_REQUEST", () => {
    const mockAction = { type: REMOVE_BEE_REQUEST };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_BEE_SUCCESSFUL", () => {
    const mockAction = { type: REMOVE_BEE_SUCCESSFUL };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_BEE_FAILED", () => {
    const mockAction = {
      type: REMOVE_BEE_FAILED,
      payload: "remove bee failed"
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      error: mockAction.payload
    };
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_ALL_BEES_REQUEST", () => {
    const mockAction = { type: REMOVE_ALL_BEES_REQUEST };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_ALL_BEES_SUCCESSFUL", () => {
    const mockAction = { type: REMOVE_ALL_BEES_SUCCESSFUL };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = DEFAULT_STATE;
    expect(result).toEqual(expected);
  });

  it("should handle REMOVE_ALL_BEES_FAILED", () => {
    const mockAction = {
      type: REMOVE_ALL_BEES_FAILED,
      payload: "remove all bees failed"
    };
    const result = reducer(DEFAULT_STATE, mockAction);
    const expected = {
      ...DEFAULT_STATE,
      error: mockAction.payload
    };
    expect(result).toEqual(expected);
  });
});
