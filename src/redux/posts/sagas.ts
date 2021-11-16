import { takeLatest, all, call, put, AllEffect, CallEffect, ForkEffect } from "redux-saga/effects";

import { fetchPosts, editPost } from "services/posts";

import { fetchPostsSuccess, fetchPostsFailure, editPostSuccess, editPostFailure } from "./actions";
import PostsActionTypes, {
  EditPostStartAction,
  FetchPostsAsyncGenerator,
  EditPostAsyncGenerator,
} from "./types";

/*
|--------------------------------------------------------------------------
| Action types to fetch list of posts
|--------------------------------------------------------------------------
*/

/**
 * Fetch list of posts asynchronously and call next fetchPosts action accordingly.
 */
export function* fetchPostsAsync(): FetchPostsAsyncGenerator {
  try {
    const posts = yield fetchPosts();
    yield put(fetchPostsSuccess(posts));
  } catch (err) {
    yield put(fetchPostsFailure((err as Error).message));
  }
}

/**
 * Trigger asynchronous posts fetching if related action is called.
 * Works as a debouncer: Out of multiple actions, it only triggers the last.
 */
export function* fetchPostsStart(): Generator<ForkEffect<never>, void, undefined> {
  yield takeLatest(PostsActionTypes.FETCH_POSTS_START, fetchPostsAsync);
}

/*
|--------------------------------------------------------------------------
| Action types to edit specified post
|--------------------------------------------------------------------------
*/

/**
 * Send asynchronous request to edit post and call next editPost action accordingly.
 *
 * @param action - EditPostStartAction to get the payload with modified post to update
 */
export function* editPostAsync({ payload: post }: EditPostStartAction): EditPostAsyncGenerator {
  try {
    yield editPost(post);
    yield put(editPostSuccess(post));
  } catch (err) {
    yield put(editPostFailure((err as Error).message));
  }
}

/**
 * Trigger asynchronous post edit if related action is called.
 * Works as a debouncer: Out of multiple actions, it only triggers the last.
 */
export function* editPostStart(): Generator<ForkEffect<never>, void, undefined> {
  yield takeLatest(PostsActionTypes.EDIT_POST_START, editPostAsync);
}

/*
|--------------------------------------------------------------------------
| Main posts saga
|--------------------------------------------------------------------------
*/
function* postsSagas(): Generator<AllEffect<CallEffect<void>>, void, undefined> {
  yield all([call(fetchPostsStart), call(editPostStart)]);
}

export default postsSagas;
