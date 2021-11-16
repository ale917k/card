import UserActionTypes, {
  ToggleLikeStartAction,
  ToggleLikeSuccessAction,
  ToggleLikeFailureAction,
} from "./types";

/*
|--------------------------------------------------------------------------
| Actions to toggle likes
|--------------------------------------------------------------------------
*/

/**
 * Start action to trigger saga generator.
 *
 * @param postId - Id to identify liked post
 * @returns Redux start action
 */
export const toggleLikeStart = (postId: string): ToggleLikeStartAction => ({
  type: UserActionTypes.TOGGLE_LIKE_START,
  payload: postId,
});

/**
 * Success action to save updated likes on store.
 *
 * @param likes - Updated likes
 * @returns Redux success action
 */
export const toggleLikeSuccess = (likes: string[]): ToggleLikeSuccessAction => ({
  type: UserActionTypes.TOGGLE_LIKE_SUCCESS,
  payload: likes,
});

/**
 * Failure action to save error on store for error boundaries.
 *
 * @param error - Stringified error
 * @returns Redux failure action
 */
export const toggleLikeFailure = (error: string): ToggleLikeFailureAction => ({
  type: UserActionTypes.TOGGLE_LIKE_FAILURE,
  payload: error,
});
