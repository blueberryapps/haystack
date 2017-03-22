import Radium from 'radium';
import React from 'react';

const ListUnstyledItem = ({ children }) => (
  <li style={styles.main}>
    {children}
  </li>
);

const styles = {
  main: {
    margin: '0 0 0.2em'
  }
};

export default Radium(ListUnstyledItem);
