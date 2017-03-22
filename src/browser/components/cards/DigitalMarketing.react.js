import Button, { BUTTON_KIND_GHOST_DARK } from '../Button.react';
import Container from '../../components/Container.react';
import Image from '../../components/Image.react';
import Label from './Label.react';
import Link from '../Link.react';
import listenWindowResize, { Device } from '../../../server/frontend/listenWindowResize.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { Heading, HeadingSmall, HeadingHighlight } from '../heading/';
import { em, media, colors } from '../../globals';

@listenWindowResize
@Radium
@translate()
export default class DigitalMarketing extends PureComponent {

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
            <Label reverse textColor="dark" lineColor="blue">{msg('services.digitalMarketing.label')}</Label>
          }
          <div style={styles.content}>
            <Heading kind="h3" style={styles.title}>
              <HeadingSmall style={styles.title.small}>
                {msg('services.digitalMarketing.heading.small')}
              </HeadingSmall>
              <span> {msg('services.digitalMarketing.heading.text_1')} </span>
              <HeadingHighlight>
                {msg('services.digitalMarketing.heading.text_2')}
              </HeadingHighlight>
            </Heading>
            <p>{msg('services.digitalMarketing.text')}</p>
            <Link id="digitalMarketing" to="/">
              <Button kind={BUTTON_KIND_GHOST_DARK} style={styles.button}>
                {msg('services.digitalMarketing.button')}
              </Button>
            </Link>
          </div>
          {device.atLeast('l') &&
            <Image src={require('./images/marketing_2.png')} style={styles.image} />
          }
        </Container>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    padding: '0 0 32px',
    [media.m]: {
      minHeight: '480px'
    }
  },

  button: {
    display: 'none', // REMOVE THIS TO ADD BUTTON
    fontSize: '1em'
  },

  container: {
    padding: '32px',
    position: 'relative',
    [media.l]: {
      padding: '128px 32px',
    }
  },

  content: {
    color: colors.black,
    display: 'inline-block',
    marginRight: '20%',
    position: 'relative',
    [media.m]: {
      maxWidth: '45%',
      minHeight: '320px',
      padding: '32px 0 32px 48px'
    }
  },

  headingBefore: {
    color: colors.black
  },

  title: {
    small: {
      small: {
        fontSize: em(25, 65),
        left: em(54, 25)
      },
      line: {
        marginLeft: em(10, 25),
        width: em(52, 25),
        top: em(9, 25)
      }
    }
  },

  image: {
    display: 'inline-block',
    width: '20%',
    zIndex: '1',
    [media.l]: {
      maxWidth: 'calc(50% + 260px)',
      top: '180px'
    }
  }
};
