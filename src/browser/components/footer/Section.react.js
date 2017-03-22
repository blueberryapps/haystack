import Heading from '../heading/Heading.react';
import Item from './Item.react';
import Radium from 'radium';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';

@translate()
@Radium
export default class Section extends PureComponent {

  static propTypes = {
    content: React.PropTypes.object,
    msg: React.PropTypes.func
  }

  render() {
    const { content: { key, items }, msg } = this.props;

    return (
      <section style={styles.section}>
        <Heading kind="h5" style={styles.heading}>
          {msg(`footer.section.${key}.heading`)}
          <div style={styles.decorator} />
        </Heading>
        <ul style={styles.list}>
          {items.map(item => <Item content={item} key={item.key} sectionKey={key} />)}
        </ul>
      </section>
    );
  }
}

const styles = {
  section: {
    flex: '0 0 auto',
    flexBasis: '50%',
    marginBottom: '24px',
    position: 'relative',
    [media.s]: {
      flexBasis: '33.3%',
      textAlign: 'center'
    }
  },

  decorator: {
    backgroundColor: '#777',
    display: 'inline-block',
    height: '1px',
    marginLeft: '.5em',
    verticalAlign: 'middle',
    width: '12px'
  },

  list: {
    listStyle: 'none',
    margin: '12px 0',
    padding: 0
  },

  heading: {
    color: 'white',
    fontSize: '1.15em',
    fontWeight: 400,
    [media.s]: {
      fontSize: '.8em',
    }
  }
};
