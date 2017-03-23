import Button, { BUTTON_KIND_GHOST_LIGHT, BUTTON_SIZE_LARGE } from '../../components/Button.react';
import Component from 'react-pure-render/component';
import Layout from '../../layouts/General.react';
import Link from '../../components/Link.react';
import listenWindowResize, { Device } from '../../../server/frontend/listenWindowResize.react';
import Radium from 'radium';
import React, { PropTypes } from 'react';
import translate from 'ts-translate';
import {
  ContactForm,
  Container,
  Heading,
  Icon,
  ProjectIntro
} from '../../components';
import {
  colors,
  media
} from '../../globals';

@listenWindowResize
@translate()
@Radium
export default class Itsounds extends Component {

  static propTypes = {
    device: PropTypes.instanceOf(Device).isRequired,
    msg: React.PropTypes.func.isRequired
  }

  renderCircle(key, icon, iconPlaceholder, fixedWidth) {
    const { msg } = this.props;

    return (
      <li key={key} style={[styles.circles.item.base, fixedWidth && styles.circles.item.fixedWidth]}>
        <div style={styles.circles.item.icon}>
          {icon && <Icon color={colors.primary} kind={icon} size={80} />}
          {iconPlaceholder &&
            <div style={styles.circles.item.string}>{iconPlaceholder}</div>
          }
        </div>
        <Heading kind="h4" style={styles.circles.item.heading}>
          {msg(`work.detail.itsounds.client.${key}`)}
        </Heading>
      </li>
    );
  }

  renderAboutClient() {
    const { msg } = this.props;

    return (
      <div style={styles.aboutClient.wrapper}>
        <Container>
          <div style={styles.aboutClient.topWrapper}>
            <div style={styles.aboutClient.content}>
              <Heading kind="h2" style={styles.aboutClient.heading}>{msg('work.detail.itsounds.client.head')}</Heading>
              <p style={styles.paragraph}>{msg('work.detail.itsounds.client.text')}</p>
            </div>
            <img
              style={styles.aboutClient.image}
              src={require('./images/itsounds.png')}
              alt={msg('work.detail.itsounds.heading')}
            />
          </div>

          <div style={styles.circles.wrapper}>
            <Heading kind="h3" style={styles.circles.heading}>
              {msg('work.detail.itsounds.client.subheading')}
            </Heading>
            <ul style={styles.circles.base}>
              {this.renderCircle('sandglass', 'sandglass')}
              {this.renderCircle('strategy', 'diagram')}
              {this.renderCircle('frontend', 'frontend')}
              {this.renderCircle('design', 'product')}
            </ul>
          </div>
        </Container>
      </div>
    );
  }

  renderAboutProject() {
    const { msg } = this.props;

    return (
      <div style={styles.aboutProject.wrapper}>
        <Container>
          <div style={styles.aboutProject.projectA.wrapper}>
            <Heading kind="h2" style={styles.aboutProject.projectA.heading}>
              {msg('work.detail.itsounds.project.heading')}
            </Heading>
            <p style={styles.paragraph}>{msg('work.detail.itsounds.project.text1')}</p>
          </div>
          <img src={require('./images/challenge-1.jpg')} style={styles.aboutProject.projectA.image} />
          <p style={styles.aboutProject.projectA.image2Wrapper}>
            <img src={require('./images/challenge-2.jpg')} style={styles.aboutProject.projectA.image2} />
          </p>
        </Container>

        <Container>
          <div style={styles.aboutProject.projectB.wrapper}>
            <Heading kind="h2" style={styles.aboutProject.projectA.heading}>
              {msg('work.detail.itsounds.project.subheading')}
            </Heading>
            <p style={styles.paragraph}>{msg('work.detail.itsounds.project.text2')}</p>
          </div>
          <p style={styles.aboutProject.projectB.imageWrapper}>
            <img src={require('./images/solution-1.jpg')} style={styles.aboutProject.projectB.image1} />
            <img src={require('./images/solution-2.jpg')} style={styles.aboutProject.projectB.image2} />
          </p>
        </Container>
      </div>
    );
  }

  render() {
    const { msg } = this.props;


    return (
      <Layout>
        <div id="itsoundsDetail" style={styles.wrapper}>
          <ProjectIntro
            buttonKind={BUTTON_KIND_GHOST_LIGHT}
            color="linear-gradient(309deg, #313232 0%, #222222 100%)"
            image={require('./images/intro.png')}
            link={msg('work.detail.itsounds.url')}
            linkTitle={msg('work.detail.itsounds.link')}
            style={styles.intro}
            title={msg('work.detail.itsounds.heading')}
          >
            {msg('work.detail.itsounds.perex')}
          </ProjectIntro>

          {this.renderAboutClient()}
          {this.renderAboutProject()}

          <div style={styles.circles.wrapper}>
            <Heading kind="h3" style={styles.circles.heading}>
              {msg('work.detail.itsounds.technology')}
            </Heading>
            <ul style={styles.circles.base}>
              {this.renderCircle('saas', 'saas')}
              {this.renderCircle('rails', 'rails')}
              {this.renderCircle('invision', 'invision')}
            </ul>
          </div>

          <div style={styles.banner.wrapper}>
            <div style={styles.banner.text}>
              {msg('work.detail.itsounds.live.text')}
            </div>
            <Link to={msg('work.detail.itsounds.url')} target="_blank">
              <Button kind={BUTTON_KIND_GHOST_LIGHT} size={BUTTON_SIZE_LARGE} style={styles.banner.button}>{msg('work.detail.itsounds.live.link')}</Button>
            </Link>
          </div>

          <Container style={styles.container}>
            <Heading>
              {msg('work.detail.itsounds.hire')}
            </Heading>
          </Container>

          <Container style={{ margin: '128px auto' }}>
            <ContactForm />
          </Container>

        </div>
      </Layout>
    );
  }
}

