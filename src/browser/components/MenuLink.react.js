import CustomLink from './Link.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { withRouter } from 'react-router';
import { colors, media } from '../globals';

@withRouter
@translate()
@Radium
export default class MenuLink extends PureComponent {

  static propTypes = {
    color: PropTypes.string,
    item: PropTypes.object,
    match: PropTypes.object.isRequired,
    msg: PropTypes.func.isRequired,
    onClick: PropTypes.func,
    scrolled: PropTypes.bool
  }

  isActive(to) {
    const { match } = this.props;

    return match.path === to;
  }

  render() {
    const { color, item, msg, onClick, scrolled } = this.props;
    const isActive = this.isActive(item.to);
    const isHovered = Radium.getState(this.state, 'menu-item', ':hover');
    const isWhiteColored = (color === colors.white);
    const isHomepageActive = isActive && item.to === '/';

    if (isHomepageActive) return null;

    return (
      <li
        id={`item_${item.key}`}
        key="menu-item"
        style={styles.item}
      >
        <CustomLink
          onClick={onClick}
          to={item.to}
          style={[
            styles.item.link,
            isWhiteColored && styles.item.whiteText,
            scrolled && styles.item.scrolled,
            isActive && styles.item.active,
          ]}
        >
          {msg(`menu.${item.key}`)}
          <span
            style={[
              styles.decorator.base,
              (isHovered || isActive) && styles.decorator.visible,
              isActive && styles.decorator.active
            ]}
          />
        </CustomLink>
      </li>
    );
  }
}

const styles = {
  item: {
    color: 'white',
    fontSize: '3em',
    fontWeight: '700',
    margin: '.15em 0',
    position: 'relative',
    ':hover': {},
    [media.m]: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      color: 'black',
      fontSize: '18px',
      fontWeight: 400,
      margin: '0px 5px'
    },
    link: {
      width: '100%',
      height: '100%',
      display: 'block',
      padding: '0 0 10px',
      [media.m]: {
        padding: '7px 10px'
      }
    },
    scrolled: {
      [media.m]: {
        color: colors.grayDarker,
        padding: '15px',
      }
    },
    whiteText: {
      [media.m]: {
        color: 'white',
      }
    }
  },
  decorator: {
    base: {
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '100%',
      height: '1px',
      backgroundColor: colors.grayLigter,
      opacity: 0,
      transition: 'height 0.3s, opacity 0.3s, transform 0.3s',
      transform: 'translateY(-10px)'
    },
    visible: {
      [media.m]: {
        height: '2px',
        opacity: 1,
        transform: 'translateY(0px)'
      }
    },
    active: {
      [media.m]: {
        backgroundColor: colors.primary
      }
    }
  }
};
