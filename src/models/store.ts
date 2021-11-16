import rootReducer from "redux/root-reducer";
import { PostsReducer } from "redux/posts/types";
import { UserReducer } from "redux/user/types";

/**
 * Root Redux store state.
 */
type RootState = ReturnType<typeof rootReducer>;

/**
 * Root Redux store reducer.
 */
export interface RootReducer {
  /**
   * Reducer for posts as list of articles
   */
  posts: PostsReducer;
  /**
   * Reducer for current user information
   */
  user: UserReducer;
}

/**
 * Fallback action to use on reducers when none is parsed.
 */
export interface DefaultAction {
  /**
   * Type of action to trigger
   */
  type: undefined;
}

export default RootState;
