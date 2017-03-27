import Radium from 'radium';
import React, { PropTypes as RPT } from 'react';
import { StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Provider as TranslateProvider } from 'ts-translate';

const ServerProvider = ({ context, url, children, store }) => (
  <Provider store={store}>
    <TranslateProvider>
      <StaticRouter location={url} context={context} >
        {children}
      </StaticRouter>
    </TranslateProvider>
  </Provider>
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

export default Radium(ServerProvider);
