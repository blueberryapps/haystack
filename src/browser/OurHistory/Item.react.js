/* eslint-disable react/no-danger */
import Date from './Date.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import { colors, media } from '../globals';
import { calucateItemHeight } from './histories';

const ITEM_CLASS_NAME = 'historyItem';
const ITEM_WIDTH = 281;

@Radium
export default class Item extends PureComponent {

  static propTypes = {
    customDate: RPT.string,
    date: RPT.object,
    hideDate: RPT.bool,
    picture: RPT.string,
    lines: RPT.number,
    titleLines: RPT.number,
    position: RPT.string,
    moveToCurve: RPT.number,
    text: RPT.string,
    title: RPT.string
  }

  render() {
    const {
      customDate,
      date,
      hideDate,
      picture,
      lines,
      titleLines,
      moveToCurve,
      position,
      text,
      title,
    } = this.props;

    return (
      <article
        className={ITEM_CLASS_NAME}
        style={[
          style.container,
          {
            [media.m]: {
              height: `${calucateItemHeight({ customDate, lines, titleLines })}px`,
              left: `${moveToCurve}px`
            }
          },
          position === 'right' ? style.containerLeft : style.containerRight
        ]}
      >
        <header>
          <h3 style={style.heading}>{title}</h3>
          {
            !hideDate &&
              <div style={style.date}>
                {
                  customDate || <Date value={date} />
                }
              </div>
          }
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          style={style.content}
        />
        {
          picture &&
            <img
              alt={title}
              src={require(`${picture}`)}
              style={[
                style.picture.base,
                position === 'left' ? style.picture.left : style.picture.right
              ]}
            />
        }
        <div style={style.circle} />
      </article>
    );
  }

}

const style = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left',
    paddingBottom: '48px',
    position: 'relative',
    width: `${ITEM_WIDTH}px`,
    [media.maxM]: {
      width: 'auto'
    }
  },
  containerLeft: {
    transform: 'translateX(-75%)',
    [media.maxM]: {
      transform: 'none'
    }
  },
  containerRight: {
    transform: 'translateX(75%)',
    [media.maxM]: {
      transform: 'none'
    }
  },
  heading: {
    fontWeight: 600,
    margin: '0 0 4px',
    fontSize: '18px',
    lineHeight: '16px'
  },
  content: {
    color: colors.gray,
    marginTop: '21px'
  },
  date: {
    fontSize: '15px',
    color: colors.neutral
  },

  circle: {
    [media.maxM]: {
      background: colors.light,
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      transform: 'translate(-50%, -50%)',
      position: 'absolute',
      top: '8px',
      left: '-25px',
    }
  },

  picture: {
    base: {
      maxWidth: '130px',
      position: 'absolute',
      top: 0,
      [media.maxM]: {
        paddingTop: '20px',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: 'static'
      }
    },
    left: {
      [media.l]: {
        right: '-150px',
      },
      [media.exactM]: {
        left: 0,
        top: '-150px'
      }
    },
    right: {
      [media.l]: {
        left: '-150px',
      },
      [media.exactM]: {
        right: 0,
        top: '-150px'
      }
    }
  }
};
