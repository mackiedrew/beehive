// @flow

// Framework
import { Meteor } from "meteor/meteor";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Action Types
import { FETCH_BEES } from "../../actionTypes/bees";

// Action Creators
import beesReceived from "../../actionCreators/bees/beesReceived";
import beesRequestFailed from "../../actionCreators/bees/beesRequestFailed";

// Worker
export function* fetchBeesWorker() {
  try {
    const bees = yield call(Meteor.call, "bees.fetchAllForUser");
    yield put(beesReceived(bees));
  } catch (error) {
    yield put(beesRequestFailed(error));
  }
}

// Watcher
export function* fetchBeesSaga() {
  yield takeLatest(FETCH_BEES, fetchBeesWorker);
}

export default fetchBeesSaga;
