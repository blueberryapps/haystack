import Bluekit from '../components/cards/Bluekit.react';
import Container from '../components/Container.react';
import { Heading, HeadingSmall, HeadingHighlight } from '../components/heading/';
import PPCBee from '../components/cards/PPCBee.react';
import Radium from 'radium';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import { em, rem } from '../globals';

@translate()
@Radium
export default class Projects extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <div>
        <Container style={styles.container}>
          <Heading kind="h2">
            <HeadingSmall kind="h2" style={styles.heading.small}>
              {msg('homepage.projects.heading.small')}
            </HeadingSmall>
            <span> {msg('homepage.projects.heading.text_1')} </span>
            <HeadingHighlight>
              {msg('homepage.projects.heading.text_2')}
            </HeadingHighlight>
          </Heading>
        </Container>
        <PPCBee />
        <Bluekit />
      </div>
    );
  }

}

const styles = {
  container: {
    container: {
      marginTop: '3%',
      marginBottom: 0,
      textAlign: 'center',
    }
  },
  heading: {
    main: {
      marginBottom: rem(34)
    },
    small: {
      small: {
        top: em(8, 23),
        left: em(10, 23)
      },
      line: {
        marginLeft: em(13, 23),
        width: em(35, 23),
        top: em(7, 23),
      }
    }
  }
};
