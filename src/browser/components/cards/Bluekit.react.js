import Container from '../../components/Container.react';
import Heading from '../../components/heading/Heading.react';
import Image from '../../components/Image.react';
import Label from './Label.react';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';

@translate()
export default class Bluekit extends PureComponent {

  static propTypes = {
    msg: PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Image src={require('./images/bluebg.jpg')} style={styles.wrapper}>
        <Container style={styles.container}>
          <div>
            <h1>TODO: SHOULD BE OPNLY IN LARGE</h1>
            <Label>{msg('work.card.bluekit.label')}</Label>
          </div>
          <div style={styles.content}>
            <Heading kind="h3">{msg('work.card.bluekit.heading')}</Heading>
            <p>{msg('work.card.bluekit.intro')}</p>
          </div>
          <div>
            <h1>TODO: SHOULD BE OPNLY IN LARGE</h1>
            <Image src={require('./images/bluekit.png')} style={styles.image} />
          </div>
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
