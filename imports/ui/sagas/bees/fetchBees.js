// @flow

// Framework
import { Meteor } from "meteor/meteor";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Action Types
import { FETCH_BEES_REQUEST } from "../../actionTypes/bees";

// Action Creators
import beesReceived from "../../actionCreators/bees/beesReceived";
import beesRequestFailed from "../../actionCreators/bees/beesRequestFailed";

// Worker
export function* fetchBeesWorker(action: Action) {
  try {
    const bees = yield call(Meteor.callPromise, "bees.fetchAllForUser");
    yield put(beesReceived(bees));
  } catch ({ message: rawError }) {
    const errorMessage = rawError === "" ? "No error message specified." : rawError;
    yield put(beesRequestFailed(errorMessage));
  }
}

// Watcher
export function* fetchBeesWatcher() {
  yield takeLatest(FETCH_BEES_REQUEST, fetchBeesWorker);
}

export default fetchBeesWatcher;
