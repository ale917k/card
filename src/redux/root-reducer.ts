import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import postsReducer from "./posts/reducer";
import userReducer from "./user/reducer";

/**
 * Configuration for persistance and rehydration.
 * Blacklist, throttle, debugging and other redux-persist goodies can be configured here.
 *
 * @see https://github.com/rt2zz/redux-persist/blob/master/docs/api.md#type-persistconfig
 */
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["posts", "user"],
};

/**
 * Main Redux root reducer.
 */
const rootReducer = combineReducers({
  posts: postsReducer,
  user: userReducer,
});

// Persist root reducer on local storage
export default persistReducer(persistConfig, rootReducer);
