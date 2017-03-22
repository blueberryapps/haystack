import Icon from './Icon.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, media } from '../globals';

@translate()
@Radium
export default class IconBox extends PureComponent {

  static propTypes = {
    centered: RPT.bool,
    column: RPT.number,
    heading: RPT.string,
    icon: RPT.string,
    text: RPT.string,
  }

  render() {
    const { centered, column, icon, heading, text } = this.props;

    return (
      <div style={[styles.wrapper, styles.wrapperWidth[column], centered && styles.centered.wrapper]}>
        <div style={[styles.holder, centered && styles.centered.holder]}>
          <Icon color={colors.primary} kind={icon} size={65} style={[styles.icon, centered && styles.centered.icon]} />
          <h3 style={[styles.heading, centered && styles.centered.heading]}>{heading}</h3>
          <p style={styles.paragraph}>{text}</p>
        </div>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    position: 'relative',
    padding: '0 30px 44px',
    fontSize: '18px'
  },
  wrapperWidth: {
    4: {
      width: '100%',
      [media.m]: {
        width: '50%',
      },
      [media.l]: {
        width: '33.3333%',
      }
    },
    6: {
      width: '100%',
      [media.m]: {
        width: '50%',
      }
    }
  },
  holder: {
    paddingLeft: '70px',
    position: 'relative',
    [media.m]: {
      paddingLeft: '127px',
    }
  },
  heading: {
    margin: '0 0 27px',
    fontWeight: '600',
    fontSize: 'inherit',
    color: colors.gray
  },
  paragraph: {
    color: colors.gray
  },
  icon: {
    maxWidth: '47px',
    position: 'absolute',
    top: '3px',
    left: 0,
    [media.m]: {
      maxWidth: 'none',
      top: '16px',
      left: '16px',
    }
  },
  centered: {
    wrapper: {
      textAlign: 'center'
    },
    holder: {
      paddingLeft: '0 !important'
    },
    heading: {
      color: colors.secondary
    },
    icon: {
      margin: '0 0 10px',
      position: 'static',
      display: 'inline-block'
    }
  }

};
