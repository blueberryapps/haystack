import Container from '../../components/Container.react';
import Heading from '../../components/heading/Heading.react';
import Image from '../../components/Image.react';
import Label from './Label.react';
import listenWindowResize, { Device } from '../../../server/frontend/listenWindowResize.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';

@listenWindowResize
@Radium
@translate()
export default class Tayllorcox extends PureComponent {

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
            <Label>{msg('work.card.tcox.label')}</Label>
          }
          <div style={styles.content}>
            <Heading kind="h3">{msg('work.card.tcox.heading')}</Heading>
            <p>{msg('work.card.tcox.intro')}</p>
          </div>
          {device.atLeast('l') &&
            <Image src={require('./images/tayllorcox.png')} style={styles.image} />
          }
        </Container>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    backgroundColor: '#c0252f',
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
    position: 'relative',
    [media.m]: {
      maxWidth: '45%',
      padding: '32px 0 32px 48px'
    }
  },

  image: {
    maxWidth: 'calc(50% + 420px)',
    position: 'absolute',
    left: '40%',
    top: '-96px',
    zIndex: '1'
  }
};
