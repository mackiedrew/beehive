// @flow
// Framework
import { Meteor } from "meteor/meteor";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

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
    yield call(Meteor.callPromise, "bees.insert", callValues);
    yield put(createBeeSuccessful());
    yield put(fetchBeesRequest());
  } catch ({ message = "No error message specified." }) {
    yield put(createBeeFailed(message));
  }
}

// Watcher
export default function* createBeeWatcher() {
  yield takeLatest(CREATE_BEE_REQUEST, createBeeWorker);
}

//export default createBeeWatcher;
