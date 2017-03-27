import color from 'color';
import Heading from '../../components/heading/Heading.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, media, rem } from '../../globals';

@translate()
@Radium
export default class Workplace extends PureComponent {

  static propTypes = {
    content: PropTypes.object,
    heading: PropTypes.bool,
    msg: PropTypes.func.isRequired
  }

  static defaultProps = {
    heading: false
  }

  handleClick = () => {
    const { content: { src, target } } = this.props;

    window.open(src, target);
  }

  render() {
    const {
      content: {
        additionalContent: Content,
        img,
        key
      },
      heading,
      msg
    } = this.props;

    return (
      <div
        key={key}
        style={[
          styles.location,
          { backgroundImage: `url(${img})` },
          heading && styles.locationWithHeading
        ]}
      >
        <div onClick={this.handleClick} style={[styles.locationLink]}>
          <div key={`${key}Hover`} style={styles.hover} />
          {!heading && <p style={[styles.text, styles.subheading]}>
            {msg('locations.office')}
          </p>}
          <Heading kind="h3" style={[styles.text, styles.heading]}>
            {msg(`locations.${key}.heading`)}
          </Heading>
          <p style={[styles.text, styles.city]}>
            {msg(`locations.${key}.city`)}
          </p>
          <p style={[styles.text, styles.address]}>
            {msg(`locations.${key}.street`)}
            <br />
            {msg(`locations.${key}.zip`)}
          </p>
          <p style={styles.additional}>
            {Content && <Content />}
          </p>
        </div>
      </div>
    );
  }
}

const styles = {
  location: {
    padding: `${rem(48)} 0`,
    position: 'relative',
    textAlign: 'center',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    [media.m]: {
      width: '33.333%',
      alignItems: 'center',
      display: 'flex',
      flex: '1 1 auto',
      flexDirection: 'column',
      justifyContent: 'center',
    }
  },
  locationWithHeading: {
    [media.m]: {
      padding: '180px 0 48px'
    }
  },
  locationLink: {
    height: '100%',
    width: '100%',
    display: 'block',
    [media.m]: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    }
  },
  hover: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    background: 'transparent',
    zIndex: 0,
    transition: 'background 0.1s ease',
    ':hover': {
      backgroundColor: color(colors.primary).alpha(0.5),
      cursor: 'pointer'
    }
  },
  text: {
    pointerEvents: 'none',
    zIndex: 1
  },
  subheading: {
    marginBottom: rem(7)
  },
  heading: {
    marginTop: 0,
    marginBottom: 0,
    maxWidth: '100%',
    fontSize: `${rem(50)} !important`,
    color: 'inherit',
  },
  city: {
    marginBottom: rem(13),
    fontSize: rem(30),
  },
  address: {
    fontSize: rem(25)
  },
  additional: {
    margin: 0,
    height: 0
  }
};
