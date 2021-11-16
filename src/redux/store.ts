import { createStore, applyMiddleware, Middleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

/*
|--------------------------------------------------------------------------
| Redux store creation and connection with middlewares and persistor
|--------------------------------------------------------------------------
*/

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
