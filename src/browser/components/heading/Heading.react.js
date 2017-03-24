import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import { colors, em, media, rem } from '../../globals';

@Radium
export default class Heading extends PureComponent {

  static propTypes = {
    bolder: PropTypes.bool,
    children: PropTypes.any.isRequired,
    id: PropTypes.string,
    kind: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'super']).isRequired,
    style: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.object
    ]),
  }

  static defaultProps = {
    kind: 'h1'
  }

  render() {
    const { bolder, id, children, kind: Element, style } = this.props;
    const HeadingComponent = Element === 'super' ? 'h3' : Element;

    return (
      <HeadingComponent
        id={id}
        style={[
          styles.base,
          bolder && styles.bolder,
          styles[Element],
          style
        ]}
      >
        <span style={styles.span}>
          {children}
        </span>
      </HeadingComponent>
    );
  }
}

const styles = {
  base: {
    marginTop: 0,
    marginBottom: 0,
    fontWeight: '600',
    lineHeight: '1',
    color: colors.secondary
  },

  bolder: {
    fontWeight: 700
  },

  span: {
    display: 'inline-block'
  },

  h1: {
    fontSize: rem(91),
    lineHeight: '0.8',
    [media.s]: {
      fontSize: rem(122),
    }
  },

  h2: {
    marginBottom: em(26, 91),
    fontSize: rem(91),
    lineHeight: 0.9,
    letterSpacing: em(0.5, 91),
    [media.s]: {
      fontSize: rem(91),
    }
  },

  h3: {
    fontSize: rem(65),
    [media.s]: {
      fontSize: rem(65)
    }
  },

  h4: {
    fontSize: rem(40),
  },

  h5: {
    fontSize: '1.75em',
    [media.s]: {
      fontSize: '2em',
    }
  },

  h6: {
    marginTop: 0,
    marginBottom: '1em',
    fontSize: '1em'
  },
  super: {
    marginTop: 0,
    marginBottom: 0,
    fontWeight: 700,
    fontSize: rem(140),
    lineHeight: 0.83,
    textAlign: 'center'
  }
};
