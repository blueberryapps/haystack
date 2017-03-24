import Member from './Member.react';
import React, { PropTypes, PureComponent } from 'react';

export default class Team extends PureComponent {

  static propTypes = {
    members: PropTypes.array,
  }

  render() {
    const { members } = this.props;

    return (
      <div style={styles.wrapper}>
        {members.map(person => <Member detail={person} key={person.image} />)}
      </div>
    );
  }

}

const styles = {
  wrapper: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
    position: 'relative'
  }
};
