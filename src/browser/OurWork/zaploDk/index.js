import Button, { BUTTON_KIND_GHOST_LIGHT, BUTTON_SIZE_LARGE } from '../../components/Button.react';
import Layout from '../../layouts/General.react';
import Link from '../../components/Link.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
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
import { Range } from 'immutable';

@translate('work.detail.zaplo')
@Radium
export default class ZaploDk extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
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
          <div style={styles.aboutClient.topWrapper}>
            <div style={styles.aboutClient.content}>
              <Heading kind="h2">{msg('client.head')}</Heading>
              <p style={styles.paragraph}>{msg('client.text')}</p>
            </div>
            <Image
              style={styles.aboutClient.image}
              src={require('./images/4finance.svg')}
            />
          </div>

          <div style={styles.circles.wrapper}>
            <Heading kind="h3" style={styles.circles.heading}>
              {msg('client.subheading')}
            </Heading>
            <ul style={styles.circles.base}>
              {this.renderCircle('going', null, '4', true)}
              {this.renderCircle('frontend', 'change', null, true)}
              {this.renderCircle('development', 'agile', null, true)}
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
              {msg('project.heading')}
            </Heading>
            <p style={styles.paragraph}>{msg('project.text1_1')}</p>
            <p style={styles.paragraph}>{msg('project.text1_2')}</p>
          </div>
          <Image
            src={require('./images/challenge.jpg')}
            style={styles.aboutProject.projectA.image}
          />
        </Container>

        {this.renderPhotos()}

        <Container>
          <div style={styles.aboutProject.projectB.wrapper}>
            <Heading kind="h2" style={styles.aboutProject.projectA.heading}>
              {msg('project.subheading')}
            </Heading>
            <p style={styles.paragraph}>{msg('project.text2_1')}</p>
            <p style={styles.paragraph}>{msg('project.text2_2')}</p>
            <p style={styles.paragraph}>{msg('project.text2_3')}</p>
          </div>
          <Image
            src={require('./images/solution.jpg')}
            style={styles.aboutProject.projectB.image}
          />
        </Container>
      </div>
    );
  }

  renderPhotos() {
    const { msg } = this.props;
    const photosArray = Range(1, 17).map(i => this.renderPhoto(i));

    return (
      <Container style={styles.photos.wrapper}>
        <img alt={msg('Coopertion')} src={require('./images/cooperation.png')} style={styles.photos.cooperation} />
        <div style={styles.photos.innerWrapper}>
          {photosArray}
        </div>
      </Container>
    );
  }

  renderPhoto(i) {
    const { msg } = this.props;

    return (
      <div style={styles.photos.photo}>
        <img alt={msg(`Zaplo DK #${i}`)} src={require(`./images/zaplo-${i}.jpg`)} style={styles.photos.img} />
      </div>
    );
  }

  render() {
    const { msg } = this.props;

    return (
      <Layout>
        <div id="zaploDetail" style={styles.wrapper}>
          <ProjectIntro
            buttonBlendColor="#0a65a8"
            buttonKind={BUTTON_KIND_GHOST_LIGHT}
            color="linear-gradient(214deg, #3f51b5 0%, #0068a5 100%)"
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
            <ul style={styles.circles.base}>
              {this.renderCircle('react', 'react')}
              {this.renderCircle('es6', 'es6')}
              {this.renderCircle('contentful', 'contentful')}
              {this.renderCircle('chef', 'chef')}
              {this.renderCircle('nightwatch', 'nightwatch')}
              {this.renderCircle('translation', 'translation')}
            </ul>
          </div>

          <div style={styles.banner.wrapper}>
            <div style={styles.banner.text}>
              {msg('live.text')}
            </div>
            <Link to={msg('url')} target="_blank">
              <Button kind={BUTTON_KIND_GHOST_LIGHT} size={BUTTON_SIZE_LARGE} style={styles.banner.button}>{msg('live.link')}</Button>
            </Link>
          </div>

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
    container: {
      position: 'static'
    },
    wrapper: {
      [media.l]: {
        height: '750px',
      }
    },
    image: {
      [media.l]: {
        right: 0,
        left: 'auto',
        top: '80px',
        maxWidth: '60%',
        maxHeight: '960px'
      },
      '@media screen and (max-width: 920px)': {
        top: 'auto',
        bottom: '30px',
        left: '40%'
      }
    }
  },
  paragraph: {
    color: colors.gray
  },
  aboutClient: {
    wrapper: {
      padding: '32px',
      [media.l]: {
        padding: '128px 0'
      }
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
        width: '40%'
      }
    },
    image: {
      float: 'left',
      paddingLeft: 0,
      paddingRight: 0,
      width: '100%',
      [media.m]: {
        paddingLeft: '64px',
        paddingRight: '15px',
        width: '60%'
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
        top: 0,
        right: '53%',
        '@media screen and (max-width: 920px)': {
          position: 'static',
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
          margin: '0 auto'
        }
      }
    },
    projectB: {
      wrapper: {
        minHeight: '740px',
        padding: '28px 32px',
        marginTop: 0,
        width: '50%',
        '@media screen and (max-width: 920px)': {
          padding: '32px',
          minHeight: 0,
          width: '100%'
        }
      },
      image: {
        left: '53%',
        position: 'absolute',
        top: 0,
        '@media screen and (max-width: 920px)': {
          position: 'static',
          display: 'block',
          maxWidth: '100%',
          height: 'auto',
          margin: '0 auto'
        }
      }
    }
  },
  banner: {
    wrapper: {
      color: 'white',
      padding: '90px 15px 80px',
      textAlign: 'center',
      background: 'linear-gradient(37deg, rgb(53, 99, 177) 0%, rgb(53, 99, 177) 40%, rgb(0, 118, 164) 60%, rgb(0, 118, 164) 100%)'
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
      fixedWidth: {
        [media.m]: {
          width: '25%',
          flexBasis: '25%'
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
  photos: {
    wrapper: {
      textAlign: 'right',
      marginBottom: '40px',
      [media.l]: {
        marginBottom: '130px'
      }
    },
    innerWrapper: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
    },
    photo: {
      width: `${100 / 4}%`,
      float: 'left',
      padding: '6px',
      [media.m]: {
        width: `${100 / 8}%`,
      }
    },
    img: {
      display: 'block',
      width: '100%',
      height: 'auto',
    },
    cooperation: {
      marginRight: '6px'
    }
  },
  contactForm: {
    margin: '128px auto'
  }
};
