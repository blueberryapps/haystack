import Button from '..//Button.react';
import Container from '../../components/Container.react';
import Heading from '../../components/heading/Heading.react';
import Image from '../../components/Image.react';
import Label from './Label.react';
import Link from '../Link.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';
import HideBox from '../HideBox.react';

@Radium
@translate('work.card.itsounds')
export default class ItSounds extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <div style={styles.wrapper}>
        <Container style={styles.container}>
          <HideBox col={0} sm={12} >
            <Label right>{msg('label')}</Label>
            <Image alt={msg('heading')} src={require('./images/itsounds.png')} style={styles.image} />
          </HideBox>
          <div style={styles.content}>
            <Heading kind="h3" id="cardsItSoundsHeading">{msg('heading')}</Heading>
            <p>{msg('intro')}</p>
            <Link id="detailItsounds" to="/our-work/it-sounds">
              <Button kind="ghost_light">
                {msg('link')}
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
