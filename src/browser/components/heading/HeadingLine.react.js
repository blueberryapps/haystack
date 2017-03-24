import Radium from 'radium';
import React, { PropTypes as RPT } from 'react';
import { colors } from '../../globals';

const HeadingLine = ({ style }) => (
  <span style={[styles.main, style && style]}>
    <span style={[styles.circle, styles.circle.top]} />
    <span style={[styles.circle, styles.circle.bottom]} />
  </span>
);

HeadingLine.propTypes = {
  style: RPT.object
};

const styles = {
  main: {
    marginTop: '80px',
    marginRight: 'auto',
    marginBottom: '65px',
    marginLeft: 'auto',
    width: '1px',
    height: '315px',
    display: 'block',
    position: 'relative',
    background: colors.grayLighter
  },
  circle: {
    width: '11px',
    height: '11px',
    display: 'block',
    position: 'absolute',
    left: '-5px',
    borderRadius: '50%',
    background: colors.grayLighter,
    top: {
      top: 0
    },
    bottom: {
      bottom: 0
    }
  }
};

export default Radium(HeadingLine);
