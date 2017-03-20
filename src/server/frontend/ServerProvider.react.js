import React, { PropTypes as RPT } from 'react';
import { Provider } from 'react-redux';

const ServerProvider = ({ store, children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

ServerProvider.propTypes = {
  children: RPT.node.isRequired,
  store: RPT.shape({
    getState: RPT.func,
    dispatch: RPT.func,
  }).isRequired
};

export default ServerProvider;
