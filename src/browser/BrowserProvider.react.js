import React, { PropTypes as RPT } from 'react';
import { Provider } from 'mobx-react';
import createStores from '../common/createStores';

const stores = createStores(window.MOBX_STATE);

let AppRoot = null;

// Use mobx-react-devtools in dev build
if (process.env.APP_ENV === 'development') {
  const DevTools = require('mobx-react-devtools').default; // eslint-disable-line import/no-extraneous-dependencies, global-require

  AppRoot = children => (
    <div>
      {children}
      <DevTools />
    </div>
  );
} else {
  AppRoot = children => children;
}

const BrowserProvider = ({ children }) => (
  <Provider {...stores}>
    {AppRoot(children)}
  </Provider>
);

BrowserProvider.propTypes = {
  children: RPT.node.isRequired
};

export default BrowserProvider;
