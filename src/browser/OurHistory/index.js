import Container from '../components/Container.react';
import ContactForm from '../HomePage/Form.react';
import { Heading, HeadingSmall, HeadingHighlight } from '../components/heading/';
import Helmet from 'react-helmet';
import History from './History.react';
import Layout from '../layouts/General.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, em, media } from '../globals';

@translate('history')
@Radium
export default class HistoryPage extends PureComponent {

  static propTypes = {
    msg: RPT.func
  }

  render() {
    const { msg } = this.props;

    return (
      <Layout headerColor={colors.primary}>
        <div style={styles.wrapper}>
          <Container>
            <Helmet title={msg('History')} />
            <Heading kind="h2">
              <span> {msg('heading.text_1')} </span>
              <HeadingHighlight>
                {msg('heading.text_2')}
              </HeadingHighlight>
              <HeadingSmall style={styles.heading.small}>
                {msg('heading.small')}
              </HeadingSmall>
            </Heading>
            <History />
            <ContactForm />
          </Container>
        </div>
      </Layout>
    );
  }

}

const styles = {
  wrapper: {
    padding: '128px 48px 128px 23px',
    [media.m]: {
      padding: '128px 48px'
    }
  },
  heading: {
    small: {
      small: {
        fontSize: em(30, 91),
        left: em(55, 30)
      }
    }
  }
};
