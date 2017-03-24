import Radium from 'radium';
import React, { PropTypes as RPT } from 'react';
import { colors, em } from '../../globals';

const HeadingSmall = ({ children, style }) => (
  <small style={[styles.main, style && style.small]}>
    <span style={styles.inner}>
      {children}
      <span style={[styles.line, style && style.line]} />
    </span>
  </small>
);

HeadingSmall.propTypes = {
  children: RPT.node,
  style: RPT.object
};

const styles = {
  main: {
    fontSize: em(23, 91),
    letterSpacing: em(0.2, 23),
    textAlign: 'left',
    display: 'block',
    position: 'relative'
  },
  inner: {
    display: 'inline-block',
    position: 'relative'
  },
  line: {
    height: '3px',
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '100%',
    background: colors.primary
  }
};

export default Radium(HeadingSmall);