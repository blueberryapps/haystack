import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import { colors } from '../../globals';

@Radium
export default class Multiline extends PureComponent {

  static propTypes = {
    error: RPT.string,
    apiError: RPT.string,
    label: RPT.string,
    onChange: RPT.func,
    onBlur: RPT.func,
    onFocus: RPT.func,
    liveValidation: RPT.bool,
    placeholder: RPT.string,
    name: RPT.string,
    value: RPT.string,
  }

  render() {
    const { label, liveValidation, name, value, onChange, onBlur, onFocus, placeholder, error, apiError } = this.props;
    const hasError = !!(error || apiError);
    const isCorrect = (liveValidation && !hasError);
    const focus = Radium.getState(this.state, 'input', ':focus');

    return (
      <label htmlFor={name} style={[styles.wrapper]}>
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          placeholder={placeholder}
          style={[
            styles.input,
            hasError && styles.errorInput,
            isCorrect && styles.correctInput
          ]}
        />
        <div
          style={[
            styles.label,
            focus && styles.focus,
            isCorrect && styles.correctLabel,
            hasError && styles.errorLabel
          ]}
        >
          {label}
        </div>
      </label>
    );
  }

}

const styles = {
  wrapper: {
    cursor: 'pointer',
    display: 'block',
    marginBottom: '32px'
  },
  input: {
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderWidth: '0 0 1px 0',
    display: 'block',
    fontSize: '1.15em',
    margin: 0,
    padding: '.25em 0',
    position: 'relative',
    width: '100%',
    height: '120px',
    ':focus': {
      borderColor: colors.primary
    }
  },
  correctInput: {
    borderColor: colors.primary
  },
  errorInput: {
    borderColor: '#f00',
    ':focus': {
      borderColor: '#f00'
    }
  },
  icon: {
    position: 'absolute',
    right: 0,
    top: '.25em'
  },
  label: {
    color: '#bbb',
    fontSize: '.75em',
    marginTop: '.25em',
  },
  focus: {
    color: colors.primary
  },
  correctLabel: {
    color: colors.primary
  },
  errorLabel: {
    color: '#f00'
  },
};
