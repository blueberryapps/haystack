import Button, { BUTTON_KIND_GHOST_LIGHT } from '../../components/Button.react';
import Component from 'react-pure-render/component';
import Layout from '../../layouts/General.react';
import Link from '../../components/Link.react';
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
export default class MeatAndBones extends Component {

  static propTypes = {
    device: PropTypes.instanceOf(Device).isRequired,
    msg: React.PropTypes.func.isRequired
  }

  renderCircle(key, icon, iconPlaceholder) {
    const { msg } = this.props;

    return (
      <li key={key} style={styles.circles.item.base}>
        <div style={styles.circles.item.icon}>
          {icon && <Icon color={colors.primary} kind={icon} size={80} />}
          {iconPlaceholder &&
            <div style={styles.circles.item.string}>{iconPlaceholder}</div>
          }
        </div>
        <Heading kind="h4" style={styles.circles.item.heading}>
          {msg(`work.detail.meatandbones.client.${key}`)}
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
            <Heading kind="h2">
              {msg('work.detail.meatandbones.client.heading')}
            </Heading>
            <p>{msg('work.detail.meatandbones.client.text')}</p>
          </div>
          <Image
            style={styles.aboutClient.image}
            src={require('./images/meat-and-bones.jpg')}
          />
          <div style={[styles.circles.wrapper, styles.aboutClient.circles]}>
            <Heading kind="h3" style={styles.circles.heading}>
              {msg('work.detail.meatandbones.client.subheading')}
            </Heading>
            <ul style={styles.circles.base}>
              {this.renderCircle('going', null, '1')}
              {this.renderCircle('frontend', 'frontend')}
              {this.renderCircle('backend', 'backend')}
              {this.renderCircle('ux', 'reactbulb')}
              {this.renderCircle('design', 'product')}
              {this.renderCircle('strategy', 'diagram')}
              {this.renderCircle('marketing', 'strategy')}
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
          <Image src={require('./images/screen.jpg')} style={{ maxWidth: 'calc(100% - 32px)' }} />
        </Container>

        <Container>
          {device.atLeast('l') &&
          <Image
            style={styles.aboutProject.projectA.image}
            src={require('./images/form.jpg')}
          />}
          <div style={styles.aboutProject.projectA.wrapper}>
            <Heading kind="h2">
              {msg('work.detail.meatandbones.project.heading')}
            </Heading>
            <p>{msg('work.detail.meatandbones.project.text')}</p>
          </div>
        </Container>

        <Container>
          <div style={styles.aboutProject.projectB.wrapper}>
            <Heading kind="h2">{msg('work.detail.meatandbones.project.subheading')}</Heading>
            <p>{msg('work.detail.meatandbones.project.subtext1')}</p>
            <p>{msg('work.detail.meatandbones.project.subtext2')}</p>
            <p>{msg('work.detail.meatandbones.project.subtext3')}</p>
          </div>
          {device.atLeast('l') &&
          <Image
            style={styles.aboutProject.projectB.image}
            src={require('./images/web.jpg')}
          />}
        </Container>
      </div>
    );
  }

  render() {
    const { msg } = this.props;

    return (
      <Layout>
        <div id="meatandbonesDetail" style={styles.wrapper}>
          <ProjectIntro
            buttonBlendColor="#6eb01e"
            buttonKind={BUTTON_KIND_GHOST_LIGHT}
            color="#57a322"
            image={require('../../components/cards/images/meatandbones.jpg')}
            link={msg('work.detail.meatandbones.url')}
            linkTitle={msg('work.detail.meatandbones.link')}
            style={styles.intro}
            title={msg('work.detail.meatandbones.heading')}
          >
            {msg('work.detail.meatandbones.perex')}
          </ProjectIntro>

          {this.renderAboutClient()}

          {this.renderAboutProject()}

          <div style={styles.circles.wrapper}>
            <Heading kind="h3" style={styles.circles.heading}>
              {msg('work.detail.meatandbones.technology')}
            </Heading>
            <ul style={styles.circles.base}>
              {this.renderCircle('react', 'react')}
              {this.renderCircle('rails', 'rails')}
              {this.renderCircle('stripe', 'stripe')}
            </ul>
          </div>
          <Image src={require('./images/separator.jpg')} style={styles.banner.wrapper}>
            <div style={styles.banner.text}>
              {msg('work.detail.meatandbones.live.text')}
            </div>
            <Link to={msg('work.detail.meatandbones.url')} target="_blank">
              <Button kind={BUTTON_KIND_GHOST_LIGHT}>{msg('work.detail.meatandbones.live.link')}</Button>
            </Link>
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
      marginLeft: '-20px',
      marginTop: '-50px'
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
    circles: {
      paddingTop: '128px'
    }
  },
  aboutProject: {
    wrapper: {
      clear: 'both',
      position: 'relative'
    },
    projectA: {
      wrapper: {
        padding: '32px',
        [media.m]: {
          marginLeft: '50%',
          marginTop: '64px',
          minHeight: '480px',
          padding: '64px 32px',
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
          minHeight: '920px',
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
      padding: '48px 0',
      textAlign: 'center'
    },
    text: {
      display: 'inline-block',
      fontSize: '24px',
      marginRight: '1em'
    }
  },
  circles: {
    wrapper: {
      clear: 'both',
      padding: '32px',
      position: 'relative',
      [media.m]: {
        marginTop: '-128px'
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
  },
  contactForm: {
    margin: '128px auto'
  }
};
