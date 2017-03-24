import BackEnd from '../components/cards/BackEnd.react';
import Container from '../components/Container.react';
import FrontEnd from '../components/cards/FrontEnd.react';
import { Heading, HeadingHighlight } from '../components/heading/';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { em, media } from '../globals';

@Radium
@translate('services.weDevelop.heading')
export default class WeDevelop extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <div style={styles.wrapper}>
        <Container style={styles.container}>
          <Heading kind="h3" id="weDevelopHeading" style={styles.heading}>
            <span>{msg('text_1')} </span>
            <HeadingHighlight style={styles.heading.text}>
              {msg('text_2')}
            </HeadingHighlight>
          </Heading>
        </Container>
        <BackEnd />
        <FrontEnd />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    padding: '0 0 64px',
    [media.m]: {
      minHeight: '480px'
    }
  },

  container: {
    padding: '32px',
    position: 'relative'
  },

  heading: {
    color: '#00A7D7',
    marginLeft: '0px',
    fontSize: '46px',
    marginTop: '.2em',
    margin: '0',
    [media.m]: {
      marginLeft: '78px'
    },
    text: {
      line: {
        width: em(52, 65)
      }
    }
  }
};
