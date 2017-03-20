import React, { PropTypes as RPT } from 'react';
import { Provider } from 'react-redux';
import createStore from '../common/createStore';

const store = createStore({});

const BrowserProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

BrowserProvider.propTypes = {
  children: RPT.node.isRequired
};

export default BrowserProvider;
