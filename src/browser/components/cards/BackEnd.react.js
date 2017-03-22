import Container from '../Container.react';
import Heading from '../heading/Heading.react';
import Image from '../Image.react';
import Label from './Label.react';
import listenWindowResize, { Device } from '../../../server/frontend/listenWindowResize.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { media, colors } from '../../globals';

@listenWindowResize
@Radium
@translate()
export default class BackEnd extends PureComponent {

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
            <Label textColor="dark" lineColor="blue" reverse>{msg('services.weDevelop.backend.label')}</Label>
          }
          <div style={styles.content}>
            <Heading
              id="weDevelopHeadingBack"
              kind="h3"
              style={styles.heading}
            >
              {msg('services.weDevelop.backend.heading')}
            </Heading>
            <p style={styles.text}>{msg('services.weDevelop.backend.text')}</p>
          </div>
          {device.atLeast('l') &&
            <Image src={require('./images/WeDevelopImg1.png')} style={styles.image} />
          }
        </Container>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    [media.m]: {
      marginLeft: '10%',
      minHeight: '480px',
      padding: '0 0 64px'
    }
  },

  container: {
    padding: '32px',
    position: 'relative',
    [media.s]: {
      marginRight: '6%'
    }
  },

  content: {
    color: colors.black,
    display: 'block',
    [media.m]: {
      maxWidth: '45%',
      minHeight: '320px',
      padding: '32px 0 32px 48px'
    }
  },

  heading: {
    fontWeight: '700'
  },

  image: {
    left: '56%',
    maxHeight: '70%',
    maxWidth: 'calc(40% + 260px)',
    position: 'absolute',
    top: '96px',
    zIndex: '1'
  },

  text: {
    fontSize: '18px'
  }
};
