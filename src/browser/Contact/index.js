import ContactBar from '../components/ContactBar.react';
import ContactForm from '../components/ContactForm.react';
import Container from '../components/Container.react';
import Helmet from 'react-helmet';
import Layout from '../layouts/General.react';
import Location from '../homepage/Locations.react';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import {colors} from '../globals';
import {Heading, HeadingSmall, HeadingHighlight} from '../components/heading/';
import {em, media} from '../globals';

@translate('contact')
export default class Contacts extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func.isRequired
  }

  render() {
    const {msg} = this.props;

    return (
      <Layout headerColor={colors.primary}>
        <Container style={styles.wrapper}>
          <Helmet title={msg('Contacts')} />

          <Heading kind="h2" style={styles.heading}>
            {msg('heading.text_1')}
            <HeadingHighlight> {msg('heading.text_2')}</HeadingHighlight>
            <HeadingSmall style={styles.heading.small}>{msg('heading.small')} </HeadingSmall>
          </Heading>

          <div style={styles.contactWrapper}>
            <div style={styles.contactItem} >
              <ContactForm slim />
            </div>
            <div style={styles.contactItem} >
              <ContactBar />
            </div>
          </div>

          <div style={styles.claim.wrapper}>
            <Heading kind="super" style={styles.claim.heading}>
              {msg('claim.text_1')}
              <br />
              <HeadingHighlight> {msg('claim.text_2')} </HeadingHighlight>
              <br />
              {msg('claim.text_3')}
            </Heading>
          </div>

        </Container>
        <Location />
      </Layout>
    );
  }
}

const styles = {
  contactWrapper: {
    margin: '32px auto',
    [media.m]: {
      display: 'flex',
      flexDirection: 'row',
    }
  },
  contactItem: {
    [media.m]: {
      flex: '0 1 auto',
      width: '50%'
    }
  },
  wrapper: {
    padding: '110px 24px 0'
  },
  heading: {
    main: {
      margin: '.75em 0 1em'
    },
    small: {
      small: {
        fontSize: em(30, 91),
        textAlign: 'center'
      }
    }
  },
  claim: {
    wrapper: {
      position: 'relative',
      textAlign: 'center',
      transform: 'translateY(2.15%)',
      zIndex: 1
    },
    heading: {
      textAlign: 'center'
    }
  }
};
