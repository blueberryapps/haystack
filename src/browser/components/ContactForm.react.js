import Button, { BUTTON_KIND_PRIMARY } from './Button.react';
import Container from './Container.react';
import HeadingContainer from './HeadingContainer.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, media } from '../globals';
import { connectField, connectSubmit, Form } from 'onion-form';
import Text from './form/Text.react';
import Multiline from './form/Multiline.react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sendEmail } from '../../common/contactForm/actions';

function isEmail() {
  return (value) => {
    if (value && !value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      return 'invalid_email';
    }
    return null;
  };
}

function isRequired() {
  return (value) => {
    if (value && `${value}`.length > 0) {
      return null;
    }
    return 'is_required';
  };
}

const translateField = translate(null, { disableDefault: true });
const Name = translateField(connectField('name')(Text));
const Email = translateField(connectField('email', {}, [isRequired(), isEmail()])(Text));
const Message = translateField(connectField('message', {}, [isRequired()])(Multiline));
const CV = translateField(connectField('cv', { file: true })(Text));
const Submit = connectSubmit(Button);

@connect(
  () => ({}),
  (dispatch) => bindActionCreators({ sendEmail }, dispatch)
)
@Radium
@translate()
export default class ContactForm extends PureComponent {

  static propTypes = {
    sendEmail: PropTypes.func,
    displayCvInput: PropTypes.bool,
    formSendingStatus: PropTypes.string,
    headingContainerKind: PropTypes.string,
    msg: PropTypes.func,
    slim: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
  }

  static defaultProps = {
    displayCvInput: false,
    slim: false
  }

  state = {
    valid: false,
    cvFile: null,
  };

  handleCV = (name, cvFile) => this.setState({ cvFile });

  handleSubmit = ({ values }) => {
    const { sendEmail: send, displayCvInput } = this.props;

    send(values);

    if (window.dataLayer) {
      const formType = displayCvInput ? 'hr' : 'contact';

      window.dataLayer.push({
        event: `${formType}_form`,
        eventCategory: formType,
        eventAction: 'submit',
        eventLabel: `${formType}_form`
      });
    }
  }

  render() {
    const { displayCvInput, formSendingStatus, headingContainerKind, msg, slim, style } = this.props;

    return (
      <div style={style}>
        <HeadingContainer kind={headingContainerKind} />
        <Container style={styles.container}>
          <Form name="contact" onSubmit={this.handleSubmit}>
            <div style={[styles.wrapper.base, !slim && styles.wrapper.rwd]}>
              <div style={[styles.sender.base, !slim && styles.sender.rwd]}>
                <Name />
                <Email />
                {displayCvInput && <CV />}
              </div>
              <div style={[styles.message.base, !slim && styles.message.rwd]}>
                <Message />
              </div>
            </div>
            <div style={styles.controls}>
              <Submit id="submitForm" kind={BUTTON_KIND_PRIMARY} >
                {msg('contact.form.submit')}
              </Submit>
            </div>
            {formSendingStatus === 'SUCCESS' &&
              <div id="formMessageSuccess" style={styles.success.wrapper}>
                <div style={styles.success.content}>
                  {msg('contact.form.message.success')}
                </div>
              </div>
            }
          </Form>
        </Container>
      </div>
    );
  }

}

const styles = {
  container: {
    position: 'relative'
  },
  heading: {
    textAlign: 'center'
  },
  wrapper: {
    base: {
      margin: '32px auto',
      maxWidth: '990px'
    },
    rwd: {
      [media.m]: {
        display: 'flex',
        flexDirection: 'row',
        padding: '16px'
      }
    }
  },
  controls: {
    textAlign: 'center'
  },
  sender: {
    base: {
      padding: '16px 16px 0'
    },
    rwd: {
      [media.m]: {
        flex: '0 1 auto',
        width: '50%'
      }
    }
  },
  message: {
    base: {
      padding: '16px 16px 0'
    },
    rwd: {
      [media.m]: {
        flex: '0 1 auto',
        width: '50%'
      }
    }
  },
  success: {
    wrapper: {
      backgroundColor: 'rgba(255, 255, 255, .75)',
      bottom: 0,
      left: 0,
      position: 'absolute',
      right: 0,
      top: 0
    },
    content: {
      backgroundColor: colors.primary,
      boxShadow: '0 0 128px 0 rgba(0, 0, 0, 0.4)',
      color: 'white',
      display: 'inline-block',
      fontWeight: '600',
      left: '50%',
      padding: '16px 42px',
      position: 'absolute',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    }
  }
};
