import Button from './Button.react';
import Container from './Container.react';
import Helmet from 'react-helmet';
import Heading from './heading/Heading.react';
import Image from './Image.react';
import Link from './Link.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import { media } from '../globals';

@Radium
export default class ProjectIntro extends PureComponent {

  static propTypes = {
    buttonBlendColor: PropTypes.string,
    buttonKind: PropTypes.string,
    color: PropTypes.string,
    children: PropTypes.any,
    image: PropTypes.string,
    link: PropTypes.string,
    linkTitle: PropTypes.string,
    style: PropTypes.oneOf([
      PropTypes.arrayOf(PropTypes.object),
      PropTypes.object
    ]),
    title: PropTypes.string
  }

  render() {
    const { buttonBlendColor, buttonKind, color, children, image, link, linkTitle, style, title } = this.props;

    return (
      <div style={[styles.wrapper, style.wrapper, { background: color }]}>
        <Container style={style.container}>
          <Helmet title={title} />
          <div>
            <h1>TODO: SHOW ONLY ON LARGE</h1>
            <Image src={image} style={[styles.image, style.image]} />
          </div>
          <div style={styles.content}>
            <Heading>{title}</Heading>
            <span style={styles.text}>{children}</span>
            <Link id="externalLink" to={link} target="_blank" style={{ display: 'block' }}>
              <Button
                blendColor={buttonBlendColor}
                kind={buttonKind}
                style={styles.link}
              >
                {linkTitle}
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    color: 'white',
    position: 'relative',
    padding: '128px 24px'
  },
  content: {
    [media.m]: {
      width: '40%'
    }
  },
  text: {
    fontSize: '20px'
  },
  image: {
    left: '50%',
    position: 'absolute',
    top: 0,
    zIndex: 1
  },
  link: {
    marginTop: '2em'
  }
};
