import Button, { BUTTON_KIND_GHOST_DARK, BUTTON_SIZE_LARGE } from '../../components/Button.react';
import Layout from '../../layouts/General.react';
import Link from '../../components/Link.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
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

const UntranslatedCircle = ({ msg, name, icon, iconPlaceholder }) => (
  <li style={styles.circles.item.base}>
    <div style={styles.circles.item.icon}>
      {icon && <Icon color={colors.primary} kind={icon} size={80} />}
      {iconPlaceholder &&
        <div style={styles.circles.item.string}>{iconPlaceholder}</div>
      }
    </div>
    <Heading kind="h4" style={styles.circles.item.heading}>
      {msg(name)}
    </Heading>
  </li>
);

UntranslatedCircle.propTypes = {
  name: RPT.string.isRequired,
  icon: RPT.string.isRequired,
  iconPlaceholder: RPT.string,
  msg: RPT.func.isRequired
};

const Circle = translate('circles')(UntranslatedCircle);

const Partner = ({ name, image }) => (
  <li style={styles.logos.item}>
    <img src={require(`./images/logo-${image}.png`)} style={styles.logos.img} alt={name} />
  </li>
);

Partner.propTypes = {
  name: RPT.string,
  image: RPT.string
};

@translate('work.detail.ppcbee')
@Radium
export default class PPCBee extends PureComponent {

  static propTypes = {
    msg: RPT.func.isRequired
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
              alt={msg('PPC Bee')}
              style={styles.aboutClient.image}
              src={require('./images/ppc-bee.svg')}
            />
          </div>

          <div style={styles.logos.wrapper}>
            <Heading kind="h3" style={styles.circles.heading}>
              {msg('client.subheading')}
            </Heading>
            <ul style={styles.logos.base}>
              <Partner image="czc" name="czc.cz" />
              <Partner image="heureka" name="Heureka" />
              <Partner image="alza" name="alza.cz" />
              <Partner image="fragile" name="FRAGILE MEDIA" />
              <Partner image="srovname" name="srovname.cz" />
              <Partner image="b2bgroup" name="B2B GROUP" />
              <Partner image="kofeinon" name="KOFEIN ON" />
              <Partner image="kytarycz" name="kytary.cz" />
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
            <p style={styles.paragraph}>{msg('project.text1')}</p>
            <p style={styles.paragraph}>{msg('project.text2')}</p>
          </div>
          <img
            alt={msg('Solution')}
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
            buttonBlendColor="#ffc20a"
            buttonKind={BUTTON_KIND_GHOST_DARK}
            color="#ffd200"
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

          <Container>
            <div style={styles.circles.wrapper}>
              <Heading kind="h3" style={styles.circles.heading}>
                {msg('technology')}
              </Heading>
              <ul style={styles.circles.base}>
                <Circle name="ruby" icon="ruby" />
                <Circle name="rails" icon="rails" />
                <Circle name="redis" icon="redis" />
                <Circle name="elasticsearch" icon="elasticsearch" />
                <Circle name="postgresql" icon="postgresql" />
              </ul>
            </div>
          </Container>

          <div style={styles.banner.wrapper}>
            <div style={styles.banner.text}>
              {msg('live.text')}
            </div>
            <Link to={msg('url')} target="_blank">
              <Button kind={BUTTON_KIND_GHOST_DARK} size={BUTTON_SIZE_LARGE} style={styles.banner.button}>{msg('live.link')}</Button>
            </Link>
          </div>

          <Container style={styles.container}>
            <Heading>
              {msg('hire')}
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
