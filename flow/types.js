// @flow

// Imported Types
import type { Element } from 'react';

// Gloabls
declare var window: {
  '__REDUX_DEVTOOLS_EXTENSION__': () => Function,
};

// Reducers
declare type UIState = {
  fakeValue: boolean,
};

declare type StrictState = {
  ui: UIState,
};

// Redux
declare type State = any;
declare type Action = { type: string, payload?: any };
declare type AsyncAction = any;
declare type Reducer<S, A> = (state: S, action: A) => S;
declare type BaseDispatch = (a: Action) => Action;
declare type Dispatch = (a: Action | AsyncAction) => any;
declare type ActionCreator = (...args: any) => Action | AsyncAction;
declare type MiddlewareAPI = { dispatch: Dispatch, getState: () => State };
declare type Middleware = (api: MiddlewareAPI) => (next: Dispatch) => Dispatch;
declare type Store = {
  dispatch: Dispatch,
  getState: () => State,
  subscribe: (listener: () => void) => () => void,
  replaceReducer: (reducer: Reducer<any, any>) => void
};
declare type StoreCreator = (reducer: Reducer<any, any>, initialState: ?State, devTools: any) => Store;
declare type StoreEnhancer = (next: StoreCreator) => StoreCreator;
declare type ActionCreatorOrObjectOfACs = ActionCreator | { [key: string]: ActionCreator };
declare type Reducers = { [key: string]: Reducer<any, any> };
declare type MappedStateToProps = { [key: string]: any };
declare type MappedDispatchToProps = { [key: string]: Function };

// React
declare type StatelessComponent = Element<*>;
