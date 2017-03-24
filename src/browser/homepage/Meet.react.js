import Circles from '../components/Circles.react';
import Container from '../components/Container.react';
import { Heading, HeadingSmall, HeadingHighlight } from '../components/heading/';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { Element } from 'react-scroll';
import { em, media, rem } from '../globals';
import More from './More.react';

const list = [
  'reactbulb',
  'years7',
  'local',
  'earth',
];

@translate()
export default class Meet extends PureComponent {

  static propTypes = {
    cnt: PropTypes.func.isRequired,
    msg: PropTypes.func.isRequired
  }

  render() {
    const { cnt, msg } = this.props;

    return (
      <Element name="service">
        <Container style={styles.container}>
          <div style={styles.content}>
            <Heading kind="h2" style={styles.heading.main}>
              <HeadingSmall style={styles.heading.small}>
                {msg('meet.heading.small')}
              </HeadingSmall>
              {msg('meet.heading.text_1')}
              <HeadingHighlight>{cnt('meet.heading.text_2')}</HeadingHighlight>
            </Heading>
          </div>
          <Circles list={list} translationPath="meet" />
          <p style={styles.more}>
            <More link="/our-team">
              {msg('meet.seeTeam')}
            </More>
          </p>
        </Container>
      </Element>
    );
  }

}

const styles = {
  wrapper: {
    backgroundPosition: 'right top',
    backgroundSize: 'auto calc(100% - 240px)',
    padding: '64px 0 0',
    [media.m]: {
      minHeight: '80vh'
    },
    [media.l]: {
      backgroundPosition: 'right top',
      backgroundSize: '100% auto',
      minHeight: '80vh'
    }
  },

  container: {
    wrapper: {
      backgroundImage: `url(${require('./images/bg-meet.jpg')})`,
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
      backgroundSize: '100% auto',
      [media.l]: {
        backgroundSize: 'auto'
      },
      '@media screen and (min-width: 1600px)': {
        backgroundPosition: 'right top',
        backgroundSize: '100% auto'
      }
    },
    container: {
      marginTop: '12%',
      marginBottom: '8.5%',
    }
  },

  content: {
    [media.m]: {
      paddingTop: '32px',
      width: '40%'
    }
  },

  heading: {
    main: {
      marginBottom: em(75, 91)
    },
    small: {
      small: {
        left: em(6, 23)
      },
      line: {
        marginLeft: em(130, 23),
        width: em(77, 23),
        top: em(62, 23),
      }
    }
  },

  more: {
    marginTop: rem(25),
    textAlign: 'center'
  }

};
