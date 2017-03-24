import Button, { BUTTON_KIND_GHOST_LIGHT } from '../../components/Button.react';
import Layout from '../../layouts/General.react';
import Link from '../../components/Link.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import HideBox from '../../components/HideBox.react';
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

@translate('work.detail.elevate')
@Radium
export default class Elevate extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
  }

  renderCircle(key, icon, iconPlaceholder) {
    const { msg } = this.props;

    return (
      <li key={key} style={styles.circles.item.base}>
        <div style={styles.circles.item.icon}>
          {icon && <Icon color={colors.primary} kind={icon} size={97} style={styles.circles.item.iconEl} />}
          {iconPlaceholder &&
            <div style={styles.circles.item.string}>{iconPlaceholder}</div>
          }
        </div>
        <Heading kind="h4" style={styles.circles.item.heading}>
          {msg(`client.${key}`)}
        </Heading>
      </li>
    );
  }

  renderAboutClient() {
    const { msg } = this.props;

    return (
      <div style={styles.aboutClient.wrapper}>
        <Container>
          <div style={styles.aboutClient.content}>
            <Heading kind="h2">{msg('client.heading')}</Heading>
            <p style={styles.default.textGray}>{msg('client.text')}</p>
          </div>
          <Image
            style={styles.aboutClient.image}
            src={require('./images/elevate.jpg')}
          />

          <div style={styles.circles.wrapper}>
            <Heading kind="h3" style={styles.circles.heading}>
              {msg('client.subheading')}
            </Heading>
            <ul style={styles.circles.base}>
              {this.renderCircle('going', null, '2')}
              {this.renderCircle('frontend', 'frontend')}
              {this.renderCircle('backend', 'backend')}
              {this.renderCircle('ux', 'reactbulb')}
              {this.renderCircle('design', 'product')}
              {this.renderCircle('strategy', 'diagram')}
              {this.renderCircle('app', 'prototype')}
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
          <Image src={require('./images/screen.jpg')} style={{ maxWidth: 'calc(100% - 32px)' }} />
        </Container>

        <Container>
          <HideBox col={0} sm={12}>
            <Image
              style={styles.aboutProject.projectA.image}
              src={require('./images/challenge.png')}
            />
          </HideBox>
          <div style={styles.aboutProject.projectA.wrapper}>
            <Heading kind="h2">
              {msg('project.heading')}
            </Heading>
            <p style={styles.default.textGray}>{msg('project.text')}</p>
          </div>
        </Container>

        <Container>
          <div style={styles.aboutProject.projectB.wrapper}>
            <Heading kind="h2">
              {msg('project.subheading')}
            </Heading>
            <p style={styles.default.textGray}>{msg('project.subtext1')}</p>
            <p style={styles.default.textGray}>{msg('project.subtext2')}</p>
          </div>
          <HideBox col={0} sm={12}>
            <Image
              style={styles.aboutProject.projectB.image}
              src={require('./images/mobile.jpg')}
            />
          </HideBox>
        </Container>
      </div>
    );
  }

  render() {
    const { msg } = this.props;

    return (
      <Layout>
        <div id="elevateDetail">
          <ProjectIntro
            buttonBlendColor="#42b583"
            buttonKind={BUTTON_KIND_GHOST_LIGHT}
            color="#00b79a"
            image={require('./images/intro.png')}
            link={msg('url')}
            linkTitle={msg('link')}
            style={styles.intro}
            title={msg('heading')}
          >
            {msg('perex')}
          </ProjectIntro>

          {this.renderAboutClient()}

          {this.renderAboutProject()}

          <div style={styles.circles.wrapper}>
            <Heading kind="h3" style={styles.circles.heading}>
              {msg('technology')}
            </Heading>
            <ul style={[styles.circles.base, styles.circles.slim]}>
              {this.renderCircle('react', 'react')}
              {this.renderCircle('rails', 'rails')}
              {this.renderCircle('angular', 'angular')}
              {this.renderCircle('rubymotion', 'rubymotion')}
            </ul>
          </div>

          <Image src={require('./images/separator.jpg')} style={styles.banner.wrapper}>
            <div style={styles.banner.text}>
              {msg('live.text')}
            </div>
            <Link to={msg('url')} target="_blank">
              <Button kind={BUTTON_KIND_GHOST_LIGHT} size="large">
                {msg('live.link')}
              </Button>
            </Link>
          </Image>

          <Container style={styles.container}>
            <Heading>
              {msg('hire')}
            </Heading>
          </Container>

          <Container style={styles.contactForm}>
            <ContactForm />
          </Container>

        </div>
      </Layout>
    );
  }

}

const styles = {
  default: {
    textGray: {
      color: colors.gray
    }
  },
  container: {
    margin: '240px auto 64px',
    maxWidth: '720px',
    textAlign: 'center'
  },
  intro: {
    image: {
      marginLeft: '-100px',
      marginTop: '-100px',
      maxHeight: '960px'
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
          marginTop: '64px',
          minHeight: '640px',
          padding: '128px 32px',
          width: '50%',
        }
      },
      image: {
        position: 'absolute',
        right: '53%'
      }
    },
    projectB: {
      wrapper: {
        padding: '32px',
        [media.m]: {
          minHeight: '740px',
          padding: '128px 32px',
          width: '50%',
        }
      },
      image: {
        left: '53%',
        position: 'absolute',
        top: 0
      }
    }
  },
  banner: {
    wrapper: {
      color: 'white',
      padding: '80px 0',
      textAlign: 'center'
    },
    text: {
      display: 'inline-block',
      fontSize: '34px',
      fontWeight: '600',
      margin: '0 1em'
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
    slim: {
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: '1400px'
    },
    item: {
      base: {
        marginBottom: '48px',
        padding: '0 32px',
        textAlign: 'center',
        position: 'relative',
        width: '100%',
        [media.m]: {
          flex: '0 1 auto',
          flexBasis: '25%',
          width: '25%'
        }
      },
      icon: {
        borderColor: colors.grayLightest,
        borderRadius: '50%',
        borderStyle: 'solid',
        borderWidth: '2px',
        display: 'inline-block',
        height: '146px',
        lineHeight: '146px',
        textAlign: 'center',
        width: '146px'
      },
      iconEl: {
        verticalAlign: 'middle'
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
  },
  contactForm: {
    margin: '128px auto'
  }
};
