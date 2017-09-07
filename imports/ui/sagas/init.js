// @flow

// Framework
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Helpers
import meteorPromise from "../helpers/meteorPromise";

// Action Types
import { INIT } from "../actionTypes/generic";

// Action Creators
import fetchBeesRequest from "../actionCreators/bees/fetchBeesRequest";
import asyncInitFailed from "../actionCreators/bees/asyncInitFailed";

// Worker
export function* initializeAsyncStateWorker(action: Action) {
  try {
    yield put(fetchBeesRequest());
  } catch ({ message = "No error message specified." }) {
    console.error(message);
    yield put(asyncInitFailed());
  }
}

// Watcher
export function* initializeAsyncStateWatcher() {
  yield takeEvery(INIT, initializeAsyncStateWorker);
}

export default initializeAsyncStateWatcher;
