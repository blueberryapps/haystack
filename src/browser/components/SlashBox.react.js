import Icon from './Icon.react';
import Radium from 'radium';
import React, { PropTypes as RPT } from 'react';
import { colors, media } from '../globals';

const SlashBox = ({ children, place, style }) => (
  <div style={[styles.main, style]}>
    <div style={styles.left}>
      <span style={styles.slash} />
      {children}
    </div>
    <div style={styles.right}>
      <p style={styles.right.content}>
        <Icon color={colors.secondary} kind="pin" size={36} style={styles.icon} />
        {place}
      </p>
    </div>
  </div>
);

SlashBox.propTypes = {
  children: RPT.node,
  place: RPT.string,
  style: RPT.object
};

const styles = {
  main: {
    fontSize: '18px',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  left: {
    position: 'relative',
    color: colors.gray,
    [media.m]: {
      padding: '0 55px 0 0',
      width: '72%',
    }
  },
  right: {
    fontWeight: '600',
    color: colors.secondary,
    [media.m]: {
      padding: '0 0 0 66px',
      width: '28%'
    },
    content: {
      padding: '0 0 0 44px',
      position: 'relative',
    }
  },
  slash: {
    [media.m]: {
      width: '3px',
      display: 'block',
      position: 'absolute',
      top: '1em',
      right: 0,
      bottom: '1em',
      background: colors.primary,
      transform: 'rotate(18deg)'
    }
  },
  icon: {
    position: 'absolute',
    left: '-5px',
    top: '-6px'
  }
};

export default Radium(SlashBox);
