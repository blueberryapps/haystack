import Button, { BUTTON_KIND_GHOST_LIGHT } from '../Button.react';
import Container from '../../components/Container.react';
import Heading from '../../components/heading/Heading.react';
import Image from '../../components/Image.react';
import Link from '../Link.react';
import listenWindowResize, { Device } from '../../../server/frontend/listenWindowResize.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';

@listenWindowResize
@Radium
@translate()
export default class GraphicsDesign extends PureComponent {

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
            <Image src={require('./images/WeDesignImg2.png')} style={styles.image} />
          }
          <div style={styles.content}>
            <Heading
              id="weDesignHeadingGraphics"
              kind="h3"
            >
              {msg('services.weDesign.graphics.heading')}
            </Heading>
            <p style={styles.text}>{msg('services.weDesign.graphics.text')}</p>
            <Link id="graphicsDesign" to="/">
              <Button kind={BUTTON_KIND_GHOST_LIGHT} style={styles.button}>
                {msg('services.weDesign.graphics.button')}
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
    backgroundColor: '#00A7D7',
    [media.m]: {
      marginRight: '10%',
      padding: '0 0 64px',
      minHeight: '480px'
    }
  },

  button: {
    display: 'none', // REMOVE THIS TO ADD BUTTON
    fontSize: '1em',
    marginTop: '100px',
    marginLeft: '-100px'
  },

  container: {
    position: 'relative',
    [media.s]: {
      marginLeft: '6%',
    },
    [media.m]: {
      padding: '32px 32px 0px 32px',
    }
  },

  content: {
    color: 'white',
    display: 'block',
    padding: '30px',
    [media.m]: {
      marginLeft: '50%',
      maxWidth: '45%',
      minHeight: '320px',
      padding: '32px 0 32px 48px'
    }
  },

  image: {
    maxHeight: '100%',
    maxWidth: 'calc(40% + 60px)',
    position: 'absolute',
    right: '50%',
    zIndex: '1'
  },

  text: {
    fontSize: '18px'
  }
};
