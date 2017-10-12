// Framework
import SagaTester from "redux-saga-tester";

// Subject
import fetchBees from "../fetchBees";
import { BeesReducer, DEFAULT_STATE } from "../../../reducers/bees";

// Data
import {
  FETCH_BEES_REQUEST,
  BEES_REQUEST_FAILED
} from "../../../actionTypes/bees";

// Mocks
import { Meteor } from "meteor/meteor";

describe("fetchBees Saga", function() {
  let sagaTester;

  beforeEach(function() {
    sagaTester = new SagaTester({
      initialState: DEFAULT_STATE,
      reducer: BeesReducer
    });
    sagaTester.start(fetchBees);
  });

  afterEach(function() {
    sagaTester = undefined;
    Meteor.callPromise.mockReset();
  });

  it("calls Meteor.callPromise once when the FETCH_BEES_REQUEST action is dispatched", async function() {
    // Check that state was populated with initialState
    const initialState = sagaTester.getState();
    expect(initialState).toEqual(DEFAULT_STATE);

    // Dispatch the event to start the saga
    sagaTester.dispatch({ type: FETCH_BEES_REQUEST });

    // Check that the helper was called
    expect(Meteor.callPromise).toHaveBeenCalledTimes(1);
  });

  it("dispatches LOG_CHANGE_VIEW_FAILED if logPageView throws an error", async function() {
    // Check that state was populated with initialState
    const initialState = sagaTester.getState();
    expect(initialState).toEqual(DEFAULT_STATE);

    // Make the helper fail
    const testErrorMessage = "Test error!";
    Meteor.callPromise.mockImplementationOnce(() => {
      throw new Error(testErrorMessage);
    });

    // Dispatch the event to start the saga
    sagaTester.dispatch({ type: FETCH_BEES_REQUEST });

    // Hook into the success action
    await sagaTester.waitFor(BEES_REQUEST_FAILED);

    // Check that the helper was called
    expect(Meteor.callPromise).toHaveBeenCalledTimes(1);
  });
});
