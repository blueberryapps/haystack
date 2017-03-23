import Button, { BUTTON_KIND_GHOST_DARK, BUTTON_SIZE_LARGE } from '../../components/Button.react';
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
  Image,
  ProjectIntro
} from '../../components';
import {
  colors,
  media
} from '../../globals';
import { Map } from 'immutable';

const partners = Map({
  czc: 'czc.cz',
  heureka: 'Heureka',
  alza: 'alza.cz',
  fragile: 'FRAGILE MEDIA',
  srovname: 'srovname.cz',
  b2bgroup: 'B2B GROUP',
  kofeinon: 'KOFEIN ON',
  kytarycz: 'kytary.cz',
});

@listenWindowResize
@translate()
@Radium
export default class PPCBee extends Component {

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
          {msg(`work.detail.ppcbee.circles.${key}`)}
        </Heading>
      </li>
    );
  }

  renderAboutClient() {
    const { msg } = this.props;
    const clients = partners.map(
      (value, key) => <li key={key} style={styles.logos.item}><img src={require(`./images/logo-${key}.png`)} style={styles.logos.img} alt={value} /></li>
    );

    return (
      <div style={styles.aboutClient.wrapper}>
        <Container>
          <div style={styles.aboutClient.topWrapper}>
            <div style={styles.aboutClient.content}>
              <Heading kind="h2">{msg('work.detail.ppcbee.client.head')}</Heading>
              <p style={styles.paragraph}>{msg('work.detail.ppcbee.client.text')}</p>
            </div>
            <Image
              style={styles.aboutClient.image}
              src={require('./images/ppc-bee.svg')}
            />
          </div>

          <div style={styles.logos.wrapper}>
            <Heading kind="h3" style={styles.circles.heading}>
              {msg('work.detail.ppcbee.client.subheading')}
            </Heading>
            <ul style={styles.logos.base}>
              {clients}
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
              {msg('work.detail.ppcbee.project.heading')}
            </Heading>
            <p style={styles.paragraph}>{msg('work.detail.ppcbee.project.text1')}</p>
            <p style={styles.paragraph}>{msg('work.detail.ppcbee.project.text2')}</p>
          </div>
          <img
            src={require('./images/solution.jpg')}
            style={styles.aboutProject.projectA.image}
          />
        </Container>
      </div>
    );
  }

  render() {
    const { msg } = this.props;

    return (
      <Layout headerColor={colors.black}>
        <div id="ppcbee" style={styles.wrapper}>
          <ProjectIntro
            style={{ wrapper: { color: colors.black } }}
            buttonBlendColor="#ffc20a"
            buttonKind={BUTTON_KIND_GHOST_DARK}
            color="#ffd200"
            image={require('./images/intro.png')}
            link={msg('work.detail.ppcbee.url')}
            linkTitle={msg('work.detail.ppcbee.link')}
            style={styles.intro}
            title={msg('work.detail.ppcbee.heading')}
          >
            {msg('work.detail.ppcbee.perex')}
          </ProjectIntro>

          {this.renderAboutClient()}
          {this.renderAboutProject()}

          <Container>
            <div style={styles.circles.wrapper}>
              <Heading kind="h3" style={styles.circles.heading}>
                {msg('work.detail.ppcbee.technology')}
              </Heading>
              <ul style={styles.circles.base}>
                {this.renderCircle('ruby', 'ruby')}
                {this.renderCircle('rails', 'rails')}
                {this.renderCircle('redis', 'redis')}
                {this.renderCircle('elasticsearch', 'elasticsearch')}
                {this.renderCircle('postgresql', 'postgresql')}
              </ul>
            </div>
          </Container>

          <div style={styles.banner.wrapper}>
            <div style={styles.banner.text}>
              {msg('work.detail.ppcbee.live.text')}
            </div>
            <Link to={msg('work.detail.ppcbee.url')} target="_blank">
              <Button kind={BUTTON_KIND_GHOST_DARK} size={BUTTON_SIZE_LARGE} style={styles.banner.button}>{msg('work.detail.ppcbee.live.link')}</Button>
            </Link>
          </div>

          <Container style={styles.container}>
            <Heading>
              {msg('work.detail.ppcbee.hire')}
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
      position: 'relative',
      maxWidth: '1100px'
    },
    wrapper: {
      color: 'black',
      [media.m]: {
        paddingTop: '148px',
        paddingBottom: '108px',
        height: '768px',
      }
    },
    image: {
      '@media screen and (max-width: 990px)': {
        left: '21%'
      },
      [media.m]: {
        left: '30%',
        top: '-129px'
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
      marginBottom: '80px',
      [media.m]: {
        marginBottom: '150px'
      }
    },
    content: {
      paddingLeft: 0,
      position: 'relative',
      [media.m]: {
        float: 'left',
        width: '49%'
      }
    },
    image: {
      margin: '0 auto',
      paddingLeft: 0,
      paddingRight: 0,
      width: '200px',
      maxWidth: '80%',
      [media.m]: {
        margin: 0,
        paddingLeft: '35px',
        width: 'auto',
        maxWidth: '45%',
        float: 'left'
      },
      [media.l]: {
        paddingLeft: '122px',
        paddingRight: '15px'
      }
    }
  },
  aboutProject: {
    wrapper: {
      marginTop: '30px',
      clear: 'both'
    },
    projectA: {
      wrapper: {
        padding: '32px 32px 32px 0',
        marginLeft: '50%',
        marginTop: 0,
        minHeight: '480px',
        width: '50%',
        '@media screen and (max-width: 920px)': {
          padding: '32px 32px 0',
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
        top: '-60px',
        right: '54%',
        '@media screen and (max-width: 920px)': {
          position: 'static',
          display: 'block',
          width: '80%',
          maxWidth: '550px',
          height: 'auto',
          margin: '0 auto',
          transform: 'translateX(-5%)'
        }
      }
    }
  },
  banner: {
    wrapper: {
      color: 'black',
      padding: '90px 15px 80px',
      textAlign: 'center',
      background: '#ffd200'
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
      position: 'relative',
      '@media screen and (min-width: 921px)': {
        marginTop: '230px',
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
        justifyContent: 'center',
      },
      [media.l]: {
        marginLeft: '-32px',
        marginRight: '-32px',
        justifyContent: 'space-between'
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
  },
  logos: {
    wrapper: {
      clear: 'both',
      position: 'relative'
    },
    base: {
      margin: '70px 0 0',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap',
      listStyle: 'none',
    },
    item: {
      padding: '0 10px 15px',
      width: '50%',
      textAlign: 'center',
      [media.m]: {
        paddingLeft: '20px',
        paddingRight: '20px',
        width: '33.33%'
      },
      [media.l]: {
        width: '25%',
        paddingBottom: '41px'
      }
    },
    img: {
      maxWidth: '90%',
      maxHeight: '50px',
      [media.m]: {
        maxWidth: '100%',
        maxHeight: 'none'
      }
    }
  }
};
