import React, { PureComponent } from 'react';

export default class WeWork extends PureComponent {
  render() {
    return (
      <img style={styles.wework} src={require('../images/wework.svg')} />
    );
  }
}

const styles = {
  wework: {
    margin: '0 auto',
    maxWidth: '140px',
    height: 'auto',
    display: 'block',
    position: 'relative'
  }
};
