import { all, call, AllEffect, CallEffect } from "redux-saga/effects";

import postsSagas from "./posts/sagas";
import userSagas from "./user/sagas";

/**
 * Redux Saga setup generator for listening to actions and act accordingly.
 */
export default function* rootSaga(): Generator<AllEffect<CallEffect<void>>, void, undefined> {
  yield all([call(postsSagas), call(userSagas)]);
}
