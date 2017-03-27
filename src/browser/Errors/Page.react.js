import Container from '../components/Container.react';
import Layout from '../layouts/General.react';
import Icon from '../components/Icon.react';
import Link from '../components/Link.react';
import Radium from 'radium';
import React, { PropTypes as RPT, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors, media } from '../globals';

@translate('errors')
@Radium
export default class ErrorPage extends PureComponent {

  static propTypes = {
    children: RPT.object,
    msg: RPT.func.isRequired,
    type: RPT.oneOf(['404', '500']).isRequired
  }

  render() {
    const { children, msg, type } = this.props;

    return (
      <Layout headerColor={colors.primary}>
        <Container>
          <div style={styles.wrapper}>
            {children}
            <div style={styles.grapicsWrapper}>
              <Icon kind="globe" size={100} color={colors.primary} style={styles.icon} wrapperStyle={styles.iconWrapper} />
              <div style={styles.image.wrapper}>
                <img alt="ekg" src={require('../../../assets/images/ekg.jpg')} style={styles.image.base} />
                <div style={styles.image.animation}>
                  <img alt="blue ekg" src={require('../../../assets/images/ekg-blue.jpg')} style={styles.image.blue} />
                </div>
              </div>
              <Icon kind={`monitor_${type}`} size={100} color="#D7D7D7" style={styles.icon} wrapperStyle={styles.iconWrapper} />
            </div>
            <div style={styles.link.wrapper}>
              <Link to="/" style={styles.link.base}>{msg('back')}</Link>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }
}

const fillKeyframes = Radium.keyframes({
  '0%': { width: '0%' },
  '40%': { width: '65%' },
  '100%': { width: '100%' },
}, 'fill');

const styles = {
  wrapper: {
    padding: '100px 15px 40px',
    minHeight: 'calc(100vh - 267px)',
    [media.m]: {
      padding: '130px 15px 50px'
    },
    [media.l]: {
      padding: '180px 15px 100px'
    },
  },
  grapicsWrapper: {
    display: 'block',
    width: '100%',
    [media.m]: {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'nowrap'
    }
  },
  image: {
    base: {
      display: 'block',
      width: '100%',
      flex: '1 1 auto',
      height: 'auto'
    },
    blue: {
      display: 'block',
      width: 'auto',
      height: '100%'
    },
    animation: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      overflow: 'hidden',
      animation: 'x linear 3s 3s infinite',
      animationName: fillKeyframes,
    },
    wrapper: {
      position: 'relative',
      margin: '0px 20px'
    }
  },
  icon: {
    maxWidth: '100%',
  },
  iconWrapper: {
    width: '100%',
    textAlign: 'center',
    flex: '1 0 auto',
    margin: '20px 0',
    [media.m]: {
      margin: 0,
      width: 'auto'
    }
  },
  link: {
    base: {
      fontSize: '20px',
      display: 'block',
      textDecoration: 'underline'
    },
    wrapper: {
      textAlign: 'center',
      marginTop: '100px'
    }
  }
};
