import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';

@translate()
@Radium
export default class IconBox extends PureComponent {

  static propTypes = {
    children: RPT.any.isRequired
  }

  render() {
    const { children } = this.props;

    return (
      <div style={styles.wrapper}>
        {children}
      </div>
    );
  }
}

const styles = {
  wrapper: {
    margin: '0 -30px -44px -30px',
    display: 'flex',
    flexWrap: 'wrap'
  }
};
