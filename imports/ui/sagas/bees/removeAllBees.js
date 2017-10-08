// @flow

// Framework
import { Meteor } from "meteor/meteor";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Action Types
import { REMOVE_ALL_BEES_REQUEST } from "../../actionTypes/bees";

// Action Creators
import removeAllBeesFailed from "../../actionCreators/bees/removeAllBeesFailed";
import removeAllBeesSuccessful from "../../actionCreators/bees/removeAllBeesSuccessful";
import fetchBeesRequest from "../../actionCreators/bees/fetchBeesRequest";

// Worker
export function* removeAllBeesWorker(action: Action) {
  try {
    yield call(Meteor.callPromise, "bees.removeAllForUser");
    yield put(removeAllBeesSuccessful());
    yield put(fetchBeesRequest());
  } catch ({ message = "No error message specified." }) {
    yield put(removeAllBeesFailed(message));
  }
}

// Watcher
export function* removeAllBeesWatcher() {
  yield takeLatest(REMOVE_ALL_BEES_REQUEST, removeAllBeesWorker);
}

export default removeAllBeesWatcher;
