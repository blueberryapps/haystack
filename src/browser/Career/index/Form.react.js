import ContactForm from '../../components/ContactForm.react';
import Container from '../../components/Container.react';
import { Heading } from '../../components/heading';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, media, rem, em } from '../../globals';


@translate('career.form')
@Radium
export default class Form extends PureComponent {

  static propTypes = {
    cnt: RPT.func.isRequired
  }

  render() {
    const { cnt } = this.props;

    return (
      <Container kind="normal" style={styles.form.container}>
        <Heading kind="h1" bolder style={styles.form.heading}>
          {cnt('heading_part1')}
          <br />
          <span style={styles.form.heading.highlight}>
            {cnt('heading_part2')}
          </span>
          <br />
          {cnt('heading_part3')}
          <br />
          <small style={styles.form.heading.small}>
            {cnt('heading_small')}
          </small>
        </Heading>


        <ContactForm displayCvInput />
      </Container>
    );
  }
}

const styles = {
  form: {
    container: {
      margin: '130px auto 138px'
    },
    heading: {
      lineHeight: 1,
      textAlign: 'center',
      [media.l]: {
        fontSize: rem(96),
      },
      highlight: {
        color: colors.primary
      },
      small: {
        margin: '18px 0 0',
        fontWeight: '600',
        fontSize: em(30, 96),
        display: 'block',
      }
    }
  }
};
