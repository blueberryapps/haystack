import Icon from '../Icon.react';
import moment from 'moment';
import React, { PropTypes, PureComponent } from 'react';
import translate from 'ts-translate';
import { colors } from '../../globals';

@translate()
export default class LastTweet extends PureComponent {

  static propTypes = {
    msg: React.PropTypes.func.isRequired,
    tweet: PropTypes.object
  }

  static defaultProps = {
    tweet: {
      entities: {
        hashtags: [],
        text: '',
        created_at: new Date()
      }
    }
  }

  renderLoading() {
    const { msg } = this.props;

    return <div>{msg('twitter.loading')}</div>;
  }

  renderTime() {
    const { tweet: { created_at: created } } = this.props;
    const time = moment(created, 'ddd MMM DD HH:mm:ss ZZ YYYY').fromNow();
    return <div style={styles.time}>{time}</div>;
  }

  renderTweet() {
    const { tweet: { entities: { hashtags }, text } } = this.props;
    let tweet = text;

    hashtags.map((hash) => {
      tweet = tweet.replace(
        new RegExp(`#${hash.text}`, 'g'),
        `#${hash.text}`
      );
    });

    return (
      <div>{tweet}</div>
    );
  }

  render() {
    const { msg, tweet } = this.props;

    if (!tweet) return this.renderLoading();

    return (
      <div style={styles.wrapper}>
        <div style={styles.content}>
          {this.renderTweet()}
        </div>
        <div style={styles.info}>
          <Icon color={colors.primary} kind="twitter" size={14} />
          {this.renderTime()}
          {msg('twitter.provider')}
        </div>
      </div>
    );
  }

}

const styles = {
  wrapper: {
  },
  content: {
    fontSize: '1.25em',
    marginBottom: '.75em'
  },
  info: {
    color: colors.primary,
    fontSize: '.85em'
  },
  time: {
    display: 'inline-block',
    margin: '0 .25em'
  }
};
