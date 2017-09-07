// @flow

// Libraries
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

// Reducers
import rootReducer from "./rootReducer";

// Sagas
import initSaga from "./sagas/init";
import createBeeSaga from "./sagas/bees/createBee";
import fetchBeesSaga from "./sagas/bees/fetchBees";
import removeAllBeesSaga from "./sagas/bees/removeAllBees";
import removeBeeSaga from "./sagas/bees/removeBee";

export const combinedSagas = () => [
  initSaga,
  createBeeSaga,
  fetchBeesSaga,
  removeAllBeesSaga,
  removeBeeSaga
];

export const registerSagas = (sagaMiddleware, sagas) =>
  sagas.forEach(sagaMiddleware.run);

/**
 * Configures the initialization of a React store, applying middleware, and interfacing with
 * tooling.
 *
 * @param  {State} initialState State object generated from indexed reducers.
 * @returns {Store} Generates an enhanced Redux Store.
 */
export const configureStore = (initialState: ?State): Store => {
  // Create saga middleware
  const sagaMiddleware = createSagaMiddleware();
  // Create a function that can apply the saga middleware to a StoreCreator
  const sagaStoreEnhancer: StoreEnhancer = applyMiddleware(sagaMiddleware);
  // Create a function that can create a store with the new middleware
  const createStoreWithMiddleWare: StoreCreator = sagaStoreEnhancer(
    createStore
  );
  // Determine whether debug mode should be attached
  const reduxDevTools: Function | void = window.__REDUX_DEVTOOLS_EXTENSION__;
  const debug: Function =
    typeof reduxDevTools === "function" ? reduxDevTools() : a => a;
  // Actually create the store with the new middleware
  const store: Store = createStoreWithMiddleWare(
    rootReducer,
    initialState,
    debug
  );
  // Register all sagas with middleware
  registerSagas(sagaMiddleware, combinedSagas());
  return store;
};

export default configureStore;
