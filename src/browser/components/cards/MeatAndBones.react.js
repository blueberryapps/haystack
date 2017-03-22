import Button, { BUTTON_KIND_GHOST_LIGHT } from '../Button.react';
import Container from '../Container.react';
import Heading from '../heading/Heading.react';
import Image from '../Image.react';
import Label from './Label.react';
import Link from '../Link.react';
import listenWindowResize, { Device } from '../../../server/frontend/listenWindowResize.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';

@listenWindowResize
@Radium
@translate()
export default class MeatAndBones extends PureComponent {

  static propTypes = {
    device: PropTypes.instanceOf(Device).isRequired,
    msg: React.PropTypes.func.isRequired
  }

  render() {
    const { device, msg } = this.props;

    return (
      <div style={styles.wrapper}>
        <Container style={styles.container}>
          {device.atLeast('l') &&
            <Label>{msg('work.card.meatandbones.label')}</Label>
          }
          <div style={styles.content}>
            <Heading
              id="cardsMeatandbonesHeading"
              kind="h3"
            >
              {msg('work.card.meatandbones.heading')}
            </Heading>
            <p>{msg('work.card.meatandbones.intro')}</p>
            <Link id="detailMeatAndBones" to="/our-work/meat-and-bones">
              <Button kind={BUTTON_KIND_GHOST_LIGHT} blendColor="#6eb01e">
                {msg('work.card.meatandbones.link')}
              </Button>
            </Link>
          </div>
          {device.atLeast('l') &&
            <Image src={require('./images/meatandbones.jpg')} style={styles.image} />
          }
        </Container>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    backgroundColor: '#6eb01e',
    padding: '0 0 32px',
    [media.m]: {
      minHeight: '480px'
    }
  },

  container: {
    padding: '32px',
    position: 'relative'
  },

  content: {
    color: 'white',
    display: 'block',
    [media.m]: {
      maxWidth: '45%',
      minHeight: '320px',
      padding: '32px 0 32px 48px'
    }
  },

  image: {
    maxHeight: '95%',
    maxWidth: 'calc(50% + 260px)',
    position: 'absolute',
    left: '50%',
    top: '32px',
    zIndex: '1'
  }
};
