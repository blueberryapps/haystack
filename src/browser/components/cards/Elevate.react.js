import Button, { BUTTON_KIND_GHOST_LIGHT } from '..//Button.react';
import Container from '../Container.react';
import Heading from '../heading/Heading.react';
import Label from './Label.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, media } from '../../globals';

@Radium
@translate()
export default class Elevate extends PureComponent {

  static propTypes = {
    msg: PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Container style={styles.container}>
        <div>
          <h1>TODO: SHOULD BE OPNLY IN LARGE</h1>
          <Label>{msg('work.card.elevate.label')}</Label>
        </div>
        <div style={styles.content}>
          <Heading kind="h3" style={styles.heading}>
            {msg('work.card.elevate.heading')}
          </Heading>
          <p>{msg('work.card.elevate.intro')}</p>
          <Button
            link="/our-work/elevate-hd"
            kind={BUTTON_KIND_GHOST_LIGHT}
            blendColor={colors.elevate}
          >
            {msg('work.card.elevate.link')}
          </Button>
        </div>
        <div>
          <h1>TODO: SHOULD BE OPNLY IN LARGE</h1>
          <img src={require('./images/elevate-2.png')} style={styles.image} />
        </div>
      </Container>
    );
  }

}

const styles = {
  container: {
    wrapper: {
      background: colors.elevate
    }
  },

  content: {
    display: 'block',
    color: 'white',
    position: 'relative',
    [media.m]: {
      maxWidth: '45%',
      padding: '32px 0 32px 48px'
    }
  },

  heading: {
    color: 'inherit'
  },

  image: {
    maxWidth: 'calc(50% + 260px)',
    position: 'absolute',
    right: '-300px',
    top: '-100px',
    pointerEvents: 'none',
    zIndex: 1,
    filter: 'drop-shadow(12px 43px 50px rgba(0, 0, 0, 0.4))'
  }
};
