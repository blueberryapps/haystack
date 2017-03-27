import { applyMiddleware, createStore as createReduxStore, compose, combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import { reducer as onionForm } from 'onion-form';
import { translationReducer as translate } from 'ts-translate';
import contactForm from './contactForm/reducer';
import career from './Career/reducer';
import { promiseMiddleware } from './midlewares/promiseMiddleware';
import injectDependencies from './midlewares/injectDependencies';

const createStore = (initialState = {}, { middlewares = [] }) => {
  const reducers = {
    career,
    contactForm,
    onionForm,
    router,
    translate
  };

  const customMiddlewares = applyMiddleware(injectDependencies(), promiseMiddleware, ...middlewares);

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
