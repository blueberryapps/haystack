import Icon from '../components/Icon.react';
import Link from '../components/Link.react';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, em, rem } from '../globals';

@translate()
export default class More extends PureComponent {

  static propTypes = {
    children: RPT.node,
    link: RPT.string.isRequired
  }

  render() {
    const { children, link } = this.props;

    return (
      <Link id="moreWork" to={link} style={styles.link}>
        <Icon
          color="#000"
          kind="arrow-right"
          size={28}
          style={styles.icon}
        />
        {children}
      </Link>
    );
  }

}

const styles = {
  link: {
    fontSize: rem(22),
    fontWeight: '400',
    borderBottom: '2px solid #000',
    position: 'relative',
    color: colors.black,
    cursor: 'pointer'
  },
  icon: {
    paddingRight: em(8, 22),
    width: `${em(36, 22)} !important`,
    height: 'auto !important',
    position: 'absolute',
    right: '100%',
    verticalAlign: 'middle'
  }
};
