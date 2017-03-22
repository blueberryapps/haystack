import Heading from '../heading/Heading.react';
import Tweet from './LastTweet.react';
import Radium from 'radium';
import React, { PureComponent } from 'react';
import translate from 'ts-translate';
import { media } from '../../globals';

@translate()
@Radium
export default class TeamTwitter extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func.isRequired
  }

  render() {
    const { msg } = this.props;

    return (
      <div style={styles.wrapper}>
        <Heading
          kind="h5"
          src={require('./images/life-in-our-team.svg')}
          style={styles.heading}
        >
          {msg('twitter.heading')}
        </Heading>
        <div style={styles.line} />
        <div style={styles.tweet}>
          <Tweet />
        </div>
      </div>
    );
  }

}

const styles = {
  wrapper: {
    display: 'block',
    margin: '96px auto',
    [media.l]: {
      width: '80%'
    },
    [media.s]: {
      display: 'flex'
    }
  },
  heading: {
    flex: '0 0 auto',
    margin: '8px 0'
  },
  line: {
    backgroundColor: '#ccc',
    flex: '0 0 auto',
    height: '1px',
    margin: '18px 16px 12px 0',
    width: '100px',
    [media.s]: {
      margin: '18px 16px 0 0'
    }
  },
  tweet: {
    flex: '1 1 auto'
  }
};
