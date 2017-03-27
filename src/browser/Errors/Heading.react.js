import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import { colors, media } from '../globals';

@Radium
export default class Heading extends PureComponent {

  static propTypes = {
    blackTitle: RPT.string,
    blueTitle: RPT.string,
    subtitle: RPT.string,
    subtitleOffset: RPT.number
  }

  render() {
    const { blackTitle, blueTitle, subtitle, subtitleOffset } = this.props;

    return (
      <h1 style={styles.base}>
        {blackTitle} <span style={styles.blue}>{blueTitle}</span> <span style={[styles.subtitle, subtitleOffset && { paddingLeft: `${subtitleOffset}px` }]}>{subtitle}</span>
      </h1>
    );
  }
}
const styles = {
  base: {
    fontSize: '45px',
    width: '100%',
    margin: '0px 0px 70px 0px',
    lineHeight: 1,
    fontWeight: 600,
    color: colors.secondary,
    [media.s]: {
      fontSize: '60px',
    },
    [media.m]: {
      fontSize: '80px',
    },
    [media.l]: {
      fontSize: '92px',
    },
  },
  blue: {
    color: colors.primary
  },
  subtitle: {
    display: 'block',
    paddingLeft: '85px',
    marginTop: '-10px',
    fontSize: '30px',
    '@media screen and (max-width: 380px)': {
      paddingLeft: '30px',
      fontSize: '25px',
      marginTop: '-6px',
    }
  }
};
