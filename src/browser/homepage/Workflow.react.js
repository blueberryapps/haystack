import Container from '../components/Container.react';
import { Heading, HeadingSmall, HeadingHighlight } from '../components/heading/';
import Icon from '../components/Icon.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { Element } from 'react-scroll';
import { em, colors, media, rem } from '../globals';

// TODO: extract point
const pointStyle = {
  backgroundColor: colors.primary,
  borderRadius: '50%',
  left: '50%',
  position: 'absolute',
  transform: 'translateX(-50%)',
};

const circleStyle = {
  backgroundColor: '#fff',
  borderColor: '#ddd',
  borderStyle: 'solid',
  borderWidth: '1px'
};


const Point = ({ size, top, circle = false }) => (
  <div
    style={[
      pointStyle,
      { height: size, width: size, top: `${top}px` },
      circle && circleStyle
    ]}
  />
);

Point.propTypes = {
  size: RPT.number,
  top: RPT.number,
  circle: RPT.boolean
};
const RadiumPoint = Radium(Point);

@translate()
@Radium
export default class Workflow extends PureComponent {

  static propTypes = {
    cnt: RPT.func.isRequired,
    msg: RPT.func.isRequired,
  }

  render() {
    const { cnt, msg } = this.props;

    return (
      <Element name="work">
        <Container style={styles.container}>
          <Heading kind="h2" id="workflowHeading">
            <HeadingSmall style={styles.heading.small}>
              {msg('workflow.heading.small')}
            </HeadingSmall>
            <span> {msg('workflow.heading.text_1')} </span>
            <HeadingHighlight>{cnt('workflow.heading.text_2')}</HeadingHighlight>
          </Heading>
          <div style={styles.flow.wrapper}>
            <div>
              <h1>TODO: SHOW FOR LARGE</h1>
              <div style={styles.flow.line} />
            </div>
            <ol style={styles.flow.list}>

              <li style={styles.flow.items.right}>
                <div>
                  <h1>TODO: SHOW FOR LARGE</h1>
                  <div>
                    <div
                      style={[
                        styles.flow.icons.base,
                        styles.flow.icons.i1
                      ]}
                    >
                      <Icon color={colors.primary} kind="reactbulb" size={60} />
                    </div>
                    <RadiumPoint size={10} top={120} />
                    <RadiumPoint size={20} top={150} />
                  </div>
                </div>
                <div style={styles.flow.items.i1}>
                  <Heading id="howItem1Heading" kind="h3" style={styles.flow.heading1}>
                    1. {msg('workflow.brief.heading')}
                  </Heading>
                  <p>{msg('workflow.brief.text')}</p>
                </div>
              </li>


              <li style={styles.flow.items.left}>
                <div>
                  <h1>TODO: SHOW FOR LARGE</h1>
                  <div>
                    <div
                      style={[
                        styles.flow.icons.base,
                        styles.flow.icons.i2
                      ]}
                    >
                      <Icon color={colors.primary} kind="diagram" size={128} />
                    </div>
                    <RadiumPoint size={20} top={230} />
                    <RadiumPoint size={10} top={280} />
                  </div>
                </div>
                <div style={styles.flow.items.i2}>
                  <Heading kind="h3" style={styles.flow.heading1}>
                    2. {msg('workflow.strategy.heading')}
                  </Heading>
                  <p>{msg('workflow.strategy.text')}</p>
                </div>
              </li>

              <li>
                <div style={styles.flow.items.right}>
                  <div>
                    <h1>TODO: SHOW FOR LARGE</h1>
                    <div>
                      <div
                        style={[
                          styles.flow.icons.base,
                          styles.flow.icons.i3
                        ]}
                      >
                        <Icon color={colors.primary} kind="product" size={64} />
                      </div>
                      <RadiumPoint size={20} top={10} circle />
                    </div>
                  </div>
                  <div style={styles.flow.items.i3}>
                    <Heading kind="h3" style={styles.flow.heading1}>
                      3. {msg('workflow.ux.heading')}
                    </Heading>
                    <p>{msg('workflow.ux.text')}</p>
                  </div>
                </div>
                <ol style={styles.flow.list}>
                  <li style={styles.flow.items.left}>
                    <div>
                      <h1>TODO: SHOW FOR LARGE</h1>
                      <div>
                        <RadiumPoint size={20} top={10} circle />
                        <RadiumPoint size={30} top={100} />
                        <RadiumPoint size={10} top={160} />
                      </div>
                    </div>
                    <div style={styles.flow.items.i31}>
                      <div>
                        <h1>TODO: SHOW FOR LARGE</h1>
                        <Icon
                          color={colors.primary}
                          kind="prototype"
                          size={80}
                          style={{ position: 'absolute', left: '-100px', top: '-10px' }}
                        />
                      </div>
                      <Heading kind="h4" style={styles.flow.heading2}>
                        3.1 {msg('workflow.research.heading')}
                      </Heading>
                      <p>{msg('workflow.research.text')}</p>
                    </div>
                  </li>
                  <li style={styles.flow.items.right}>
                    <div style={styles.flow.items.i32}>
                      <div>
                        <h1>TODO: SHOW FOR LARGE</h1>
                        <Icon
                          color={colors.primary}
                          kind="reactbulb"
                          size={80}
                          style={{ position: 'absolute', left: '-100px', top: '-10px' }}
                        />
                      </div>
                      <Heading kind="h4" style={styles.flow.heading2}>
                        3.2 {msg('workflow.idea.heading')}
                      </Heading>
                      <p>{msg('workflow.idea.text')}</p>
                    </div>
                  </li>
                  <li style={styles.flow.items.left}>
                    <div>
                      <h1>TODO: SHOW FOR LARGE</h1>
                      <div>
                        <RadiumPoint size={30} top={10} />
                        <RadiumPoint size={10} top={60} />
                      </div>
                    </div>
                    <div style={styles.flow.items.i33}>
                      <div>
                        <h1>TODO: SHOW FOR LARGE</h1>
                        <Icon
                          color={colors.primary}
                          kind="prototype"
                          size={80}
                          style={{ position: 'absolute', left: '-100px', top: '-10px' }}
                        />
                      </div>
                      <Heading kind="h4" style={styles.flow.heading2}>
                        3.3 {msg('workflow.prototype.heading')}
                      </Heading>
                      <p>{msg('workflow.prototype.text')}</p>
                    </div>
                  </li>
                </ol>
              </li>

              <li style={styles.flow.items.right}>
                <div>
                  <h1>TODO: SHOW FOR LARGE</h1>
                  <div>
                    <div
                      style={[
                        styles.flow.icons.base,
                        styles.flow.icons.i4
                      ]}
                    >
                      <Icon color={colors.primary} kind="agile" size={110} />
                    </div>
                  </div>
                </div>
                <div style={styles.flow.items.i4}>
                  <Heading kind="h3" style={styles.flow.heading1}>
                    4. {msg('workflow.agile.heading')}
                  </Heading>
                  <p>{msg('workflow.agile.text1')}</p>
                  <p>{msg('workflow.agile.text2')}</p>
                </div>
              </li>
            </ol>
          </div>
        </Container>
      </Element>
    );
  }
}

