import Icon from './Icon.react';
import Link from './Link.react';
import Radium from 'radium';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, media } from '../globals';

@translate()
@Radium
export default class ContactBar extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func
  }

  handleClick = (item) => {
    window.location = item.to;
  }

  render() {
    const { msg } = this.props;

    const TouchItem = item => (
      <div onClick={() => this.handleClick(item)} style={styles.touch.link}>
        <div style={styles.circle}>
          <Icon
            color={colors.primary}
            kind={item.icon}
            size={26}
            style={styles.icon}
          />
        </div>
        {item.children}
      </div>
    );

    const FollowLink = item => (
      <Link
        style={styles.follow.link}
        to={item.to}
      >
        <Icon
          color={colors.primary}
          kind={item.icon}
          size={18}
          style={styles.icon}
        />
      </Link>
    );

    return (
      <div style={styles.wrapper}>
        <div style={[styles.item, styles.touch.wrapper]}>
          <TouchItem icon="envelope" to={`mailto:${msg('contact.links.mail')}`}>
            {msg('contact.links.mail')}
          </TouchItem>
          <TouchItem icon="skype-letter" to={`skype:${msg('contact.links.skype')}`}>
            {msg('contact.bar.skype_text')}
          </TouchItem>
          <TouchItem icon="phone" to={`tel:${msg('contact.links.phone')}`}>
            {msg('contact.bar.phone')}
          </TouchItem>
        </div>
        <div style={[styles.item, styles.follow.wrapper]}>
          {msg('contact.bar.follow')}
          <FollowLink icon="facebook" to={msg('contact.links.facebook')} />
          <FollowLink icon="twitter" to={msg('contact.links.twitter')} />
          <FollowLink icon="linkedIn" to={msg('contact.links.linkedIn')} />
        </div>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    [media.s]: {
      margin: '76px 0',
      paddingLeft: '80px',
    }
  },
  item: {
    color: '#777',
    fontSize: '1.2em',
    lineHeight: '46px',
  },
  touch: {
    wrapper: {
      [media.s]: {
        textAlign: 'left'
      },
    },
    link: {
      color: '#000',
      display: 'block',
      fontWeight: '600',
      marginBottom: '16px',
      marginTop: '16px',
      [media.l]: {
        marginBottom: '0',
        marginLeft: '30px',
      }
    }
  },
  follow: {
    wrapper: {
      paddingLeft: '30px',
      textAlign: 'left'
    },
    link: {
      marginLeft: '20px'
    }
  },
  circle: {
    borderColor: colors.primary,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: '2px',
    display: 'inline-block',
    height: '52px',
    lineHeight: '46px',
    marginRight: '20px',
    textAlign: 'center',
    verticalAlign: 'middle',
    width: '52px'
  },
  icon: {
    verticalAlign: 'middle'
  }
};
