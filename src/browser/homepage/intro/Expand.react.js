import Icon from '../../components/Icon.react';
import Link from '../../components/Link.react';
import Radium from 'radium';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import { rem } from '../../globals';

const RadiumLink = Radium(Link);

@translate()
@Radium
export default class Expand extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func
  }

  render() {
    const { msg } = this.props;
    const hover = Radium.getState(this.state, 'dsfsda', ':hover');

    return (
      <div style={styles.wrapper}>
        <div style={styles.text}>
          {msg('intro.title')}
        </div>
        <span key="dsfsda" style={[styles.circle, hover && styles.circleHover]}>
          <RadiumLink scrollTo="work" id="introExpand" style={styles.link}>
            <Icon
              color="#e9385f"
              kind="arrow-down"
              size={26}
              style={[styles.icon, hover && styles.iconHover]}
            />
          </RadiumLink>
        </span>
      </div>
    );
  }
}

const styles = {
  wrapper: {
    textAlign: 'center',
    bottom: rem(34),
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)'
  },
  text: {
    fontSize: rem(13),
    fontWeight: '300',
    letterSpacing: '.2em',
    marginBottom: rem(13),
    textTransform: 'uppercase'
  },
  circle: {
    width: '44px',
    height: '44px',
    display: 'inline-block',
    position: 'relative',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: '#7a7a7a',
    borderRadius: '50%',
    cursor: 'pointer',
    backfacevisibility: 'hidden',
    transition: 'all 0.3s ease',
    transform: 'translate3d(0, 0, 0)',
    ':hover': {}
  },
  circleHover: {
    background: 'rgba(200, 200, 200, 0.07)',
    transform: 'translate3d(0, 4px, 0)'
  },
  link: {
    display: 'block',
    lineHeight: '40px',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: '50%',
  },
  icon: {
    verticalAlign: 'middle',
    position: 'relative',
    zIndex: 10,
    transition: 'all 0.3s ease',
    transform: 'scale(1)',
    ':hover': {}
  },
  iconHover: {
    transform: 'scale(1.3)'
  }
};
