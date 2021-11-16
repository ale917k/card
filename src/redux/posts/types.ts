import { SimpleEffect, PutEffectDescriptor } from "redux-saga/effects";

import Post from "models/posts";

const enum PostsActionTypes {
  FETCH_POSTS_START = "FETCH_POSTS_START",
  FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS",
  FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE",
  EDIT_POST_START = "EDIT_POST_START",
  EDIT_POST_SUCCESS = "EDIT_POST_SUCCESS",
  EDIT_POST_FAILURE = "EDIT_POST_FAILURE",
}

/*
|--------------------------------------------------------------------------
| Action types to fetch list of posts
|--------------------------------------------------------------------------
*/

/**
 * Start action to trigger saga generator.
 */
export interface FetchPostsStartAction {
  type: PostsActionTypes.FETCH_POSTS_START;
}

/**
 * Success action to save retrieved posts on store.
 */
export interface FetchPostsSuccessAction {
  type: PostsActionTypes.FETCH_POSTS_SUCCESS;
  payload: Post[];
}

/**
 * Failure action to save error on store for error boundaries.
 */
export interface FetchPostsFailureAction {
  type: PostsActionTypes.FETCH_POSTS_FAILURE;
  payload: string;
}

/**
 * All action types to fetch list of posts.
 */
type FetchPostsAction = FetchPostsStartAction | FetchPostsSuccessAction | FetchPostsFailureAction;

/**
 * Saga generator fetching posts.
 */
export type FetchPostsAsyncGenerator = Generator<
  | Promise<Post[] | Error>
  | SimpleEffect<"PUT", PutEffectDescriptor<FetchPostsSuccessAction | FetchPostsFailureAction>>, // Yielded values
  void, // Returned values
  Post[] // Intermediate arguments
>;

/*
|--------------------------------------------------------------------------
| Action types to edit specified post
|--------------------------------------------------------------------------
*/

/**
 * Start action to trigger saga generator.
 */
export interface EditPostStartAction {
  type: PostsActionTypes.EDIT_POST_START;
  payload: Post;
}

/**
 * Success action to update modified post on store.
 */
export interface EditPostSuccessAction {
  type: PostsActionTypes.EDIT_POST_SUCCESS;
  payload: Post;
}

/**
 * Failure action to save error on store for error boundaries.
 */
export interface EditPostFailureAction {
  type: PostsActionTypes.EDIT_POST_FAILURE;
  payload: string;
}

/**
 * All action types to edit specified post.
 */
type EditPostAction = EditPostStartAction | EditPostSuccessAction | EditPostFailureAction;

/**
 * Saga generator editing specified post.
 */
export type EditPostAsyncGenerator = Generator<
  | Promise<Post | Error>
  | SimpleEffect<"PUT", PutEffectDescriptor<EditPostSuccessAction | EditPostFailureAction>>, // Yielded values
  void, // Returned values
  undefined // Intermediate arguments
>;

/*
|--------------------------------------------------------------------------
| Main post types
|--------------------------------------------------------------------------
*/

/**
 * All posts action types.
 */
export type PostsAction = FetchPostsAction | EditPostAction;

/**
 * Reducer for posts as list of articles.
 */
export interface PostsReducer {
  posts: Post[];
  isFetching: boolean;
  error: string | undefined;
}

export default PostsActionTypes;
