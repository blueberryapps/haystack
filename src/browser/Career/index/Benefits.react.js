import Container from '../../components/Container.react';
import { Heading, HeadingHighlight } from '../../components/heading';
import IconBox from '../../components/IconBox.react';
import IconBoxWrapper from '../../components/IconBoxWrapper.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { em, colors } from '../../globals';

@translate('career.benefits')
@Radium
export default class Benefits extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Container kind="slim" style={styles.benefits.container}>
        <Heading kind="h3" style={styles.benefits.heading}>
          <span>{msg('heading.text_1')} </span>
          <HeadingHighlight style={styles.benefits.heading.text}>
            {msg('heading.text_2')}
          </HeadingHighlight>
        </Heading>
        <IconBoxWrapper>
          <IconBox icon="clothes" heading={msg('subheading1')} centered column={4} text={msg('text1')} />
          <IconBox icon="dog" heading={msg('subheading2')} centered column={4} text={msg('text2')} />
          <IconBox icon="apple" heading={msg('subheading3')} centered column={4} text={msg('text3')} />
          <IconBox icon="piggybank" heading={msg('subheading4')} centered column={4} text={msg('text4')} />
          <IconBox icon="pacman" heading={msg('subheading5')} centered column={4} text={msg('text5')} />
          <IconBox icon="house" heading={msg('subheading6')} centered column={4} text={msg('text6')} />
          <IconBox icon="donut" heading={msg('subheading7')} centered column={4} text={msg('text7')} />
          <IconBox icon="peoples" heading={msg('subheading8')} centered column={4} text={msg('text8')} />
          <IconBox icon="student-hat" heading={msg('subheading9')} centered column={4} text={msg('text9')} />
        </IconBoxWrapper>
      </Container>
    );
  }
}

const styles = {
  benefits: {
    container: {
      margin: '110px auto 120px',
      fontWeight: '400'
    },
    heading: {
      marginTop: 0,
      marginBottom: '100px',
      color: colors.black,
      text: {
        line: {
          width: em(52, 65),
          right: em(-27, 65)
        }
      }
    }
  }
};
