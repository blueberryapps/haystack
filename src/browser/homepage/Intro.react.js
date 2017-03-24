import Button, { BUTTON_KIND_GHOST_LIGHT } from '../components/Button.react';
import Heading from '../components/heading/Heading.react';
import Container from '../components/Container.react';
import Expand from './intro/Expand.react';
import Radium from 'radium';
import React, { PureComponent } from 'react';
import SocialLinks from '../components/SocialLinks.react';
import translate from 'ts-translate';
import { colors, em, media, rem } from '../globals';

@translate()
@Radium
export default class Intro extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func
  }

  render() {
    const { msg } = this.props;

    return (
      <div>
        <Container style={styles.container}>
          <Heading style={styles.heading}>
            <small style={styles.heading.small}>{msg('intro.headingSmall')}</small>
            {msg('intro.headingWeb')}
            <span style={styles.heading.plus}> +</span>
            <strong style={styles.heading.strong}>{msg('intro.headingApp')}</strong>
          </Heading>
          <Button link="/contacts" id="introGetInTouch" kind={BUTTON_KIND_GHOST_LIGHT} style={styles.get}>
            {msg('intro.button')}
            {msg('Ahoj tohle je super stránka')}
          </Button>
          <SocialLinks style={styles.socials} />
          <Expand />
        </Container>
      </div>
    );
  }
}

const styles = {
  container: {
    wrapper: {
      minHeight: '100vh',
      paddingTop: rem(145),
      paddingBottom: rem(140),
      textAlign: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundColor: '#414141',
      backgroundImage: `url("${require('./images/intro.jpg')}")`,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      color: colors.white,
    },
    container: {
      marginTop: 0,
      marginBottom: 0,
    }
  },

  heading: {
    margin: '0 auto',
    maxWidth: em(820, 122),
    lineHeight: 0.79,
    letterSpacing: '3px',
    position: 'relative',
    color: colors.primary,
    small: {
      paddingRight: em(11, 30),
      paddingBottom: em(3, 30),
      width: em(435, 30),
      textAlign: 'right',
      fontSize: em(30, 122),
      lineHeight: '1.2',
      letterSpacing: '0.4px',
      display: 'inline-block',
      verticalAlign: 'middle',
      color: colors.white
    },
    plus: {
      paddingLeft: em(15, 122),
      display: 'inline-block',
      position: 'relative',
      top: em(4, 122)
    },
    strong: {
      fontSize: em(133, 122),
      fontWeight: 'inherit',
      display: 'inline-block'
    }
  },

  get: {
    marginTop: rem(38)
  },

  socials: {
    marginBottom: '128px',
    marginTop: '16px',
    [media.m]: {
      bottom: rem(34),
      marginBottom: '0',
      position: 'absolute',
      right: rem(30)
    }
  }
};
