import { createSelector } from "reselect";

import RootState from "models/store";

import { PostsReducer } from "./types";

/**
 * Redux selector returning whole posts state.
 *
 * @param state - Root state
 * @returns Posts state
 */
export const selectPostsState = (state: RootState): PostsReducer => state.posts;

/**
 * Redux memoized selector returning list of posts.
 *
 * @returns List of posts
 */
export const selectPosts = createSelector([selectPostsState], (posts) => posts.posts);