const styles = {
  container: {
    margin: '240px auto 64px',
    maxWidth: '720px',
    textAlign: 'center'
  },
  intro: {
    container: {
      maxWidth: '1100px',
      position: 'relative'
    },
    wrapper: {
      padding: '128px 24px 128px',
      [media.l]: {
        padding: '178px 24px 98px',
        height: '768px',
      }
    },
    image: {
      width: '50%',
      boxShadow: '19px 20px 84px 32px rgba(0,0,0,0.2)',
      [media.m]: {
        width: '70%',
        left: '50%',
        top: '0px',
      },
      [media.l]: {
        width: 'auto',
        top: '-31px',
      }
    }
  },
  paragraph: {
    color: colors.gray
  },
  aboutClient: {
    wrapper: {
      padding: '32px',
      '@media screen and (min-width: 920px)': {
        paddingBottom: '128px'
      },
      [media.l]: {
        padding: '128px 0'
      },
    },
    topWrapper: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: '50px',
      [media.m]: {
        marginBottom: '150px'
      }
    },
    content: {
      paddingLeft: 0,
      position: 'relative',
      [media.m]: {
        paddingLeft: '15px',
        float: 'left',
        width: '50%'
      }
    },
    heading: {
      marginTop: '16'
    },
    image: {
      margin: '0 auto',
      paddingLeft: 0,
      paddingRight: 0,
      width: '120px',
      [media.m]: {
        width: 'auto',
        float: 'left'
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
        marginLeft: '50%',
        marginTop: 0,
        minHeight: '480px',
        width: '50%',
        '@media screen and (max-width: 920px)': {
          width: '100%',
          minHeight: 0,
          marginLeft: 0,
        }
      },
      heading: {
        marginTop: 0,
        [media.m]: {
          marginTop: '45px',
        }
      },
      image: {
        position: 'absolute',
        top: '-125px',
        right: '53%',
        boxShadow: '-59px 10px 86px 26px rgba(0,0,0,0.17)',
        '@media screen and (max-width: 920px)': {
          margin: '0 auto',
          height: 'auto',
          position: 'static',
          display: 'block',
          maxWidth: 'calc(100% - 64px)',
        }
      },
      image2Wrapper: {
        marginTop: '200px',
        textAlign: 'center',
        '@media screen and (max-width: 920px)': {
          marginTop: '50px',
          padding: '0 32px'
        }
      },
      image2: {
        maxWidth: '100%'
      }
    },
    projectB: {
      wrapper: {
        marginTop: '320px',
        padding: '28px 32px',
        minHeight: '660px',
        width: '50%',
        '@media screen and (max-width: 920px)': {
          marginTop: '50px',
          padding: '32px',
          minHeight: 0,
          width: '100%'
        }
      },
      imageWrapper: {
        paddingLeft: '7.2%',
        position: 'absolute',
        top: '-80px',
        left: '54%',
        '@media screen and (max-width: 920px)': {
          margin: '0 auto',
          padding: '0 32px 0 64px',
          maxWidth: '100%',
          height: 'auto',
          position: 'relative',
          top: '0',
          left: '0',
          display: 'block',
        }
      },
      image1: {
        boxShadow: '31px 30px 65px 3px rgba(0,0,0,0.17)',
        '@media screen and (max-width: 920px)': {
          maxWidth: '100%'
        }
      },
      image2: {
        position: 'absolute',
        left: '0',
        top: '12px',
        boxShadow: '30px 2px 60px 4px rgba(0,0,0,0.17)',
        '@media screen and (max-width: 920px)': {
          maxWidth: '31%',
          left: '32px'
        },
        '@media screen and (max-width: 768px)': {
          maxWidth: '26%'
        }
      }
    }
  },
  banner: {
    wrapper: {
      color: 'white',
      padding: '90px 15px 80px',
      textAlign: 'center',
      background: 'linear-gradient(309deg, #313232 0%, #222222 100%)'
    },
    text: {
      display: 'block',
      fontSize: '37px',
      fontWeight: 600,
      [media.m]: {
        marginRight: '.5em',
        marginLeft: '.5em',
        display: 'inline-block',
      }
    },
    button: {
      marginRight: '.5em',
      marginLeft: '.5em',
    }
  },
  circles: {
    wrapper: {
      clear: 'both',
      padding: '32px',
      position: 'relative',
      [media.m]: {
        marginTop: '-64px'
      }
    },
    heading: {
      fontSize: '1.55em',
      textAlign: 'center',
      [media.s]: {
        fontSize: '1.65em',
      }
    },
    base: {
      listStyle: 'none',
      marginTop: '48px',
      padding: 0,
      [media.m]: {
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
      }
    },
    item: {
      base: {
        marginBottom: '48px',
        padding: '0 32px',
        textAlign: 'center',
        position: 'relative',
        [media.m]: {
          flex: '0 1 auto'
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
      string: {
        color: colors.primary,
        fontSize: '74px',
        lineHeight: '146px',
        verticalAlign: 'middle'
      },
      heading: {
        fontSize: '1.05em',
        [media.s]: {
          fontSize: '1.15em',
        }
      }
    }
  }
};
