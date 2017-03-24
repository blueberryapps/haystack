import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';

@Radium
export default class Hamburger extends PureComponent {

  static propTypes = {
    color: PropTypes.string,
    onClick: PropTypes.func,
    open: PropTypes.bool,
    style: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.object
    ])
  }

  static defaultProps = {
    color: 'white',
    open: false
  }

  render() {
    const { color, onClick, open, style } = this.props;

    return (
      <div id="hamburger" onClick={onClick} style={[styles.wrapper, style]}>
        <div
          style={[
            { backgroundColor: color },
            styles.line.base,
            styles.line.a,
            open && styles.line.open.base,
            open && styles.line.open.a
          ]}
        />
        <div
          style={[
            { backgroundColor: color },
            styles.line.base,
            styles.line.b,
            open && styles.line.open.base,
            open && styles.line.open.b
          ]}
        />
        <div
          style={[
            { backgroundColor: color },
            styles.line.base,
            styles.line.c,
            open && styles.line.open.base,
            open && styles.line.open.c
          ]}
        />
      </div>
    );
  }

}

const styles = {
  wrapper: {
    height: '32px',
    position: 'relative',
    width: '29px'
  },
  line: {
    base: {
      height: '3px',
      position: 'absolute',
      transition: '150ms ease-in-out',
      width: '29px'
    },
    a: {
      top: '4px'
    },
    b: {
      top: '14px'
    },
    c: {
      top: '24px'
    },
    open: {
      base: {
        backgroundColor: 'white'
      },
      a: {
        top: '14px',
        transform: 'rotate(45deg)'
      },
      b: {
        display: 'none'
      },
      c: {
        top: '14px',
        transform: 'rotate(-45deg)'
      }
    }
  }
};
