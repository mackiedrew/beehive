// @flow

// Framework
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Helpers
import meteorPromise from "../../helpers/meteorPromise";

// Action Types
import { FETCH_BEES_REQUEST } from "../../actionTypes/bees";

// Action Creators
import beesReceived from "../../actionCreators/bees/beesReceived";
import beesRequestFailed from "../../actionCreators/bees/beesRequestFailed";

// Worker
export function* fetchBeesWorker(action: Action) {
  try {
    const bees = yield call(meteorPromise, "bees.fetchAllForUser");
    yield put(beesReceived(bees));
  } catch ({ message = "No error message specified." }) {
    yield put(beesRequestFailed(message));
  }
}

// Watcher
export function* fetchBeesWatcher() {
  yield takeLatest(FETCH_BEES_REQUEST, fetchBeesWorker);
}

export default fetchBeesWatcher;
