import Container from '../../components/Container.react';
import {Heading, HeadingSmall, HeadingHighlight} from '../../components/heading';
import Image from '../../components/Image.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import {colors} from '../../globals';

@translate('career')
@Radium
export default class Intro extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const {msg} = this.props;

    return (
      <Image
        src={require('../images/bg-intro.jpg')}
        style={styles.intro.bgImage}
      >
        <Container kind="normal" style={styles.intro.wrapper}>
          <Heading style={styles.intro.heading}>
            <HeadingSmall style={styles.intro.heading}>
              {msg('heading.small')}
            </HeadingSmall>
            <HeadingHighlight>{msg('heading.text_1')}</HeadingHighlight>
            <span> {msg('heading.text_2')}</span>
          </Heading>
        </Container>
      </Image>
    );
  }
}

const styles = {
  intro: {
    wrapper: {
      paddingTop: '221px',
      paddingRight: '24px',
      paddingBottom: '152px',
      paddingLeft: '24px',
    }
  }
};
