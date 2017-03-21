import { applyMiddleware, createStore as createReduxStore, compose, combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as onionForm } from 'onion-form';

const createStore = (initialState = {}, { middlewares = [] }) => {
  const reducers = {
    onionForm,
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
