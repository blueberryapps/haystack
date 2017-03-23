import ContactForm from '../components/ContactForm.react';
import Container from '../components/Container.react';
import Helmet from 'react-helmet';
import Layout from '../layouts/General.react';
import React, { PropTypes as RPT, PureComponent } from 'react';
import Team from './Team.react';
import translate from 'ts-translate';
import Twitter from '../components/twitter/TeamTwitter.react';
import { colors, em, rem } from '../globals';
import { Heading, HeadingSmall, HeadingHighlight } from '../components/heading/';
import { members } from './members';
import GroupHeading from './GroupHeading.react';

@translate('team')
export default class OurTeam extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    const teams = {};
    members.forEach((member) => {
      if (teams[member.position] === undefined) {
        teams[member.position] = [member];
      } else {
        teams[member.position].push(member);
      }
    });

    return (
      <Layout headerColor={colors.primary}>
        <div style={styles.wrapper}>
          <Container>
            <Helmet
              title={msg('heading.text_1')}
            />
            <Heading kind="h2">
              {msg('heading.text_1')}
              <HeadingHighlight> {msg('heading.text_2')} </HeadingHighlight>
              <HeadingSmall style={styles.heading.small}>
                {msg('heading.small')}
              </HeadingSmall>
            </Heading>
            <section style={styles.section}>
              <GroupHeading name="leadership" />
              <Team members={teams.leaders} />
            </section>
            <Heading kind="h2" bolder style={styles.heading2}>
              {msg('heading2.text_1')}
              <br />
              <HeadingHighlight> {msg('heading2.text_2')} </HeadingHighlight>
              <br />
              {msg('heading2.text_3')}
            </Heading>
            <section style={styles.section}>
              <GroupHeading name="bussiness_development" />
              <Team members={teams.bussiness_development} />
            </section>
            <Twitter />
            <section style={styles.section}>
              <GroupHeading name="development" />
              <Team members={teams.development} />
            </section>
            <Heading kind="h2" bolder style={styles.heading2}>
              {msg('heading3.text_1')}
              <br />
              <HeadingHighlight> {msg('heading3.text_2')} </HeadingHighlight>
              <br />
              {msg('heading3.text_3')}
            </Heading>
            <section style={styles.section}>
              <GroupHeading name="design" />
              <Team members={teams.design} />
            </section>
            <section style={styles.section}>
              <GroupHeading name="marketing" position="right" />
              <Team members={teams.marketing} />
            </section>
            <section style={styles.section}>
              <GroupHeading name="hr_operations" />
              <Team members={teams.hr_operations} />
            </section>
            <Heading kind="super" bolder style={styles.contactHeading.main}>
              {msg('contactHeading.text_1')}
              <br />
              <HeadingHighlight> {msg('contactHeading.text_2')} </HeadingHighlight>
              <br />
              {msg('contactHeading.text_3')}
              <HeadingSmall style={styles.contactHeading.small}>
                {msg('contactHeading.small')}
              </HeadingSmall>
            </Heading>
            <ContactForm displayCvInput />
          </Container>
        </div>
      </Layout>
    );
  }

}

const styles = {
  wrapper: {
    padding: '128px 48px'
  },
  section: {
    margin: '48px 0',
    position: 'relative'
  },

  heading: {
    small: {
      small: {
        fontSize: em(30, 91),
        left: em(59, 30)
      }
    }
  },

  heading2: {
    marginTop: rem(120),
    marginBottom: rem(160),
    textAlign: 'center'
  },

  contactHeading: {
    main: {
      marginTop: rem(120),
      marginBottom: 0,
      textAlign: 'center',
    },
    small: {
      small: {
        marginTop: em(40, 30),
        fontWeight: 600,
        fontSize: em(30, 140),
        textAlign: 'center'
      }
    }
  }
};
