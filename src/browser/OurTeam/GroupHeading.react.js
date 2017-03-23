import React, { PropTypes as RPT } from 'react';
import translate from 'ts-translate';
import { colors } from '../globals';

const GroupHeading = ({ msg, name, position = 'left' }) => (
  <div id={name} style={[styles.base, styles[position]]}>
    <div style={styles.text}>
      {msg(`group.${name}`)}
      &nbsp;
    </div>
    <div style={styles.line} />
  </div>
);

GroupHeading.propTypes = {
  msg: RPT.func,
  name: RPT.string.isRequired,
  position: RPT.string
};

const styles = {
  base: {
    display: 'flex',
    fontSize: '2.5em',
    fontWeight: 600,
    minWidth: '360px',
    position: 'absolute',
    top: '16px'
  },
  left: {
    left: '-1.25em',
    transform: 'rotate(270deg) translateX(-100%)',
    transformOrigin: '0 0'
  },
  right: {
    right: '-1.25em',
    transform: 'rotate(90deg) translateX(100%)',
    transformOrigin: '100% 0'
  },
  line: {
    backgroundColor: colors.primary,
    flex: '1 0 auto',
    height: '2px',
    marginTop: '.7em',
    minWidth: '100px'
  },
  text: {
    display: 'block',
    flex: '0 0 auto'
  }
};

const TranslatedGroupHeading = translate('team')(GroupHeading);

export default TranslatedGroupHeading;
