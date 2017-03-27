import Circles from '../components/Circles.react';
import Container from '../components/Container.react';
import { Heading, HeadingSmall, HeadingHighlight } from '../components/heading/';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import { Element } from 'react-scroll';
import { em, rem } from '../globals';

const list = [
  'product',
  'boost',
  'kickoff',
  'research'
];

@translate()
export default class How extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Element name="our-story">
        <Container style={styles.container}>
          <Heading kind="h2" style={styles.heading.main}>
            <HeadingSmall style={styles.heading.small}>
              {msg('how.heading.small')}
            </HeadingSmall>
            <span> {msg('how.heading.text_1')} </span>
            <HeadingHighlight>{msg('how.heading.text_2')}</HeadingHighlight>
          </Heading>
          <Circles list={list} translationPath="how" />
        </Container>
      </Element>
    );
  }

}

const styles = {
  container: {
    container: {
      textAlign: 'center'
    }
  },
  heading: {
    main: {
      marginBottom: rem(104)
    },
    small: {
      small: {
        fontSize: em(30, 91),
        top: em(18, 30),
        left: em(-4, 30)
      },
      line: {
        marginLeft: em(38, 30),
        width: em(85, 30),
        top: em(8, 30),
      }
    }
  }
};
