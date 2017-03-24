import Button, { BUTTON_KIND_GHOST_LIGHT } from '../Button.react';
import Container from '../Container.react';
import Heading from '../heading/Heading.react';
import Image from '../Image.react';
import Label from './Label.react';
import Link from '../Link.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';
import HideBox from '../HideBox.react';

@Radium
@translate('work.card.meatandbones')
export default class MeatAndBones extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <div style={styles.wrapper}>
        <Container style={styles.container}>
          <HideBox col={0} sm={12} >
            <Label>{msg('label')}</Label>
          </HideBox>
          <div style={styles.content}>
            <Heading
              id="cardsMeatandbonesHeading"
              kind="h3"
            >
              {msg('heading')}
            </Heading>
            <p>{msg('intro')}</p>
            <Link id="detailMeatAndBones" to="/our-work/meat-and-bones">
              <Button kind={BUTTON_KIND_GHOST_LIGHT} blendColor="#6eb01e">
                {msg('link')}
              </Button>
            </Link>
          </div>
          <HideBox col={0} sm={12} >
            <Image alt={msg('heading')} src={require('./images/meatandbones.jpg')} style={styles.image} />
          </HideBox>
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
