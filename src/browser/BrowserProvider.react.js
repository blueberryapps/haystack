import React, { PropTypes as RPT } from 'react';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import { Provider as TranslateProvider } from 'ts-translate';
import createStore from '../common/createStore';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(window.REDUX_STATE || {}, { middlewares: [middleware] });

const BrowserProvider = ({ children }) => (
  <Provider store={store}>
    <TranslateProvider>
      <ConnectedRouter history={history}>
        {children}
      </ConnectedRouter>
    </TranslateProvider>
  </Provider>
);

BrowserProvider.propTypes = {
  children: RPT.node.isRequired
};

export default BrowserProvider;
