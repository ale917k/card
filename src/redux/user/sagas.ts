import { takeLatest, all, call, put, AllEffect, CallEffect, ForkEffect } from "redux-saga/effects";

import toggleLike from "services/user";

import { toggleLikeSuccess, toggleLikeFailure } from "./actions";
import UserActionTypes, { ToggleLikeStartAction, ToggleLikeAsyncGenerator } from "./types";

/*
|--------------------------------------------------------------------------
| Action types to toggle like on post
|--------------------------------------------------------------------------
*/

/**
 * Send asynchronous request to toggle like and call next toggleLike action accordingly.
 *
 * @param action - ToggleLikeStartAction to get the payload with post id to toggle
 */
export function* toggleLikeAsync({
  payload: postId,
}: ToggleLikeStartAction): ToggleLikeAsyncGenerator {
  try {
    const likes = yield toggleLike(postId);
    yield put(toggleLikeSuccess(likes));
  } catch (err) {
    yield put(toggleLikeFailure((err as Error).message));
  }
}

/**
 * Trigger asynchronous like toggle if related action is called.
 * Works as a debouncer: Out of multiple actions, it only triggers the last.
 */
export function* toggleLikeStart(): Generator<ForkEffect<never>, void, undefined> {
  yield takeLatest(UserActionTypes.TOGGLE_LIKE_START, toggleLikeAsync);
}

/*
|--------------------------------------------------------------------------
| Main user saga
|--------------------------------------------------------------------------
*/
function* userSagas(): Generator<AllEffect<CallEffect<void>>, void, undefined> {
  yield all([call(toggleLikeStart)]);
}

export default userSagas;
