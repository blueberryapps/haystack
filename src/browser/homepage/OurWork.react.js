import Container from '../components/Container.react';
import Elevate from '../components/cards/Elevate.react';
import { Heading, HeadingSmall, HeadingHighlight } from '../components/heading/';
import More from './More.react';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import Zaplo from '../components/cards/Zaplo.react';
import { em, rem } from '../globals';

@translate()
export default class OurWork extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <div style={styles.wrapper}>
        <Container style={styles.container}>
          <Heading kind="h2" id="homepageWorkHeading">
            <HeadingSmall style={styles.heading.small}>
              {msg('homepage.work.heading.small')}
            </HeadingSmall>
            <span> {msg('homepage.work.heading.text_1')} </span>
            <HeadingHighlight>
              {msg('homepage.work.heading.text_2')}
            </HeadingHighlight>
          </Heading>
        </Container>
        <Elevate />
        <Zaplo />
        <More link={'/our-work'}>{msg('work.more')}</More>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    position: 'relative'
  },
  container: {
    container: {
      marginTop: '2%',
      marginBottom: rem(40)
    }
  },
  heading: {
    small: {
      small: {
        fontSize: em(25, 91),
        top: em(14, 25),
        left: em(4, 25)
      },
      line: {
        marginLeft: em(10, 25),
        width: em(51, 25)
      }
    }
  }
};
