import Button, { BUTTON_KIND_GHOST_DARK } from '..//Button.react';
import Container from '../../components/Container.react';
import Heading from '../../components/heading/Heading.react';
import Image from '../../components/Image.react';
import Label from './Label.react';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';
import HideBox from '../HideBox.react';

@translate('work.card.ppcbee')
export default class PPCBee extends PureComponent {

  static propTypes = {
    msg: PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Image src={require('./images/yellowbg.jpg')} style={styles.wrapper}>
        <Container style={styles.container}>
          <HideBox col={0} sm={12} >
            <Label textColor="dark" lineColor="dark" right>{msg('label')}</Label>
            <Image alt={msg('heading')} src={require('./images/ppcbee.png')} style={styles.image} />
          </HideBox>
          <div style={styles.content}>
            <Heading kind="h3" id="cardsPpcBeeHeading">{msg('heading')}</Heading>
            <p>{msg('intro')}</p>
            <p>
              <Button link="/our-work/ppc-bee" kind={BUTTON_KIND_GHOST_DARK} blendColor="#ffc20a">
                {msg('link')}
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
    [media.m]: {
      minHeight: '520px'
    }
  },

  container: {
    padding: '32px',
    position: 'relative'
  },

  image: {
    left: '-200px',
    position: 'absolute',
    top: '-200px'
  },

  content: {
    padding: '32px 0',
    [media.m]: {
      marginLeft: '50%',
      padding: '48px 48px 48px 0'
    }
  },

  link: {
    fontSize: '1.25em',
    fontWeight: '300',
    marginTop: '2em'
  }
};
