import Button, { BUTTON_KIND_GHOST_DARK } from '../Button.react';
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
export default class FrontEnd extends PureComponent {

  static propTypes = {
    cnt: PropTypes.func.isRequired,
    device: PropTypes.instanceOf(Device).isRequired,
    msg: PropTypes.func.isRequired
  }

  render() {
    const { device, msg, cnt } = this.props;

    return (
      <div style={styles.wrapper}>
        <Container style={styles.container}>
          {device.atLeast('l') &&
          <Label right textColor="dark" lineColor="blue" reverseText>{msg('services.weDevelop.frontend.label')}</Label>
            }
          {device.atLeast('l') &&
          <Image src={require('./images/WeDevelopImg2.png')} style={styles.image} />
            }
          <div style={styles.content}>
            <Heading
              id="weDevelopHeadingFront"
              kind="h3"
              style={styles.heading}
            >
              {msg('services.weDevelop.frontend.heading')}
            </Heading>
            <p style={styles.text}>{cnt('services.weDevelop.frontend.text')}</p>
            <Link id="fontEnd" to="/">
              <Button kind={BUTTON_KIND_GHOST_DARK} style={styles.button}>
                {msg('services.weDevelop.frontend.button')}
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
    [media.m]: {
      minHeight: '480px',
      marginRight: '10%',
      padding: '0 0 64px'
    }
  },

  container: {
    padding: '32px',
    position: 'relative',
    [media.s]: {
      marginLeft: '6%'
    }
  },

  content: {
    color: 'black',
    display: 'block',
    [media.m]: {
      marginLeft: '50%',
      maxWidth: '45%',
      minHeight: '320px',
      padding: '32px 0 32px 48px'
    }
  },

  button: {
    display: 'none', // REMOVE THIS TO ADD BUTTON
    fontSize: '1em'
  },

  heading: {
    fontWeight: '700'
  },

  image: {
    maxHeight: '70%',
    maxWidth: 'calc(40% + 260px)',
    position: 'absolute',
    right: '56%',
    top: '64px',
    zIndex: '1'
  },

  text: {
    fontSize: '18px'
  }
};
