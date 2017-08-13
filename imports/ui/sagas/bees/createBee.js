// @flow

// Framework
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Helpers
import meteorPromise from "../../helpers/meteorPromise";

// Action Types
import { CREATE_BEE_REQUEST } from "../../actionTypes/bees";

// Action Creators
import createBeeFailed from "../../actionCreators/bees/createBeeFailed";
import createBeeSuccessful from "../../actionCreators/bees/createBeeSuccessful";
import fetchBeesRequest from "../../actionCreators/bees/fetchBeesRequest";

// Worker
export function* createBeeWorker(action: Action) {
  try {
    const callValues = { bee: action.payload };
    yield call(meteorPromise, "bees.insert", callValues);
    yield put(createBeeSuccessful());
    yield put(fetchBeesRequest());
  } catch ({ message = "No error message specified." }) {
    yield put(createBeeFailed(message));
  }
}

// Watcher
export function* createBeeWatcher() {
  yield takeLatest(CREATE_BEE_REQUEST, createBeeWorker);
}

export default createBeeWatcher;
