// @flow

// Framework
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Helpers
import meteorPromise from "../../helpers/meteorPromise";

// Action Types
import { REMOVE_BEE_REQUEST } from "../../actionTypes/bees";

// Action Creators
import removeBeeFailed from "../../actionCreators/bees/removeBeeFailed";
import removeBeeSuccessful from "../../actionCreators/bees/removeBeeSuccessful";
import fetchBeesRequest from "../../actionCreators/bees/fetchBeesRequest";

// Worker
export function* removeBeeWorker(action: Action) {
  try {
    debugger;
    const callValues = { beeId: action.payload };
    yield call(meteorPromise, "bees.remove", callValues);
    yield put(removeBeeSuccessful());
    yield put(fetchBeesRequest());
  } catch ({ message = "No error message specified." }) {
    yield put(removeBeeFailed(message));
  }
}

// Watcher
export function* removeBeeWatcher() {
  yield takeEvery(REMOVE_BEE_REQUEST, removeBeeWorker);
}

export default removeBeeWatcher;
