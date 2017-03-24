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
          styles.container,
          {
            height: `${calucateItemHeight({ customDate, lines, titleLines })}px`,
            left: `${moveToCurve}px`
          },
          position === 'right' ? styles.containerLeft : styles.containerRight
        ]}
      >
        <header>
          <h3 style={styles.heading}>{title}</h3>
          {
            !hideDate &&
              <div style={styles.date}>
                {
                  customDate || <Date value={date} />
                }
              </div>
          }
        </header>
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          style={styles.content}
        />
        {
          picture &&
            <img
              alt={title}
              src={require(`${picture}`)}
              style={[
                styles.picture.base,
                position === 'left' ? styles.picture.left : styles.picture.right
              ]}
            />
        }
      </article>
    );
  }

}

const styles = {
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left',
    paddingBottom: '48px',
    position: 'relative',
    width: `${ITEM_WIDTH}px`,
  },
  containerLeft: {
    transform: 'translateX(-75%)'
  },
  containerRight: {
    transform: 'translateX(75%)'
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
  picture: {
    base: {
      maxWidth: '130px',
      position: 'absolute',
      top: 0
    },
    left: {
      right: '-150px'
    },
    right: {
      left: '-150px'
    }
  }
};
