import Radium from 'radium';
import React, { PropTypes as RPT } from 'react';

const ListUnstyled = ({ children, style }) => (
  <ul style={[styles.main, style]}>
    {children}
  </ul>
);

ListUnstyled.propTypes = {
  children: RPT.node,
  style: RPT.object
};

const styles = {
  main: {
    margin: '0 0 1em',
    padding: 0,
    listStyle: 'none'
  }
};

export default Radium(ListUnstyled);
