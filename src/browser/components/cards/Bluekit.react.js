import Container from '../../components/Container.react';
import Heading from '../../components/heading/Heading.react';
import Image from '../../components/Image.react';
import Label from './Label.react';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';
import HideBox from '../HideBox.react';

@translate('work.card.bluekit')
export default class Bluekit extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Image src={require('./images/bluebg.jpg')} style={styles.wrapper}>
        <Container style={styles.container}>
          <HideBox col={0} sm={12} >
            <Label>{msg('label')}</Label>
          </HideBox>
          <div style={styles.content}>
            <Heading kind="h3">{msg('heading')}</Heading>
            <p>{msg('intro')}</p>
          </div>
          <HideBox col={0} sm={12} >
            <Image src={require('./images/bluekit.png')} style={styles.image} />
          </HideBox>
        </Container>
      </Image>
    );
  }

}

const styles = {
  wrapper: {
    [media.m]: {
      minHeight: '500px'
    }
  },

  container: {
    padding: '32px',
    position: 'relative',
    [media.m]: {
      padding: '64px 32px'
    }
  },

  image: {
    right: '-400px',
    position: 'absolute',
    top: '-100px',
    maxWidth: 'calc(50% + 500px)'
  },

  content: {
    color: 'white',
    padding: '32px 0',
    [media.m]: {
      padding: '32px 0 32px 48px',
      width: '50%'
    }
  },

  link: {
    fontSize: '1.25em',
    fontWeight: '300',
    marginTop: '2em'
  }
};
