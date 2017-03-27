import Benefits from './index/Benefits.react';
import Container from '../components/Container.react';
import Culture from './index/Culture.react';
import Form from './index/Form.react';
import Helmet from 'react-helmet';
import { Heading, HeadingHighlight } from '../components/heading/';
import Image from '../components/Image.react';
import Intro from './index/Intro.react';
import Layout from '../layouts/General.react';
import Positions from './index/Positions.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, media, em } from '../globals';

@Radium
@translate('career')
export default class Index extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Layout>
        <Helmet title={msg('Career')} />
        <Intro />

        <Container kind="slim" style={styles.about.container}>
          <Heading kind="h3" style={styles.about.heading}>
            <span> {msg('about.heading.text_1')} </span>
            <HeadingHighlight style={styles.about.heading.text}>
              {msg('about.heading.text_2')}
            </HeadingHighlight>
          </Heading>

          <p>{msg('about.text1')}</p>
        </Container>

        <Culture />

        <Image src={require('./images/bg-banner.jpg')}>
          <Container kind="normal" style={styles.banner.container}>
            <Heading kind="h1" style={styles.banner.heading}>
              {msg('banner.heading')}
            </Heading>
          </Container>
        </Image>

        <Benefits />
        <Positions />
        <Form />
      </Layout>
    );
  }
}

const styles = {
  about: {
    container: {
      margin: '110px auto',
      fontWeight: '400',
      fontSize: '18px',
      color: colors.gray
    },
    heading: {
      marginTop: 0,
      marginBottom: '46px',
      text: {
        line: {
          width: em(52, 65),
          right: em(2, 65)
        }
      }
    }
  },
  banner: {
    heading: {
      color: colors.white,
      [media.xs]: {
        fontSize: '2em'
      },
      [media.m]: {
        fontSize: '3em'
      },
      [media.l]: {
        fontSize: '3.9em'
      }
    },
    container: {
      paddingTop: '135px',
      paddingBottom: '135px'
    }
  }
};
