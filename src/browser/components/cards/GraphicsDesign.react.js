import Button, { BUTTON_KIND_GHOST_LIGHT } from '../Button.react';
import Container from '../../components/Container.react';
import Heading from '../../components/heading/Heading.react';
import Image from '../../components/Image.react';
import Link from '../Link.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';
import HideBox from '../HideBox.react';

@Radium
@translate('services.weDesign.graphics')
export default class GraphicsDesign extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <div style={styles.wrapper}>
        <Container style={styles.container}>
          <HideBox col={0} sm={12} >
            <Image alt={msg('heading')} src={require('./images/WeDesignImg2.png')} style={styles.image} />
          </HideBox>
          <div style={styles.content}>
            <Heading
              id="weDesignHeadingGraphics"
              kind="h3"
            >
              {msg('heading')}
            </Heading>
            <p style={styles.text}>{msg('text')}</p>
            <Link id="graphicsDesign" to="/">
              <Button kind={BUTTON_KIND_GHOST_LIGHT} style={styles.button}>
                {msg('button')}
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
