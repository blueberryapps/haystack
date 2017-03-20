import React, { PropTypes as RPT } from 'react';
import { BrowserRouter } from 'react-router-dom';

const BrowserProvider = ({ children }) => (
  <BrowserRouter>
    {children}
  </BrowserRouter>
);

BrowserProvider.propTypes = {
  children: RPT.node.isRequired
};

export default BrowserProvider;
