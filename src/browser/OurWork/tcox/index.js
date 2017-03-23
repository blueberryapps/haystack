import Button, { BUTTON_KIND_GHOST_LIGHT } from '../../components/Button.react';
import Component from 'react-pure-render/component';
import Layout from '../../layouts/General.react';
import listenWindowResize, { Device } from '../../../server/frontend/listenWindowResize.react';
import Radium from 'radium';
import React, { PropTypes } from 'react';
import translate from 'ts-translate';
import { HEADING_CONTAINER_KIND_HIRE_US } from '../../components/HeadingContainer.react';
import {
  ContactForm,
  Container,
  Heading,
  Icon,
  Image,
  ProjectIntro
} from '../../components';
import {
  colors,
  media
} from '../../globals';

@listenWindowResize
@translate()
@Radium
export default class Tcox extends Component {

  static propTypes = {
    device: PropTypes.instanceOf(Device).isRequired,
    msg: React.PropTypes.func.isRequired
  }

  renderAboutClient() {
    const { msg } = this.props;

    return (
      <div style={styles.aboutClient.wrapper}>
        <Container>
          <div style={styles.aboutClient.content}>
            <Heading kind="h2">{msg('work.detail.tcox.client.heading')}</Heading>
            <p>{msg('work.detail.tcox.client.text')}</p>
          </div>
          <Image
            style={styles.aboutClient.image}
            src={require('./images/taylorcox.jpg')}
          />

          <div style={styles.aboutClient.list.wrapper}>
            <Heading kind="h3" style={styles.aboutClient.list.heading}>
              {msg('work.detail.tcox.client.subheading')}
            </Heading>
            <ul style={styles.aboutClient.list.base}>
              <li style={styles.aboutClient.list.item.base}>
                <div style={styles.aboutClient.list.item.icon}>
                  <Icon color={colors.primary} kind="boost" size={80} />
                </div>
                <Heading kind="h4" style={styles.aboutClient.list.item.heading}>
                  {msg('work.detail.tcox.client.going')}
                </Heading>
                <p>{msg('work.detail.tcox.client.goingText')}</p>
              </li>
              <li style={styles.aboutClient.list.item.base}>
                <div style={styles.aboutClient.list.item.icon}>
                  <Icon color={colors.primary} kind="agile" size={80} />
                </div>
                <Heading kind="h4" style={styles.aboutClient.list.item.heading}>
                  {msg('work.detail.tcox.client.agile')}
                </Heading>
                <p>{msg('work.detail.tcox.client.agileText')}</p>
              </li>
              <li style={styles.aboutClient.list.item.base}>
                <div style={styles.aboutClient.list.item.icon}>
                  <Icon color={colors.primary} kind="reactbulb" size={80} />
                </div>
                <Heading kind="h4" style={styles.aboutClient.list.item.heading}>
                  {msg('work.detail.tcox.client.development')}
                </Heading>
                <p>{msg('work.detail.tcox.client.developmentText')}</p>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    );
  }

  renderAboutProject() {
    const { device, msg } = this.props;

    return (
      <div style={styles.aboutProject.wrapper}>
        <Container>
          {device.atLeast('l') &&
          <Image
            style={styles.aboutProject.projectA.image}
            src={require('./images/taylorcox_a.png')}
          />}
          <div style={styles.aboutProject.projectA.wrapper}>
            <Heading kind="h2">{msg('work.detail.tcox.project.heading')}</Heading>
            <p>{msg('work.detail.tcox.project.text')}</p>
          </div>
        </Container>

        <Container>
          <div style={styles.aboutProject.projectB.wrapper}>
            <Heading kind="h2">
              {msg('work.detail.tcox.project.subheading')}
            </Heading>
            <p>{msg('work.detail.tcox.project.subtext1')}</p>
            <p>{msg('work.detail.tcox.project.subtext2')}</p>
          </div>
          {device.atLeast('l') &&
          <Image
            style={styles.aboutProject.projectB.image}
            src={require('./images/taylorcox_b.png')}
          />}
        </Container>
      </div>
    );
  }

  render() {
    const { msg } = this.props;

    return (
      <Layout>
        <div id="tcoxDetail" style={styles.wrapper}>
          <ProjectIntro
            color="#bc2632"
            image={require('../../components/cards/images/tayllorcox.png')}
            linkTitle={msg('work.detail.tcox.link')}
            style={styles.intro}
            title={msg('work.detail.tcox.heading')}
          >
            {msg('work.detail.tcox.perex')}
          </ProjectIntro>

          {this.renderAboutClient()}

          {this.renderAboutProject()}

          <Image src={require('./images/banner.jpg')} style={styles.banner.wrapper}>
            <div style={styles.banner.text}>
              {msg('work.detail.tcox.live.text')}
            </div>
            <Button kind={BUTTON_KIND_GHOST_LIGHT}>
              {msg('work.detail.tcox.live.link')}
            </Button>
          </Image>
          <Container style={styles.contactForm}>
            <ContactForm headingContainerKind={HEADING_CONTAINER_KIND_HIRE_US} />
          </Container>
        </div>
      </Layout>
    );
  }

}

const styles = {
  intro: {
    image: {
      marginLeft: '-200px',
      marginTop: '-160px'
    }
  },
  aboutClient: {
    wrapper: {
      padding: '32px',
      [media.m]: {
        padding: '128px 0'
      }
    },
    content: {
      paddingLeft: '32px',
      position: 'relative',
      [media.m]: {
        float: 'left',
        width: '50%'
      }
    },
    image: {
      float: 'left',
      marginLeft: '64px',
      width: '65%',
      [media.m]: {
        maxWidth: '40%'
      }
    },
    list: {
      wrapper: {
        clear: 'both',
        padding: '32px',
        [media.m]: {
          padding: '128px 0 32px'
        }
      },
      heading: {
        fontSize: '1.65em',
        textAlign: 'center',
        [media.s]: {
          fontSize: '1.75em',
        }
      },
      base: {
        listStyle: 'none',
        marginTop: '48px',
        padding: 0,
        [media.m]: {
          display: 'flex'
        }
      },
      item: {
        base: {
          padding: '0 32px',
          textAlign: 'center',
          width: '100%',
          [media.m]: {
            width: '33.3%'
          }
        },
        icon: {
          borderColor: colors.grayLightest,
          borderRadius: '50%',
          borderStyle: 'solid',
          borderWidth: '2px',
          display: 'inline-block',
          height: '146px',
          lineHeight: '210px',
          textAlign: 'center',
          width: '146px'
        },
        heading: {
          fontSize: '1.15em',
          [media.s]: {
            fontSize: '1.25em',
          }
        }
      }
    }
  },
  aboutProject: {
    wrapper: {
      clear: 'both'
    },
    projectA: {
      wrapper: {
        padding: '32px',
        [media.m]: {
          marginLeft: '50%',
          minHeight: '640px',
          padding: '32px',
          width: '50%',
        }
      },
      image: {
        maxWidth: '56%',
        position: 'absolute',
        right: '53%'
      }
    },
    projectB: {
      wrapper: {
        padding: '32px',
        [media.m]: {
          minHeight: '640px',
          padding: '0 32px',
          width: '50%',
        }
      },
      image: {
        left: '53%',
        maxWidth: '59%',
        position: 'absolute',
        top: 0
      }
    }
  },
  banner: {
    wrapper: {
      color: 'white',
      padding: '48px 0',
      textAlign: 'center'
    },
    text: {
      display: 'inline-block',
      fontSize: '24px',
      marginRight: '1em'
    }
  },
  contactForm: {
    margin: '128px auto'
  }
};
