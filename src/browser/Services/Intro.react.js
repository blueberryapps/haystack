import Image from '../components/Image.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { Heading, HeadingSmall, HeadingHighlight } from '../components/heading/';
import { em, media } from '../globals';

@translate('services.intro.heading')
@Radium
export default class Intro extends PureComponent {

  static propTypes = {
    msg: RPT.func
  }

  render() {
    const { msg } = this.props;

    return (
      <div>
        <Image src={require('./images/Intro.png')} style={styles.wrapper}>
          <Heading style={styles.heading}>
            <HeadingHighlight>
              {msg('text_1')}
            </HeadingHighlight>
            <span> {msg('text_2')} </span>
            <HeadingSmall style={styles.heading.small}>
              {msg('small')}
            </HeadingSmall>
          </Heading>
        </Image>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    alignItems: 'center',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '480px',
    position: 'relative',
    textAlign: 'left',
    [media.l]: {
      alignItems: 'stretch',
      display: 'block',
      justifyContent: 'flex-start',
      minHeight: '560px',
      padding: '200px 665px 0 0',
      textAlign: 'center'
    }
  },
  heading: {
    color: 'inherit',
    small: {
      small: {
        marginTop: em(7, 40),
        paddingLeft: em(110, 40),
        fontWeight: 600,
        fontSize: em(40, 122),
      }
    }
  }
};
