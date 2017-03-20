import { applyMiddleware, createStore as createReduxStore, compose, combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

const createStore = (initialState = {}, { middlewares = [] }) => {
  const reducers = {
    router
  };

  const customMiddlewares = applyMiddleware(...middlewares);

  const allMiddlewares = process.env.IS_BROWSER && window.devToolsExtension
    ? compose(customMiddlewares, window.devToolsExtension())
    : customMiddlewares;

  return createReduxStore(
    combineReducers(reducers),
    initialState,
    allMiddlewares
  );
};

export default createStore;
