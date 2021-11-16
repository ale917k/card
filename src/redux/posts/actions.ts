import Post from "models/posts";

import PostsActionTypes, {
  FetchPostsStartAction,
  FetchPostsSuccessAction,
  FetchPostsFailureAction,
  EditPostStartAction,
  EditPostSuccessAction,
  EditPostFailureAction,
} from "./types";

/*
|--------------------------------------------------------------------------
| Actions to fetch list of posts
|--------------------------------------------------------------------------
*/

/**
 * Start action to trigger saga generator.
 *
 * @returns Redux start action
 */
export const fetchPostsStart = (): FetchPostsStartAction => ({
  type: PostsActionTypes.FETCH_POSTS_START,
});

/**
 * Success action to save retrieved posts on store.
 *
 * @param posts - Retrieved posts
 * @returns Redux success action
 */
export const fetchPostsSuccess = (posts: Post[]): FetchPostsSuccessAction => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

/**
 * Failure action to save error on store for error boundaries.
 *
 * @param error - Stringified error
 * @returns Redux failure action
 */
export const fetchPostsFailure = (error: string): FetchPostsFailureAction => ({
  type: PostsActionTypes.FETCH_POSTS_FAILURE,
  payload: error,
});

/*
|--------------------------------------------------------------------------
| Actions to edit specified post
|--------------------------------------------------------------------------
*/

/**
 * Start action to trigger saga generator.
 *
 * @returns Redux start action
 */
export const editPostStart = (post: Post): EditPostStartAction => ({
  type: PostsActionTypes.EDIT_POST_START,
  payload: post,
});

/**
 * Success action to update modified post on store.
 *
 * @param post - Modified post
 * @returns Redux success action
 */
export const editPostSuccess = (post: Post): EditPostSuccessAction => ({
  type: PostsActionTypes.EDIT_POST_SUCCESS,
  payload: post,
});

/**
 * Failure action to save error on store for error boundaries.
 *
 * @param error - Stringified error
 * @returns Redux failure action
 */
export const editPostFailure = (error: string): EditPostFailureAction => ({
  type: PostsActionTypes.EDIT_POST_FAILURE,
  payload: error,
});
