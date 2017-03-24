import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import { breakpoints, colors, media } from '../globals';
import Item from './Item.react';

@Radium
export default class Year extends PureComponent {

  static propTypes = {
    year: RPT.string.isRequired,
    first: RPT.bool,
    right: RPT.bool,
    items: RPT.array.isRequired
  }

  render() {
    const { year, first, right, items } = this.props;

    return (
      <div style={[style.wrapper]}>
        <div
          style={[
            style.container.base,
            first && style.container.first,
            right ? style.container.left : style.container.right,
          ]}
        >
          {year}
          <div style={style.graphic} />
        </div>
        {items.map(item => <Item key={item.title} {...item} />)}
      </div>
    );
  }
}

const style = {
  wrapper: {
    position: 'relative'
  },
  container: {
    base: {
      fontSize: '31px',
      fontWeight: 600,
      color: colors.dark,
      position: 'absolute',
      marginBottom: 0,
      marginLeft: '14px',
      top: '60px',
    },
    first: {
      top: '-20px'
    },
    left: {
      left: 0,
      alignSelf: 'flex-end',
      transform: 'translate(-50%, 0) rotate(270deg)'
    },
    right: {
      alignSelf: 'flex-end',
      transform: 'translate(50%, 0) rotate(90deg)',
      right: 0
    }
  },
  graphic: {
    background: colors.primary,
    width: '139px',
    height: '2px',
    display: 'inline-block',
    verticalAlign: 'baseline',
    position: 'relative',
    bottom: '4px',
    marginLeft: '9px'
  }
};
