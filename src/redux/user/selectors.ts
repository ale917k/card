import { createSelector } from "reselect";

import RootState from "models/store";

import { UserReducer } from "./types";

/**
 * Redux selector returning whole user state.
 *
 * @param state - Root state
 * @returns User state
 */
export const selectUserState = (state: RootState): UserReducer => state.user;

/**
 * Redux memoized selector returning user.
 *
 * @returns user
 */
export const selectUser = createSelector([selectUserState], (userState) => userState.user);

/**
 * Redux memoized selector returning list of likes.
 *
 * @returns list of likes
 */
export const selectLikes = createSelector([selectUser], (user) => user.likes);
