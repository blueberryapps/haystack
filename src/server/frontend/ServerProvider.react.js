import React, { PropTypes as RPT } from 'react';
import { StaticRouter } from 'react-router-dom';

const ServerProvider = ({ context, url, children }) => (
  <StaticRouter location={url} context={context} >
    {children}
  </StaticRouter>
);

ServerProvider.propTypes = {
  url: RPT.string.isRequired,
  context: RPT.shape({
    url: RPT.string,
    status: RPT.number
  }).isRequired,
  children: RPT.node.isRequired
};

export default ServerProvider;
