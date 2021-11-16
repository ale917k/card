import { DefaultAction } from "models/store";

import PostsActionTypes, { PostsAction, PostsReducer } from "./types";

/**
 * Initial posts store shape when main store is empty.
 */
const INITIAL_STATE = {
  posts: [],
  isFetching: false,
  error: undefined,
};

/**
 * Reducer handling slice of store with posts.
 *
 * @param state - Posts state to update
 * @param action - Redux action to trigger
 * @returns Updated posts store
 */
const postsReducer = (
  state: PostsReducer = INITIAL_STATE,
  action: PostsAction | DefaultAction = { type: undefined }
): PostsReducer => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_START:
    case PostsActionTypes.EDIT_POST_START: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case PostsActionTypes.FETCH_POSTS_SUCCESS: {
      return {
        posts: action.payload,
        isFetching: false,
        error: undefined,
      };
    }

    case PostsActionTypes.EDIT_POST_SUCCESS: {
      const modifiedPost = action.payload;
      const updatedPosts = state.posts.map((post) =>
        post.id === modifiedPost.id ? modifiedPost : post
      );

      return {
        posts: updatedPosts,
        isFetching: false,
        error: undefined,
      };
    }

    case PostsActionTypes.FETCH_POSTS_FAILURE:
    case PostsActionTypes.EDIT_POST_FAILURE: {
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    }

    default: {
      return state;
    }
  }
};

export default postsReducer;
