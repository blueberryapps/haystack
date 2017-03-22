import Button from '..//Button.react';
import Container from '../../components/Container.react';
import Heading from '../../components/heading/Heading.react';
import Image from '../../components/Image.react';
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
export default class ItSounds extends PureComponent {

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
            <Label right>{msg('work.card.itsounds.label')}</Label>
          }
          {device.atLeast('l') &&
            <Image src={require('./images/itsounds.png')} style={styles.image} />
          }
          <div style={styles.content}>
            <Heading kind="h3" id="cardsItSoundsHeading">{msg('work.card.itsounds.heading')}</Heading>
            <p>{msg('work.card.itsounds.intro')}</p>
            <Link id="detailItsounds" to="/our-work/it-sounds">
              <Button kind="ghost_light">
                {msg('work.card.itsounds.link')}
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    backgroundColor: '#292929',
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
      marginLeft: '50%',
      padding: '48px 48px 48px 0'
    }
  },

  image: {
    maxWidth: 'calc(45%)',
    position: 'absolute',
    right: '55%',
    top: '10px',
    zIndex: '1'
  }
};
