// @flow

// Libraries
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import rootReducer from '../reducers';

/**
 * Configures the initialization of a React store, applying middleware, and interfacing with
 * tooling.
 *
 * @param  {State} initialState State object generated from indexed reducers.
 * @returns {Store} Generates an enhanced Redux Store.
 */
const configureStore = (initialState: ?State): Store => {
  // Create a function that can apply the thunk middleware to a StoreCreator
  const thunkStoreEnhancer: StoreEnhancer = applyMiddleware(thunk);
  // Create a function that can create a store with the new middleware
  const createStoreWithMiddleWare: StoreCreator = thunkStoreEnhancer(createStore);
  // Determine whether debug mode should be attached
  const reduxDevTools: Function | void = window.__REDUX_DEVTOOLS_EXTENSION__;
  const debug: Function = typeof reduxDevTools === 'function' ? reduxDevTools() : <T>(a: T): T => a;
  // Actually create the store with the new middleware
  const store: Store = createStoreWithMiddleWare(rootReducer, initialState, debug);
  return store;
};

export default configureStore;
