import Icon from '../Icon.react';
import Radium from 'radium';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';

@translate()
@Radium
export default class Copyright extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func
  }

  render() {
    const { msg } = this.props;

    return (
      <div style={styles.wrapper}>
        <div style={styles.copy}>
          {msg('footer.copyright.company')}
        </div>
        <div style={styles.text}>
          {msg('footer.copyright.by')}
          <Icon color="#f42c49" kind="heart" size={13} style={styles.icon} />
          <b style={styles.bold}>
            {msg('footer.copyright.where')}
          </b>
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

const styles = {
  wrapper: {
    width: '100%',
    [media.s]: {
      display: 'flex',
    }
  },

  copy: {
    color: '#ccc',
    flex: '0 0 auto',
    fontSize: '14px',
    paddingRight: '20px'
  },

  text: {
    color: '#ccc',
    flex: '0 0 auto',
    fontSize: '14px'
  },

  line: {
    [media.s]: {
      backgroundColor: '#777',
      flex: '1 0 auto',
      height: '1px',
      marginLeft: '16px',
      marginTop: '.475em'
    }
  },

  bold: {
    fontWeight: 500,
    color: '#fff'
  },

  icon: {
    margin: '0px 5px'
  }
};
