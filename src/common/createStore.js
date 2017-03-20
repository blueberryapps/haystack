import { applyMiddleware, createStore as createReduxStore, compose, combineReducers } from 'redux';

const emptyReducer = (state = {}) => state;

const createStore = ({ initialState }) => {
  const reducers = { emptyReducer };
  const middlewares = applyMiddleware();

  const allMiddlewares = process.env.IS_BROWSER && window.devToolsExtension
    ? compose(middlewares, window.devToolsExtension())
    : middlewares;

  return createReduxStore(
    combineReducers(reducers),
    initialState,
    allMiddlewares
  );
};

export default createStore;
