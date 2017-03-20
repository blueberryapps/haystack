import React, { PropTypes as RPT } from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const ServerProvider = ({ context, url, children, store }) => (
  <StaticRouter location={url} context={context} >
    <Provider store={store}>
      {children}
    </Provider>
  </StaticRouter>
);

ServerProvider.propTypes = {
  url: RPT.string.isRequired,
  context: RPT.shape({
    url: RPT.string,
    status: RPT.number
  }).isRequired,
  children: RPT.node.isRequired,
  store: RPT.shape({
    getState: RPT.func,
    dispatch: RPT.func,
  }).isRequired
};

export default ServerProvider;
