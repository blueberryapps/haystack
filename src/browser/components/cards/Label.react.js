import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import HideBox from '../HideBox.react';

@Radium
export default class Label extends PureComponent {

  static propTypes = {
    children: PropTypes.any.isRequired,
    lineColor: PropTypes.string,
    reverse: PropTypes.bool,
    reverseText: PropTypes.bool,
    right: PropTypes.bool,
    textColor: PropTypes.string
  }

  static defaultProps = {
    reverse: false,
    reverseText: false,
    right: false
  }

  render() {
    const { children, lineColor, textColor, right, reverse, reverseText } = this.props;
    const align = right ? 'right' : 'left';

    return (
      <div style={[styles.wrapper, styles[align], reverse && styles.reverse]}>
        <HideBox col={0} sm={12} >
          <div style={[styles.line.base, lineColor && styles.line[lineColor], reverse && styles.line.reverse, reverseText && styles.line.reverse]} />
          <div style={[styles.text.base, textColor && styles.text[textColor], reverse && styles.text.reverse, reverseText && styles.text.reverse]}>
            {children}
          </div>
        </HideBox>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    position: 'absolute',
    top: '50%'
  },
  reverse: {
    transform: 'translateX(-50%) rotate(90deg)'
  },
  left: {
    left: '32px',
    transform: 'translateX(-50%) rotate(-90deg)'
  },
  right: {
    right: '24px',
    transform: 'translateX(50%) rotate(-90deg)'
  },
  line: {
    base: {
      backgroundColor: '#fff',
      display: 'inline-block',
      height: '1px',
      marginRight: '.5em',
      verticalAlign: 'middle',
      width: '100px'
    },
    blue: {
      backgroundColor: '#00A7D7'
    },
    dark: {
      backgroundColor: '#000'
    },
    reverse: {
      verticalAlign: 'super'
    }
  },
  text: {
    base: {
      color: '#fff',
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    dark: {
      color: '#000'
    },
    reverse: {
      transform: 'rotate(180deg)'
    }
  }
};