const styles = {
  container: {
    wrapper: {
      minHeight: '100vh',
    }
  },

  heading: {
    small: {
      small: {
        fontSize: em(26, 91),
        top: em(10, 26),
        left: em(35, 26)
      },
      line: {
        marginLeft: em(8, 26),
        width: em(90, 26),
        top: em(9, 26),
      }
    }
  },

  flow: {
    wrapper: {
      position: 'relative'
    },
    list: {
      listStyle: 'none',
      padding: 0
    },
    line: {
      backgroundColor: '#eee',
      bottom: 0,
      left: '50%',
      position: 'absolute',
      top: 0,
      width: '1px'
    },
    heading1: {
      marginTop: rem(28),
      marginBottom: rem(20),
      fontSize: `${rem(40)} !important`,
    },
    heading2: {
      marginTop: rem(14),
      marginBottom: rem(20),
      fontSize: `${rem(20)} !important`,
    },
    icons: {
      base: {
        backgroundColor: '#fff',
        borderColor: colors.primary,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: '1px',
        display: 'inline-block',
        left: '50%',
        position: 'absolute',
        textAlign: 'center',
        transform: 'translateX(-50%)'
      },
      right: {},
      i1: {
        borderWidth: '2px',
        height: '82px',
        paddingTop: '10px',
        width: '82px'
      },
      i2: {
        borderWidth: '2px',
        height: '180px',
        paddingTop: '28px',
        width: '180px'
      },
      i3: {
        borderColor: '#ccc',
        height: '100px',
        paddingTop: '18px',
        width: '100px'
      },
      i4: {
        borderColor: '#ddd',
        height: '180px',
        paddingTop: '28px',
        bottom: 0,
        width: '180px'
      }
    },
    point: {
      base: {
        backgroundColor: colors.primary,
        borderRadius: '50%',
        position: 'absolute'
      }
    },
    items: {
      left: {
        position: 'relative',
        [media.m]: {
          paddingRight: '50%'
        }
      },
      right: {
        position: 'relative',
        [media.m]: {
          paddingLeft: '50%'
        }
      },
      i1: {
        marginTop: '64px',
        [media.m]: {
          paddingBottom: '50px',
          marginLeft: '98px',
          marginTop: '-64px'
        }
      },
      i2: {
        [media.m]: {
          marginRight: '108px',
          paddingBottom: '50px'
        }
      },
      i3: {
        [media.m]: {
          marginLeft: '98px',
          paddingBottom: '20px'
        }
      },
      i31: {
        [media.m]: {
          marginLeft: '98px',
          marginRight: '42px',
          position: 'relative'
        }
      },
      i32: {
        [media.m]: {
          marginLeft: '188px',
          marginTop: '-64px',
          position: 'relative'
        }
      },
      i33: {
        [media.m]: {
          marginLeft: '98px',
          marginRight: '42px',
          position: 'relative'
        }
      },
      i4: {
        [media.m]: {
          marginLeft: '140px',
          marginTop: '-64px'
        }
      }
    }
  }
};
