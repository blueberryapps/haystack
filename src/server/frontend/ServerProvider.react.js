import React, { PropTypes as RPT } from 'react';
import { Provider } from 'mobx-react';

const ServerProvider = ({ children, stores }) => (
  <Provider {...stores}>
    {children}
  </Provider>
);

ServerProvider.propTypes = {
  children: RPT.node.isRequired,
  stores: RPT.shape({
    sample: RPT.shape({
      count: RPT.number.isRequired,
      plus: RPT.func.isRequired,
      minus: RPT.func.isRequired,
    }).isRequired
  }).isRequired
};

export default ServerProvider;
