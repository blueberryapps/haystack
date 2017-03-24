import Container from '../../components/Container.react';
import Heading from '../../components/heading/Heading.react';
import Image from '../../components/Image.react';
import Label from './Label.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';
import HideBox from '../HideBox.react';

@Radium
@translate('work.card.tcox')
export default class Tayllorcox extends PureComponent {

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
            <Heading kind="h3">{msg('heading')}</Heading>
            <p>{msg('intro')}</p>
          </div>
          <HideBox col={0} sm={12} >
            <Image alt={msg('heading')} src={require('./images/tayllorcox.png')} style={styles.image} />
          </HideBox>
        </Container>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    backgroundColor: '#c0252f',
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
    position: 'relative',
    [media.m]: {
      maxWidth: '45%',
      padding: '32px 0 32px 48px'
    }
  },

  image: {
    maxWidth: 'calc(50% + 420px)',
    position: 'absolute',
    left: '40%',
    top: '-96px',
    zIndex: '1'
  }
};
