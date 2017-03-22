import Link from './Link.react';
import Logo from './Logo.react';
import Menu from './Menu.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import { colors } from '../globals';

@Radium
export default class Header extends PureComponent {

  static propTypes = {
    color: PropTypes.string
  }

  state = {
    hidden: false,
    lastScrollPosition: 0,
    scrolled: false,
    top: true
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { hidden, scrolled, top } = this.state;

    return nextState.hidden !== hidden || nextState.scrolled !== scrolled || nextState.top !== top;
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { lastScrollPosition } = this.state;

    const position = (document.documentElement.scrollTop || document.body.scrollTop);
    const direction = (position > lastScrollPosition ? 'down' : 'up');

    this.setState(Object.assign(
      position < 1 && { top: true },
      position > 350 && { top: false },
      {
        hidden: direction === 'down',
        scrolled: position > 80,
        lastScrollPosition: position
      }
    ));
  }

  render() {
    const { hidden, scrolled, top } = this.state;
    const color = top ? this.props.color || colors.white : colors.primary;
    return (
      <header
        style={[
          styles.header.base,
          hidden && styles.header.hidden,
          top && styles.header.top,
          (scrolled && top) && styles.header.scrolled
        ]}
      >
        <Link id="homeLink" to="/" style={styles.logo}>
          <Logo color={color} height="28" />
        </Link>
        <Menu color={color} scrolled={!top} />
      </header>
    );
  }
}

const styles = {
  header: {
    base: {
      width: '100%',
      position: 'fixed',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      left: 0,
      top: 0,
      transform: 'translate3d(0,0,0)',
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      boxShadow: '0px 1px 11px 0px rgba(0, 0, 0, 0.15)',
      transition: 'box-shadow 0s linear 0.3s, background-color 0s linear 0.3s, transform 0.3s ease-out',
      zIndex: '10'
    },
    hidden: {
      transform: 'translate3d(0, -100%, 0)',
      padding: 0
    },
    top: {
      padding: '30px 0 0',
      position: 'absolute',
      transform: 'translate3d(0, 0, 0)',
      backgroundColor: 'transparent',
      boxShadow: 'none',
      transition: 'padding 0.7s ease, box-shadow 0s linear 0s, background-color 0.3s linear 0s, transform 0.0s ease-out',
    },
    scrolled: {
      transform: 'translate3d(0, -100%, 0)'
    }
  },

  logo: {
    margin: '16px 0 14px 19px',
    display: 'inline-block'
  }
};
