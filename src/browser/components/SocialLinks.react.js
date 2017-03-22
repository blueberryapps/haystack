import Icon from './Icon.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import { colors, em, rem } from '../globals';

const socials = [
  {
    icon: 'linkedIn',
    link: 'https://www.linkedin.com/company/897163',
    name: 'LinkedIn'
  },
  {
    icon: 'twitter',
    link: 'http://twitter.com/blueberry_cz',
    name: 'Twitter'
  },
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/Blueberry.cz',
    name: 'Facebook'
  }
];

@Radium
export default class SocialLinks extends PureComponent {

  static propTypes = {
    style: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.object
    ])
  }

  renderItem(social) {
    const hover = Radium.getState(this.state, social.icon, ':hover');

    return (
      <li key={social.icon} style={styles.item}>
        <a key={social.icon} href={social.link} style={styles.link} target="_blank" rel="noopener noreferrer">
          <Icon
            color={hover ? colors.primary : colors.white}
            kind={social.icon}
            size={11}
          />
        </a>
      </li>
    );
  }

  render() {
    const { style } = this.props;

    return (
      <div style={style}>
        <div style={styles.text}>share</div>
        <ul style={styles.list}>
          {socials.map(social => this.renderItem(social))}
        </ul>
      </div>
    );
  }

}

const styles = {
  text: {
    paddingTop: em(3, 13),
    fontSize: rem(13),
    letterSpacing: em(1, 13),
    textTransform: 'uppercase',
    display: 'inline-block',
    verticalAlign: 'middle',
    color: colors.white,
  },

  list: {
    display: 'inline-block',
    listStyle: 'none',
    margin: '0 0 0 8px',
    padding: 0,
    verticalAlign: 'middle'
  },

  item: {
    margin: '0 0 0 6px',
    display: 'inline-block',
  },

  link: {
    width: '26px',
    height: '26px',
    lineHeight: '23px',
    display: 'inline-block',
    borderColor: colors.white,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '2px',
    transition: 'all 0.2s',
    ':hover': {
      background: colors.white
    }
  }
};
