import Container from '../../components/Container.react';
import { Heading, HeadingSmall, HeadingHighlight } from '../../components/heading';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { media, em } from '../../globals';

@translate('career.detail.video')
@Radium
export default class Video extends PureComponent {

  static propTypes = {
    lang: RPT.string.isRequired,
    msg: RPT.func.isRequired,
  }

  render() {
    const { msg, lang } = this.props;

    return (
      <Container kind="slim" style={styles.video.container}>
        <Heading kind="h3" style={styles.video.heading}>
          <HeadingSmall style={styles.video.heading.small}>
            {msg('heading.small')}
          </HeadingSmall>
          <span> {msg('heading.text_1')} </span>
          <HeadingHighlight>
            {msg('heading.text_2')}
          </HeadingHighlight>
        </Heading>

        <div style={styles.video.row}>
          <div style={styles.video.col}>
            <span style={styles.video.colAfter} />
            <iframe
              style={styles.video.iframe}
              width="854"
              height="480"
              src="https://www.youtube.com/embed/z76P24dYr98?list=PL0GtonJCoIhVqpD8xQravRr3xX6fFc7MV"
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div style={styles.video.col}>
            <span style={styles.video.colAfter} />
            <iframe
              style={styles.video.iframe}
              width="854"
              height="480"
              src="https://www.youtube.com/embed/SsGpaWFaWjc?list=PL0GtonJCoIhVqpD8xQravRr3xX6fFc7MV"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        <p>{msg(`text.${lang}`, { disableDefault: true })}</p>
      </Container>
    );
  }
}

const styles = {
  video: {
    heading: {
      small: {
        small: {
          fontSize: em(28, 65),
          top: em(2, 28),
          left: em(41, 28)
        },
        line: {
          marginLeft: em(13, 28),
          width: em(52, 28)
        }
      }
    },
    row: {
      margin: '43px 0 72px',
      display: 'flex',
      flexWrap: 'wrap',
    },
    col: {
      marginBottom: '20px',
      width: '100%',
      position: 'relative',
      [media.m]: {
        marginBottom: 0,
        width: '50%',
      }
    },
    colAfter: {
      paddingTop: '56.2%',
      display: 'block'
    },
    iframe: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    }
  },
};
