import { Heading, HeadingSmall, HeadingHighlight } from '../components/heading/';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import Workplace from './locations/Workplace.react';
import { colors, em, media, rem } from '../globals';
import { Element } from 'react-scroll';
import { workplaces } from './locations/Workplaces.react';

@translate()
@Radium
export default class Locations extends PureComponent {

  static propTypes = {
    showHeading: PropTypes.bool,
    msg: PropTypes.func.isRequired
  }

  static defaultProps = {
    heading: false
  }

  render() {
    const { showHeading, msg } = this.props;

    return (
      <Element name="locations">
        <div style={styles.wrapper}>
          {showHeading &&
            <Heading kind="h2" style={styles.heading.main}>
              <HeadingSmall style={styles.heading.small}>
                {msg('locations.heading.small')}
              </HeadingSmall>
              <span> {msg('locations.heading.text_1')} </span>
              <HeadingHighlight>
                {msg('locations.heading.text_2')}
              </HeadingHighlight>
            </Heading>
          }
          {workplaces.map(workplace =>
            <Workplace key={workplace.key} content={workplace} heading />)
          }
        </div>
      </Element>
    );
  }

}

const styles = {
  wrapper: {
    color: 'white',
    position: 'relative',
    backgroundColor: colors.dark,
    [media.m]: {
      height: '90vh',
      maxHeight: rem(775),
      display: 'flex',
      alignItems: 'stretch',
    },
  },
  heading: {
    main: {
      maxWidth: '100%',
      position: 'absolute',
      top: rem(85),
      left: '50%',
      transform: 'translateX(-50%)',
      color: 'inherit',
      zIndex: 10,
    },
    small: {
      small: {
        fontSize: em(26, 91),
        textAlign: 'center',
        top: em(11, 26)
      },
      line: {
        marginLeft: em(16, 26),
        width: em(64, 26),
        top: em(10, 26),
      }
    }
  }
};
