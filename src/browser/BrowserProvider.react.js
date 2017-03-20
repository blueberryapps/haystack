import React, { PropTypes as RPT } from 'react';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';
import createStore from '../common/createStore';

const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(window.REDUX_STATE || {}, { middlewares: [middleware] });

const BrowserProvider = ({ children }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {children}
    </ConnectedRouter>
  </Provider>
);

BrowserProvider.propTypes = {
  children: RPT.node.isRequired
};

export default BrowserProvider;
