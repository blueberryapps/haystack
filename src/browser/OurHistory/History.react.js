import Curve, { SCALE_X, SCALE_Y } from './Curve.react';
import Radium from 'radium';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import Year from './Year.react';
import { colors, media } from '../globals';
import histories, { itemsWithLines, historiesHeight } from './histories';

const itemTops = itemsWithLines.map(item => item.top);

@translate()
@Radium
export default class History extends PureComponent {

  state = {}

  render() {
    return (
      <div style={[style.container.base]}>
        <div style={[style.curveCircle.base, style.curveCircle.top]} />
        <div style={[style.curve]} >
          <Curve
            height={historiesHeight + 100}
            itemTops={itemTops}
            scaleX={SCALE_X}
            scaleY={SCALE_Y}
          />
        </div>
        <div style={[style.curveCircle.base, style.curveCircle.bottom]} />
        <div style={{ paddingTop: '200px' }}>
          {
            Object.keys(histories).map((year, index) => (
              <Year
                key={year}
                first={index === 0}
                right={index % 2 === 0}
                year={year}
                items={histories[year]}
              />
            ))
          }
        </div>
      </div>
    );
  }
}

const style = {
  container: {
    base: {
      marginTop: '48px',
      paddingLeft: '25px',
      marginBottom: '200px',
      position: 'relative'
    }
  },
  curve: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: 0
  },
  curveCircle: {
    base: {
      background: colors.light,
      width: '10px',
      height: '10px',
      borderRadius: '50%',
    },
    top: {
      position: 'absolute',
      top: '41px',
      left: '-5px',
      [media.m]: {
        display: 'none'
      }
    },
    bottom: {
      position: 'absolute',
      bottom: 0,
      left: '-5px',
      [media.m]: {
        display: 'none'
      }
    }
  }
};
