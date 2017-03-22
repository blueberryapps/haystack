import Link from '../Link.react';
import Radium from 'radium';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';

@translate()
@Radium
export default class Item extends PureComponent {

  static propTypes = {
    cnt: React.PropTypes.func,
    content: React.PropTypes.object,
    sectionKey: React.PropTypes.string
  }

  render() {
    const { cnt, content: { key, src, target, to }, sectionKey } = this.props;

    const title = cnt(`footer.section.${sectionKey}.items.${key}.heading`);
    const text = to ?
      <Link to={to} target={target}>{title}</Link> : src ?
        <a href={src} target={target}>{title}</a> :
        <div>{title}</div>;

    return (
      <li style={styles}>
        {text}
      </li>
    );
  }
}

const styles = {
  color: '#777',
  fontSize: '.85em',
  marginBottom: '12px',
  ':hover': {
    textDecoration: 'underline'
  }
};
