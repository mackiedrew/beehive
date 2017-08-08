// @flow

// Framework
import { Meteor } from "meteor/meteor";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

// Action Types
import { CREATE_BEE } from "../../actionTypes/bees";

// Action Creators
import createBeeFailed from "../../actionCreators/bees/createBeeFailed";
import createBeeSuccessful from "../../actionCreators/bees/createBeeSuccessful";

// Worker
export function* createBeeWorker(action) {
  try {
    const insertParams = { beePrototype: action.payload };
    yield call(Meteor.call, "bees.insert", insertParams);
    yield put(createBeeSuccessful());
  } catch (error) {
    yield put(createBeeFailed(error));
  }
}

// Watcher
export function* createBeeSaga() {
  yield takeEvery(CREATE_BEE, createBeeWorker);
}

export default createBeeSaga;
