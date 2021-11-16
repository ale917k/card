import { SimpleEffect, PutEffectDescriptor } from "redux-saga/effects";

import User from "models/user";

const enum UserActionTypes {
  TOGGLE_LIKE_START = "TOGGLE_LIKE_START",
  TOGGLE_LIKE_SUCCESS = "TOGGLE_LIKE_SUCCESS",
  TOGGLE_LIKE_FAILURE = "TOGGLE_LIKE_FAILURE",
}

/*
|--------------------------------------------------------------------------
| Action types to edit specified post
|--------------------------------------------------------------------------
*/

/**
 * Start action to trigger saga generator.
 */
export interface ToggleLikeStartAction {
  type: UserActionTypes.TOGGLE_LIKE_START;
  payload: string;
}

/**
 * Success action to update updated likes on store.
 */
export interface ToggleLikeSuccessAction {
  type: UserActionTypes.TOGGLE_LIKE_SUCCESS;
  payload: string[];
}

/**
 * Failure action to save error on store for error boundaries.
 */
export interface ToggleLikeFailureAction {
  type: UserActionTypes.TOGGLE_LIKE_FAILURE;
  payload: string;
}

/**
 * All action types to toggle like on specified post.
 */
type ToggleLikeAction = ToggleLikeStartAction | ToggleLikeSuccessAction | ToggleLikeFailureAction;

/**
 * Saga generator toggling like on specified post.
 */
export type ToggleLikeAsyncGenerator = Generator<
  | string[]
  | SimpleEffect<"PUT", PutEffectDescriptor<ToggleLikeSuccessAction | ToggleLikeFailureAction>>,
  void,
  string[]
>;

/*
|--------------------------------------------------------------------------
| Main post types
|--------------------------------------------------------------------------
*/

/**
 * All user action types.
 */
export type UserAction = ToggleLikeAction;

/**
 * Reducer for user information.
 */
export interface UserReducer {
  user: User;
  isFetching: boolean;
  error: string | undefined;
}

export default UserActionTypes;
