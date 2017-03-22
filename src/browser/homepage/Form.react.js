import ContactForm from '../components/ContactForm.react';
import Container from '../components/Container.react';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import { Element } from 'react-scroll';
import { em } from '../globals';
import { Heading, HeadingHighlight, HeadingLine } from '../components/heading/';

@translate()
export default class Form extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <Container>
        <Element name="contact-form">
          <Heading kind="super">
            {msg('homepage.form.heading.text_1')}
            <br />
            <HeadingHighlight>
              <span> {msg('homepage.form.heading.text_2')} </span>
            </HeadingHighlight>
            <HeadingLine />
            <HeadingHighlight style={styles.heading.bottom}>
              {msg('homepage.form.heading.text_3')}
            </HeadingHighlight>
          </Heading>

          <ContactForm />
        </Element>
      </Container>
    );
  }

}

const styles = {
  heading: {
    bottom: {
      fontSize: em(159, 140)
    }
  }
};
