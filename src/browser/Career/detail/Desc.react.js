import Container from '../../components/Container.react';
import { Heading, HeadingSmall, HeadingHighlight } from '../../components/heading';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, media, em } from '../../globals';
import { Flex, Box } from 'radium-flex'; // eslint-disable-line import/named

@translate('career.detail')
@Radium
export default class Desc extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired,
    position: RPT.object.isRequired,
  }

  render() {
    const { msg, position } = this.props;

    return (
      <Container kind="slim" style={styles.desc.container}>
        <Flex>
          <Box xs={12} md={6}>
            <Heading kind="h3" style={styles.desc.heading}>
              <span>{msg('expect.text_1')} </span>
              <HeadingHighlight>
                {msg('expect.text_2')}
              </HeadingHighlight>
            </Heading>
            <p>{position.job_desc}</p>
          </Box>
          <Box xs={12} md={6}>
            <Heading kind="h3" style={styles.desc.heading}>
              <span>{msg('culture.heading.text_1')} </span>
              <HeadingHighlight style={styles.desc.heading.text}>
                {msg('culture.heading.text_2')}
              </HeadingHighlight>
            </Heading>
            <p>{msg('culture.text')}</p>
          </Box>
        </Flex>
        {position.projects_desc !== '' &&
          <div>
            <Heading kind="h3" style={styles.projectDesc.heading}>
              <HeadingSmall style={styles.projectDesc.heading.small}>
                {msg('working.small')}
              </HeadingSmall>
              <span> {msg('working.text_1')} </span>
              <HeadingHighlight>
                {msg('working.text_2')}
              </HeadingHighlight>
            </Heading>
            <p>{position.projects_desc}</p>
          </div>
        }
        {
          position.projects.length !== 0 &&
          <ul style={styles.logos.wrapper}>
            {position.projects.map(project =>
              <li style={styles.logos.item} key={project}>
                <img
                  src={require(`../images/projects/${project}.jpg`)}
                  alt={project} style={styles.logos.img}
                />
              </li>
            )}
          </ul>
        }
      </Container>
    );
  }
}

const styles = {
  desc: {
    container: {
      margin: '0 auto 50px',
      fontSize: '18px',
      fontWeight: '400',
      color: colors.gray
    },
    heading: {
      marginTop: '30px',
      marginBottom: '30px',
      text: {
        line: {
          width: em(52, 65),
          right: em(4, 65)
        }
      }
    }
  },
  projectDesc: {
    heading: {
      marginTop: '30px',
      marginBottom: '30px',
      small: {
        small: {
          fontSize: em(27, 65),
          top: em(2, 27),
          left: em(1, 27)
        },
        line: {
          marginLeft: em(11, 27),
          width: em(52, 27)
        }
      }
    }
  },
  logos: {
    wrapper: {
      margin: '50px -15px 0',
      padding: '0',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      listStyle: 'none',
      [media.m]: {
        flexWrap: 'nowrap',
        justifyContent: 'space-between',
      }
    },
    item: {
      padding: '0 15px',
    },
    img: {
      maxWidth: '100%',
      maxHeight: '70px',
      display: 'block',
      [media.s]: {
        maxHeight: 'none'
      }
    }
  },
};
