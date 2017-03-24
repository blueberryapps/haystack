import Container from '../Container.react';
import Heading from '../heading/Heading.react';
import Image from '../Image.react';
import Label from './Label.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { media, colors } from '../../globals';
import HideBox from '../HideBox.react';

@Radium
@translate('services.weDevelop.backend')
export default class BackEnd extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <div style={styles.wrapper}>
        <Container style={styles.container}>
          <HideBox col={0} sm={12} >
            <Label textColor="dark" lineColor="blue" reverse>{msg('label')}</Label>
          </HideBox>
          <div style={styles.content}>
            <Heading
              id="weDevelopHeadingBack"
              kind="h3"
              style={styles.heading}
            >
              {msg('heading')}
            </Heading>
            <p style={styles.text}>{msg('text')}</p>
          </div>
          <HideBox col={0} sm={12} >
            <Image alt={msg('heading')} src={require('./images/WeDevelopImg1.png')} style={styles.image} />
          </HideBox>
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
