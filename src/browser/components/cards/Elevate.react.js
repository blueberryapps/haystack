import Button, { BUTTON_KIND_GHOST_LIGHT } from '..//Button.react';
import Container from '../Container.react';
import Heading from '../heading/Heading.react';
import Label from './Label.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, media } from '../../globals';
import HideBox from '../HideBox.react';

@Radium
@translate('work.card.elevate')
export default class Elevate extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Container style={styles.container}>
        <HideBox col={0} sm={12} >
          <Label>{msg('label')}</Label>
        </HideBox>
        <div style={styles.content}>
          <Heading kind="h3" style={styles.heading}>
            {msg('heading')}
          </Heading>
          <p>{msg('intro')}</p>
          <Button
            link="/our-work/elevate-hd"
            kind={BUTTON_KIND_GHOST_LIGHT}
            blendColor={colors.elevate}
          >
            {msg('link')}
          </Button>
        </div>
        <HideBox col={0} sm={12} >
          <img src={require('./images/elevate-2.png')} style={styles.image} />
        </HideBox>
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
