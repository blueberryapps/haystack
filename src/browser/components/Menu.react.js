import Hamburger from './Hamburger.react';
import MenuLink from './MenuLink.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../globals';

const items = [
  {
    key: 'home',
    to: '/'
  },
  {
    key: 'services',
    to: '/services'
  },
  {
    key: 'work',
    to: '/our-work'
  },
  {
    key: 'team',
    to: '/our-team'
  },
  {
    key: 'career',
    to: '/career'
  },
  {
    key: 'history',
    to: '/history'
  },
  {
    key: 'contact',
    to: '/contacts'
  }
];

@translate()
@Radium
export default class Menu extends PureComponent {

  static propTypes = {
    color: PropTypes.string,
    scrolled: PropTypes.bool
  }

  static defaultProps = {
    color: 'white'
  }

  state = {
    open: false,
    toggling: false
  }

  handleBurgerClick = () => {
    const { open } = this.state;

    this.setState({ toggling: true });
    this.setState({ open: !open });
    setTimeout(() => {
      this.setState({ toggling: false });
    }, 300);
  }

  handleItemClick = () => {
    this.setState({ open: false });
  }

  render() {
    const { color, scrolled } = this.props;
    const { open, toggling } = this.state;

    return (
      <div>
        <Hamburger
          color={color}
          onClick={this.handleBurgerClick}
          open={open}
          style={styles.hamburger}
        />
        <ul
          id="menuList"
          style={[
            styles.menu.base,
            toggling && styles.menu.toggling,
            open && styles.menu.opened,
            scrolled && styles.menu.scrolled
          ]}
        >
          {items.map(item =>
            <MenuLink
              key={item.key}
              item={item}
              onClick={this.handleItemClick}
              scrolled={scrolled}
              color={color}
            />
          )}
        </ul>
      </div>
    );
  }
}

const styles = {
  hamburger: {
    cursor: 'pointer',
    position: 'absolute',
    right: '30px',
    bottom: '13px',
    zIndex: 20,
    [media.m]: {
      display: 'none'
    }
  },

  menu: {
    base: {
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, .85)',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      left: '-99999px',
      justifyContent: 'center',
      listStyle: 'none',
      margin: 0,
      padding: '1px',
      position: 'fixed',
      textAlign: 'center',
      top: 0,
      width: '100vw',
      zIndex: 10,
      transition: 'none',
      opacity: 0,
      [media.m]: {
        left: 0,
        opacity: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        position: 'relative',
        background: 'none',
        marginRight: '19px',
        width: 'auto',
        height: 'auto'
      }
    },
    toggling: {
      transition: 'opacity .3s, left 0s .3s'
    },
    scrolled: {
      [media.m]: {
        top: 0
      }
    },
    opened: {
      opacity: 1,
      left: 0,
      transition: 'opacity .3s'
    }
  },
};
