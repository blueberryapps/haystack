import ContactForm from '../components/ContactForm.react';
import Container from '../components/Container.react';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import { Element } from 'react-scroll';
import { em } from '../globals';
import { Heading, HeadingHighlight, HeadingLine } from '../components/heading/';

@translate('homepage.form.heading')
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
            {msg('text_1')}
            <br />
            <HeadingHighlight>
              <span> {msg('text_2')} </span>
            </HeadingHighlight>
            <HeadingLine />
            <HeadingHighlight style={styles.heading.bottom}>
              {msg('text_3')}
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
