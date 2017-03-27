import Container from '../../components/Container.react';
import { Heading, HeadingHighlight } from '../../components/heading';
import IconBox from '../../components/IconBox.react';
import IconBoxWrapper from '../../components/IconBoxWrapper.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { em } from '../../globals';

@translate('career.culture')
@Radium
export default class Culture extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Container kind="slim" style={styles.culture.container}>
        <Heading kind="h3" style={styles.culture.heading}>
          <span>{msg('heading.text_1')} </span>
          <HeadingHighlight style={styles.culture.heading.text}>
            {msg('heading.text_2')}
          </HeadingHighlight>
        </Heading>
        <IconBoxWrapper>
          <IconBox icon="clothes" column={6} heading={msg('subheading1')} text={msg('text1')} />
          <IconBox icon="career" column={6} heading={msg('subheading2')} text={msg('text2')} />
          <IconBox icon="bosses" column={6} heading={msg('subheading3')} text={msg('text3')} />
          <IconBox icon="office" column={6} heading={msg('subheading4')} text={msg('text4')} />
        </IconBoxWrapper>
      </Container>
    );
  }
}

const styles = {
  culture: {
    container: {
      margin: '0 auto 100px',
      fontWeight: '400'
    },
    heading: {
      marginTop: 0,
      marginBottom: '55px',
      text: {
        line: {
          width: em(52, 65),
          right: em(2, 65)
        }
      }
    }
  },
};
