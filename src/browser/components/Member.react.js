import Heading from './heading/Heading.react';
import Radium from 'radium';
import React, { PropTypes, PureComponent } from 'react';
import { media } from '../globals';

@Radium
export default class Member extends PureComponent {

  static propTypes = {
    detail: PropTypes.object
  }

  render() {
    const { detail: { image, name, title } } = this.props;

    return (
      <div style={styles.wrapper}>
        <img
          alt={name}
          src={require(`../../../assets/img/persons/${image}.jpg`)}
          style={styles.image}
        />
        <Heading kind="h5" style={styles.heading}>
          {name}
        </Heading>
        {title && <span dangerouslySetInnerHTML={{ __html: title }} style={styles.title} />}
      </div>
    );
  }

}

const styles = {
  wrapper: {
    flex: '0 0 auto',
    flexBasis: '100%',
    marginBottom: '64px',
    position: 'relative',
    textAlign: 'center',
    [media.s]: {
      flexBasis: '33.3%',
    },
    [media.m]: {
      flexBasis: '25.0%'
    }
  },
  image: {
    marginBottom: '16px',
    maxWidth: '100%'
  },
  heading: {
    fontSize: '1.05em',
    [media.s]: {
      fontSize: '1.1em',
    }
  },
  title: {
    fontWeight: '300',
    fontSize: '1.15em'
  }
};
