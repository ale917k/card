import { DefaultAction } from "models/store";

import UserActionTypes, { UserAction, UserReducer } from "./types";

/**
 * Initial user store shape when main store is empty.
 */
const INITIAL_STATE = {
  user: {
    likes: [],
  },
  isFetching: false,
  error: undefined,
};

/**
 * Reducer handling slice of store with user.
 *
 * @param state - User state to update
 * @param action - Redux action to trigger
 * @returns Updated user store
 */
const userReducer = (
  state: UserReducer = INITIAL_STATE,
  action: UserAction | DefaultAction = { type: undefined }
): UserReducer => {
  switch (action.type) {
    case UserActionTypes.TOGGLE_LIKE_START: {
      return {
        ...state,
        isFetching: true,
      };
    }

    case UserActionTypes.TOGGLE_LIKE_SUCCESS: {
      return {
        isFetching: false,
        user: {
          ...state.user,
          likes: [...action.payload],
        },
        error: undefined,
      };
    }

    case UserActionTypes.TOGGLE_LIKE_FAILURE: {
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

export default userReducer;
