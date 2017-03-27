import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';

@translate('locations')
export default class WeWork extends PureComponent {
  static propTypes = {
    msg: RPT.func.isRequired
  }

  render() {
    const { msg } = this.props;
    return (
      <img alt={msg('WeWork')} style={styles.wework} src={require('../images/wework.svg')} />
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
