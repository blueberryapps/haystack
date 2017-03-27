import Bluekit from '../components/cards/Bluekit.react';
import ContactWrapper from '../HomePage/Form.react';
import Container from '../components/Container.react';
import Elevate from '../components/cards/Elevate.react';
import { Heading, HeadingSmall, HeadingHighlight } from '../components/heading';
import Helmet from 'react-helmet';
import ItSounds from '../components/cards/ItSounds.react';
import Layout from '../layouts/General.react';
import MeatAndBones from '../components/cards/MeatAndBones.react';
import PPCBee from '../components/cards/PPCBee.react';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import Zaplo from '../components/cards/Zaplo.react';
import { colors, em } from '../globals';

@translate('work')
export default class List extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Layout headerColor={colors.primary}>
        <div>
          <Container style={styles.wrapper}>
            <Helmet title={msg('heading.text_1')} />
            <Heading id="ourWorkHeading" kind="h2" style={styles.heading.main}>
              {msg('heading.text_1')}
              <HeadingHighlight> {msg('heading.text_2')} </HeadingHighlight>
              <HeadingSmall style={styles.heading.small}>
                {msg('heading.small')}
              </HeadingSmall>
            </Heading>
          </Container>
          <Elevate />
          <Zaplo />
          <MeatAndBones />
          <ItSounds />
          <Bluekit />
          <PPCBee />
          <ContactWrapper />
        </div>
      </Layout>
    );
  }
}

const styles = {
  wrapper: {
    padding: '110px 24px 0'
  },
  container: {
    margin: '240px auto 64px',
    textAlign: 'center'
  },
  heading: {
    main: {
      margin: '.75em 0 1em'
    },
    small: {
      small: {
        fontSize: em(30, 91),
        left: em(35, 30)
      }
    }
  },
};
