import Radium from 'radium';
import React, { PropTypes as RPT } from 'react';

const ListUnstyledItem = ({ children }) => (
  <li style={styles.main}>
    {children}
  </li>
);

ListUnstyledItem.propTypes = {
  children: RPT.node
};

const styles = {
  main: {
    margin: '0 0 0.2em'
  }
};

export default Radium(ListUnstyledItem);
