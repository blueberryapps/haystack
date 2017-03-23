import Button, { BUTTON_KIND_GHOST_DARK } from '../Button.react';
import Container from '../../components/Container.react';
import Heading from '../../components/heading/Heading.react';
import Image from '../../components/Image.react';
import Label from './Label.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';
import HideBox from '../HideBox.react';

@Radium
@translate()
export default class Zaplo extends PureComponent {

  static propTypes = {
    msg: PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Image src={require('./images/orangebg.jpg')} style={styles.wrapper}>
        <Container style={styles.container}>
          <HideBox col={0} sm={12} >
            <Label dark right>{msg('work.card.zaplo.label')}</Label>
            <img src={require('./images/zaplo-2.png')} style={styles.image} />
          </HideBox>
          <div style={styles.content}>
            <Heading id="cardsZaploHeading" kind="h2">
              {msg('work.card.zaplo.heading')}
            </Heading>
            <p>{msg('work.card.zaplo.intro')}</p>
            <p>
              <Button link="/our-work/zaplo-dk" kind={BUTTON_KIND_GHOST_DARK} blendColor="#f7b000">
                {msg('work.card.zaplo.link')}
              </Button>
            </p>
          </div>
        </Container>
      </Image>
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

  container: {
    padding: '32px',
    position: 'relative'
  },

  content: {
    display: 'block',
    position: 'relative',
    [media.m]: {
      marginLeft: '50%',
      minHeight: '380px',
      padding: '32px 48px 32px 0'
    }
  },

  image: {
    maxWidth: '100%',
    position: 'absolute',
    right: '55%',
    top: '-130px',
    zIndex: '1',
    filter: 'drop-shadow(12px 43px 50px rgba(0, 0, 0, 0.4))',
  }
};
