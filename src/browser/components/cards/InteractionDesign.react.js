import Container from '../../components/Container.react';
import Image from '../../components/Image.react';
import Label from './Label.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { Heading, HeadingHighlight } from '../heading/';
import { em, media, colors } from '../../globals';
import HideBox from '../HideBox.react';

@Radium
@translate()
export default class InteractionDesign extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <div style={styles.wrapper}>
        <Container style={styles.container}>
          <HideBox col={0} sm={12} >
            <Label reverse>{msg('services.weDesign.interaction.label')}</Label>
          </HideBox>
          <Heading
            id="weDesignHeading"
            line="white"
            style={styles.mainHeading}
          >
            {msg('services.weDesign.heading')}
          </Heading>
          <div style={styles.content}>
            <Heading kind="h3">
              <HeadingHighlight style={styles.heading.text}>
                {msg('services.weDesign.interaction.mainheading')}
              </HeadingHighlight>
            </Heading>
            <p style={styles.text}>{msg('services.weDesign.interaction.text')}</p>
          </div>
          <HideBox col={0} sm={12} >
            <Image src={require('./images/WeDesignImg1.png')} style={styles.image} />
          </HideBox>
        </Container>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    backgroundColor: '#00A7D7',
    [media.m]: {
      padding: '0 0 64px',
      marginLeft: '10%',
      minHeight: '480px'
    }
  },

  container: {
    height: 'auto',
    padding: '32px',
    position: 'relative',
    [media.s]: {
      marginRight: '6%'
    },
    [media.l]: {
      height: '490px'
    }
  },

  content: {
    color: colors.white,
    display: 'block',
    [media.m]: {
      paddingLeft: '32px',
      maxWidth: '45%',
      minHeight: '320px',
    }
  },

  heading: {
    text: {
      color: colors.white,
      line: {
        width: em(52, 65),
        right: em(3, 65),
        background: colors.white
      }
    }
  },

  subheading: {
    margin: '1.30em 0 .25em !important'
  },

  image: {
    maxWidth: 'calc(40% + 260px)',
    position: 'absolute',
    right: '-90px',
    top: '-52px',
    zIndex: '1',
    [media.m]: {
      right: '-160px'
    }
  },

  mainHeading: {
    color: colors.white,
    margingTop: '.2em',
    fontSize: '48px',
    [media.s]: {
      margin: '1.2em 40px 0em',
    }
  },

  text: {
    fontSize: '18px',
    marging: '0px'
  },

  title: {
    maxWidth: '100%'
  }
};
